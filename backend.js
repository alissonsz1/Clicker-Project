// Funções

// Manda os dados do Player para o 
function dispatchPlayerData(playerData){
    const event = new CustomEvent("dispatchPlayerData", {
        detail: { player: playerData }
    })

    window.dispatchEvent(event);
}

// Manda os dados iniciais do learderboard para script.js
function dispatchLearderboardData(data){
    const event = new CustomEvent("dispatchLearderboardData", {
        detail: {leaderboardData: data}
    });

    window.dispatchEvent(event);
}


// Para setar os cookie do usuário
function setCookie(cookieName, cookieValue, expiresDays){
    const d = new Date(); // pega o dia de hoje
    d.setTime(d.getTime() + (expiresDays*24*60*60*1000)); // configura o d para daqui 8 dias
    document.cookie = `${cookieName} = ${cookieValue}; expires = ${d.toUTCString()}; path=/` //define o cookie
}

// Pegar o cookie
function getCookie(name) {
  const value = `; ${document.cookie}`; // Recebe o cookie (ele vem em string)
  const parts = value.split(`; ${name}=`); // Separa o cookie de acordo com um padrão, com o dado que se quer
  if (parts.length === 2) {
    return parts.pop().split(';').shift(); // separa esse dado do resto
  }
  return null;
}


// VARIÁVIES GLOBAIS
let companyName = document.querySelector('.company-text'); // Nome do player
let idPlayer = getCookie("id"); // pega o id do player caso tenha salvo
let playerDetails; // vai armazenar os dados do player através de seu id
let lsCount; // coleta os pontos do player

// variáveis em csrftoken
window.csrfToken = document.getElementById("csrf-token").value;

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
        // caso o idPlayer não tenha valor, ele executa o código abaixo.
        if(!idPlayer){
            // O PLAYER NÃO TEM UM ID AINDA, PRECISAR CADASTRAR
            console.log("Dev não cadastrado!");
            modalContainer.classList.remove('disabled');
        } else {
            playerDetails = data.find( obj => obj.id == idPlayer );
            if(playerDetails){
                dispatchPlayerData(playerDetails); // esse manda todos os dados dp player
                data.sort((a,b)=>{ return b.lsCount - a.lsCount })
                dispatchLearderboardData(data);
                modalContainer.classList.add('disabled');
            } else {
                // AQUI, TEM O PLAYER TEM UM ID NO COOKIE, MAS NÃO TEM ESSE ID CADASTRADO NO BD
                console.log("Dev não encontrado!");
                modalContainer.classList.remove('disabled');
            }
        }
    })
    .catch(err =>{
        console.error("Error", err)
    })
    
}


// Posta no nome da do player
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
            return res.json()
        })
        .then(data => {
            lsCount = 0;
            setCookie("id", data.id, 8);
            idPlayer = getCookie("id");
        })
        .catch(err => {
            console.error("ERRO:",err)
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
        if(!res.ok) throw new Error("Erro ao atualizar as LS no BD")
        return res.json()
    })
    .catch( err => {
        console.error("Error ", err )
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
        if(!res.ok) throw new Error("Erro ao mandar o upgrade")
        return res.json()
    })
    .then(data => {

        if(!name) return window.dispatchEvent(
            new CustomEvent("submitError", {
                detail: "Campo vazio!",
            })
        )
            
        let existName  = data.find( item => item.companyName == name );
        postCompany({"companyName": name});
        
        if(!existName){
            let event = new CustomEvent("submitSucess", {
                detail: name,
            });

            window.dispatchEvent(event);
                        
        } else {
            let event = new CustomEvent("submitError", {
                detail: "Nome já existente!",
            });
            window.dispatchEvent(event);
        }
    })
    .catch( err => {
        console.error("Error", err )
    })
}

// RODAR AO INICIALIZAR
getData();


// Eventos windows

// Traz os pontos do script.js através do evento criado
window.addEventListener("pontosAtualizados", (event) => {
  const novoValor = event.detail.newPoints;
  lsCount = novoValor;
  patchLS({"id": idPlayer, "lsCount": lsCount})

});


// Escuta caso o player acione o botão do modal
window.addEventListener("submitName", (event)=>{
    let newNamePlayer = event.detail.newName;
    updateNamePlayer(newNamePlayer);

})

// CASO QUEIRA, PODE-SE DELETAR O COOKIE (AMBIENTE DE TESTE)
function deleteCookie(name){
    setCookie(name, "", -1);
}