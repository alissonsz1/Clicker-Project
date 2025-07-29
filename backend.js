// Funções

// Manda o nome para o script.js
function dispatchNewName(name) {
    const event = new CustomEvent("updateCompany", {
        detail: { company: name }
    })

    window.dispatchEvent(event);
}

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

// Hera um nome aleatório
function sampleName(min, max) {
  let num = Math.floor(Math.random() * (max - min) + min);
  return `DEV${num}`;
}

// verifica se esse nome existe no banco de dados
function verifyIfNameExist(list, nameTest){
    const dataFound = list.find(obj => obj.companyName == nameTest); // pega os dados do db e tenta achar o nome que foi passado
    if(dataFound && dataFound.id != idPlayer){ // caso ele existe, testa com um novo nome
        nameTest = sampleName(1, 1000); 
        return verifyIfNameExist(list, nameTest);
    } else {
        return nameTest; // se não existir esse nome, retorna os nome
    }
}


// VARIÁVIES GLOBAIS
let companyName = document.querySelector('.company-text'); // Nome do player
let nameCompanyInit = sampleName(1,10000); // Nome inicial do gerado
let idPlayer = getCookie("id"); // pega o id do player caso tenha salvo
let playerDetails; // vai armazenar os dados do player através de seu id
let lsCount; // coleta os pontos do player
let upgradesList = [];
let structList = [];


// variáveis em csrftoken
window.csrfToken = document.getElementById("csrf-token").value;

// FETCH

// Manda uma requesição GET para coletar os dados, e vai realizar uma outra requesição dependendo qual seja
function getData(nameMethod, fetchFunction){
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
            if(nameMethod == "postInit"){
                nameCompanyInit = verifyIfNameExist(data,nameCompanyInit);
                fetchFunction({"companyName": nameCompanyInit});
                dispatchNewName(nameCompanyInit);
                dispatchNewName(nameCompanyInit)
            }
        } else {
            //Se existir ip, ele vai ou atualizar o nome do player quando ele socilitar
            if(nameMethod == "patchNameCompany"){
                nameCompanyInit = verifyIfNameExist(data,companyName.innerText);
                fetchFunction({"id": idPlayer, "companyName": nameCompanyInit});

            
            // ou vai pegar os dados do player no banco de dados
            } else {
                playerDetails = data.find( obj => obj.id == idPlayer );
                if(playerDetails){
                    nameCompanyInit = playerDetails.companyName;
                    dispatchPlayerData(playerDetails); // esse manda todos os dados dp player
                } else {
                    nameCompanyInit = verifyIfNameExist(data,nameCompanyInit);
                    fetchFunction({"companyName": nameCompanyInit});
                    dispatchPlayerData(playerDetails);
                }
            }
            data.sort((a,b)=>{ return b.lsCount - a.lsCount })
            dispatchLearderboardData(data)
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
            dispatchNewName(nameCompanyInit)
            lsCount = 0;
            setCookie("id", data.id, 8);
            idPlayer = getCookie("id");
        })
        .catch(err => {
            console.error("ERRO:",err)
        })
}


// Atualiza o noma da compania quando o usuário modifica o span
function patchCompanyName(patch){
    fetch("/patch-name-data/", {
        method: "PATCH",
        headers: {
            "Content-Type":"application/json",
            "X-CSRFToken": csrfToken,
        },
        body: JSON.stringify(patch)
    })
    .then(res => {
        if(!res.ok) throw new Error("Erro ao atualizar")
        return res.json()
    })
    .then(data => {
        dispatchNewName(nameCompanyInit)
    })
    .catch(err => {
        console.error("ERRO:", err)
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

// RODAR AO INICIALIZAR
getData("postInit", postCompany)


// Eventos windows
//Quando o span é deselecionado e chama a função para atualizar o nome 
companyName.addEventListener('blur', ()=>{
    getData("patchNameCompany", patchCompanyName)
})

// Quando o usuário aperta o enter, ele deseleciona o campo
companyName.addEventListener('keydown', event =>{
    if(event.key == "Enter"){
        event.preventDefault()
        companyName.blur()
    }
})

// Traz os pontos do script.js através do evento criado
window.addEventListener("pontosAtualizados", (event) => {
  const novoValor = event.detail.newPoints;
  lsCount = novoValor;
  patchLS({"id": idPlayer, "lsCount": lsCount})

});



// CASO QUEIRA, PODE-SE DELETAR O COOKIE (AMBIENTE DE TESTE)
function deleteCookie(name){
    setCookie(name, "", -1);
}