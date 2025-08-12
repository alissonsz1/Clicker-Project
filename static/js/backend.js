
// FUNÇÕES

// Para setar os cookie do usuário
function setCookie(cookieName, cookieValue, expiresDays){
    const d = new Date(); // pega o dia de hoje
    d.setTime(d.getTime() + (expiresDays*24*60*60*1000)); // configura o d para daqui 8 dias
    document.cookie = `${cookieName} = ${cookieValue}; expires = ${d.toUTCString()}; path=/`; //define o cookie
}

// Pegar o cookie
function getCookie(key) {
    // A expressão regex checa se: está no começo ou se possui um ponto e vírgula com espaços em seguida (";  ")
    // Se achar isso, procurará por "key=" e depois o número correspondente
    const regex = new RegExp(`(?:^|;\\s*)${key}=(\\d+)`)
    const match = document.cookie.match(regex)
    const cookieId = match?.[1] // [1] retorna o primeiro grupo encontrado que segue esse padrão
    return cookieId
}

// VARIÁVIES GLOBAIS
let companyName = document.querySelector('.company-text'); // Nome do player
let idPlayer = getCookie("id"); // pega o id do player caso tenha salvo
let playerDetails; // vai armazenar os dados do player através de seu id
let lsCount; // coleta os pontos do player

// variáveis em csrftoken
window.csrfToken = document.getElementById("csrf-token").value;

// DISPACTCHES
// Manda os dados dos jogadores no leader board para o script
function dispatchLeaderboard(leaderboardList){
    const event = new CustomEvent("dispatchLeaderboard", {
        detail: { lb: leaderboardList }
    })

    window.dispatchEvent(event);
}

// Manda os dados do Player para o script
function dispatchPlayerData(playerData){
    const event = new CustomEvent("dispatchPlayerData", {
        detail: { player: playerData }
    })

    window.dispatchEvent(event);
}

// Envia o nome registrado para o script
function dispatchNameSubmit(type, obj, hasToRenderLb = false) {
    const event = new CustomEvent(type, {
        detail: {...obj, hasToRenderLb}
    })

    window.dispatchEvent(event);
}

// FETCH

// Manda uma requesição GET para coletar os dados, e vai realizar uma outra requesição dependendo qual seja
function getData(){
    fetch("/get-data/", {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": csrfToken,
    },
})
    .then(res =>{
        // Caso dê erro, ele manda um aviso no console
        if(!res.ok) throw new Error("Dados não encontrado.");
        return res.json();
    })
    .then(data =>{
        if(idPlayer){
            // caso o idPlayer não tenha valor, ele executa o código abaixo.
            playerDetails = data.find( obj => obj.id == idPlayer ); // Encontra o player
            if(playerDetails){
                playerDetails.lsCount = Number(playerDetails.lsCount); // Converte os pontos em notação em números
                playerDetails.lsHighest = Number(playerDetails.lsHighest); // Converte os pontos em notação em números
                dispatchPlayerData(playerDetails); // esse manda todos os dados do player
                dispatchNameSubmit('submitSucess', {companyName: playerDetails.companyName});
                dataComplete = data.map(item => { return {...item, lsCount: Number(item.lsHighest)}} );// tranforma os pontos em notação científica em número inteiro
                dataComplete.sort((a,b)=>{ return b.lsCount - a.lsCount }); // organiza os dados em relação aos pontos
                dispatchLeaderboard(dataComplete);
            } else {
                // AQUI, TEM O PLAYER TEM UM ID NO COOKIE, MAS NÃO TEM ESSE ID CADASTRADO NO BD
                dispatchNameSubmit('submitError', {error: "Player não encontrado"});
            }
        }
        
    })
    .catch(err =>{
        console.error("Error", err);
    })
    
}


// Posta no nome da do player e salva seu id
function postCompany(post){
    fetch("/post-data/", {
        method:"POST",
        headers:{
            "Content-Type": "application/json",
            "X-CSRFToken": csrfToken,
        },
        body: JSON.stringify(post)
    })
        .then(res => {
            if(!res.ok) throw new Error("Erro ao postar o dado");
            return res.json();
        })
        .then(data => {
            lsCount = 0;
            idPlayer = data.id;
            setCookie("id", data.id, 8);
            dispatchNameSubmit('submitSucess', {companyName: post.companyName}, true);
        })
        .catch(err => {
            console.error("ERRO:",err);
        })
}

// Atualiza as linha 
function patchLS(patch){
    fetch("/patch-ls-data/", {
        method:"PATCH",
        headers: {
            "Content-Type":"application/json",
            "X-CSRFToken": csrfToken
        },
        body: JSON.stringify(patch)
    })
    .then( res => {
        if(!res.ok) throw new Error("Erro ao atualizar as LS no BD");
        return res.json();
    })
    .catch( err => {
        console.error("Error ", err );
    })
}

// verifica se há o nome no banco de dados e manda uma mensagem para o script.js (Se há o nome, se o campo está vazio ou o próprio nome)
function updateNamePlayer(name){
    fetch("/get-data/", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": csrfToken
        },
    })
    .then( res => {
        if(!res.ok) throw new Error("Erro ao mandar o upgrade");
        return res.json();
    })
    .then(data => {

        if (!name) {
            dispatchNameSubmit('submitError', {error: "Campo vazio!"});
            return
        }

        if (String(name).length > 15) {
            dispatchNameSubmit('submitError', {error: "Nome muito longo!"});
            return
        }
            
        let existName  = data.find(item => item.companyName == name );
        
        if(existName){
            dispatchNameSubmit('submitError', {error: "Nome já existente!"});
        } else {
            postCompany({"companyName": name});
        }
    })
    .catch( err => {
        console.error("Error", err );
    })
}

// RODAR AO INICIALIZAR
if (idPlayer){
    getData();
}

// EVENTOS WINDOWS

// Traz os pontos do script.js através do evento criado
window.addEventListener("pontosAtualizados", (event) => {
    const novoValor = event.detail.newPoints;
    const novoValorMaior = event.detail.newHighestPoint;

    lsHighest = Number(novoValorMaior);
    lsCount = Number(novoValor);

  // CASO O NÚMERO CHEGA À 1 MILHÃO, COMEÇA A ANOTAR EM NOTAÇÃO CIENTÍFICA
  if(lsCount > 1e6) lsCount = lsCount.toExponential(3);
  if(lsHighest > 1e6) lsHighest = lsHighest.toExponential(3);

  patchLS({"id": idPlayer, "lsCount": lsCount, "lsHighest": lsHighest||"0" });

});

// Escuta caso o player acione o botão do modal
window.addEventListener("submitName", (event) => {
    let newNamePlayer = event.detail.newName;
    updateNamePlayer(newNamePlayer);
})

window.addEventListener("requestLeaderboard", (e) => {
    fetch("/leaderboard/", {
        method:"GET",
        headers: {
            "Content-Type":"application/json",
            "X-CSRFToken": csrfToken,
        },
    })
    .then(res => {
      if(!res.ok) throw new Error("Error ao carregar os dados do leaderboard");
      return res.json();
    })
    .then(data => {

        dataComplete = data.map(item => { return {...item, lsCount: Number(item.lsHighest)}} ); // converte os pontos em notação científicas para números
        dataComplete.sort((a,b)=>{ return b.lsCount - a.lsCount }); // Organiza por ordem de pontos
        dispatchLeaderboard(dataComplete);
    })
    .catch( err => {
      console.error("ERRO AO CARREGAR O LEADERBOARD: ", err);
    })
})

// CASO QUEIRA, PODE-SE DELETAR O COOKIE (AMBIENTE DE TESTE)
function deleteCookie(name){
    setCookie(name, "", -1);
}