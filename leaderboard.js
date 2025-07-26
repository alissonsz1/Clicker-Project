// Funções

function updateLsDisplay(newValue) {
  // Dispara um evento personalizado com o novo valor
  const event = new CustomEvent("updateLsDisplay", {
    detail: { newPoints: newValue }
  });

  window.dispatchEvent(event); // Notifica outros scripts
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
  let num = Math.floor(Math.random() * (max - min) + min); // Através de um número aneatŕio, gera um número que fica entre outros dois
  return `company${num}`;
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
let nameCompanyInit = sampleName(1,1000); // Nome inicial do gerado
let idPlayer = getCookie("id"); // pega o id do player caso tenha salvo
let playerDetails; // vai armazenar os dados do player através de seu id
let lsCount; // coleta os pontos do player


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
                fetchFunction({"companyName": nameCompanyInit, "lsCount": 0});
            }
        } else {
            //Se existir ip, ele vai ou atualizar o nome do player quando ele socilitar
            if(nameMethod == "patchNameCompany"){
                nameCompanyInit = verifyIfNameExist(data,companyName.innerText);
                fetchFunction({"id": idPlayer, "companyName": nameCompanyInit});
            
            // ou vai pegar os dados do player no banco de dados
            } else {
                playerDetails = data.find( obj => obj.id == idPlayer );
                companyName.innerHTML = playerDetails.companyName;
                updateLsDisplay(playerDetails.lsCount)
            }
        }
        
    })
    .catch(err =>{
        console.log("Error", err)
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
            //Caso o nome é seja colocado no banco de dados, ele modifica os valoes na ela
            companyName.innerHTML = nameCompanyInit;
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
        companyName.innerHTML = nameCompanyInit;
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
    .then( data => {
        console.log("Linhas atualizadas")
    })
    .catch( err => {
        console.err("Error ", err )
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
