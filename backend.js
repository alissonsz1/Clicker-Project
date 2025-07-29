// Funções

function updateLsDisplay(newValue) {
  // Dispara um evento personalizado com o novo valor
  const event = new CustomEvent("updateLsDisplay", {
    detail: { newPoints: newValue }
  });

  window.dispatchEvent(event); // Notifica outros scripts
}

function dispatchNewName(name) {
    const event = new CustomEvent("updateCompany", {
        detail: { company: name }
    })

    window.dispatchEvent(event);
}

function dispatchUpdateList(list) {
    const event = new CustomEvent("dispatchUpdateList", {
        detail: { updateList: list }
    })

    window.dispatchEvent(event);
}

function dispatchStructList(list) {
    const event = new CustomEvent("dispatchStructList", {
        detail: { structList: list }
    })

    window.dispatchEvent(event);
}

function dispatchNameSubmit(type, obj) {
    const event = new CustomEvent(type, {
        detail: obj
    })

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
                dispatchNewName(nameCompanyInit)
            }
        } else {
            //Se existir ip, ele vai ou atualizar o nome do player quando ele socilitar
            if(nameMethod == "patchNameCompany"){
                nameCompanyInit = verifyIfNameExist(data,companyName.innerText);
                fetchFunction({"id": idPlayer, "companyName": nameCompanyInit});
                dispatchNewName(nameCompanyInit)
            
            // ou vai pegar os dados do player no banco de dados
            } else {
                playerDetails = data.find( obj => obj.id == idPlayer );
                dispatchNewName(playerDetails.companyName)
                updateLsDisplay(playerDetails.lsCount)
                dispatchUpdateList(playerDetails.upgrades)
                dispatchStructList(playerDetails.structures)
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

function updatePlayerUpgrades(patch){
    fetch("/patch-upgrades-data/", {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": csrfToken
        },
        body: JSON.stringify(patch)
    })
    .then( res => {
        if(!res.ok) throw new Error("Erro ao mandar o upgrade")
        return res.json()
    })
    .catch( err => {
        console.error("Error", err )
    })
}

function updatePlayerStructs(patch){
    fetch("/patch-struct-data/", {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": csrfToken
        },
        body: JSON.stringify(patch)
    })
    .then( res => {
        if(!res.ok) throw new Error("Erro ao mandar o upgrade")
        return res.json()
    })
    .catch( err => {
        console.error("Error", err )
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
        console.log(name)

        if(!name) {
            dispatchNameSubmit('submitError', {error: "Campo vazio!"})
            return
        }
            
        let existName  = data.find(item => item.companyName == name );
        
        if(existName){
            dispatchNameSubmit('submitError', {error: "Nome já existente!"})
        } else {
            dispatchNameSubmit('submitSucess', {companyName: name},)
            dispatchNewName(name)
        }
    })
    .catch( err => {
        console.error("Error", err )
    })
}

// RODAR AO INICIALIZAR
getData("postInit", postCompany)


// Eventos windows

// Traz os pontos do script.js através do evento criado
window.addEventListener("pontosAtualizados", (event) => {
  const novoValor = event.detail.newPoints;
  lsCount = novoValor;
  patchLS({"id": idPlayer, "lsCount": lsCount})

});

window.addEventListener("notifiedUgradeBuy", (event)=>{
    const newUpgradeBuy = event.detail.newUpdate;
    upgradesList.push(newUpgradeBuy);
    upgradesList.sort()
    updatePlayerUpgrades({"id": idPlayer, "update":upgradesList})
})

window.addEventListener("notifiedStructBuy", (event)=>{
    const newStructBuy = event.detail;
    const index = newStructBuy.index
    structList[index] = newStructBuy;
    updatePlayerStructs({"id": idPlayer, "struct": structList})
    
})

// Escuta caso o player acione o botão do modal
window.addEventListener("submitName", (event)=>{
    let newNamePlayer = event.detail.newName;
    updateNamePlayer(newNamePlayer);
})

// CASO QUEIRA, PODE-SE DELETAR O COOKIE (AMBIENTE DE TESTE)
function deleteCookie(name){
    setCookie(name, "", -1);
}

// Resetar os pontos ambeintes de teste
function resetPoints(){
    patchLS({"id": idPlayer, "lsCount": 1});
    lsCount = 1;
    updateLsDisplay(lsCount)
}
