let leaderboardDiv = document.getElementById("detailsPlayers");
let companyName = document.querySelector('.company-text');
let lsCount;
let idPlayer;
let playerDetails;

window.csrfToken = document.getElementById("csrf-token").value;

function setCookie(cookieName, cookieValue, expiresDays){
    const d = new Date();
    d.setTime(d.getTime() + (expiresDays*24*60*60*1000));
    document.cookie = `${cookieName} = ${cookieValue}; expires = ${d.toUTCString()}; path=/`
}

function updateLsDisplay(newValue) {
  // Dispara um evento personalizado com o novo valor
  const event = new CustomEvent("updateLsDisplay", {
    detail: { newPoints: newValue }
  });

  window.dispatchEvent(event); // Notifica outros scripts
}

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    return parts.pop().split(';').shift();
  }
  return null;
}

idPlayer = getCookie("id");

function sampleName(min, max) {
  let num = Math.floor(Math.random() * (max - min) + min);
  return `DEV${num}`;
}

let nameCompanyInit = sampleName(1,10000)

function verifyIfNameExist(list, nameTest){
    const dataFound = list.find(obj => obj.companyName == nameTest);
    if(dataFound && dataFound.id != idPlayer){
        nameTest = sampleName(1, 1000);
        return verifyIfNameExist(list, nameTest);
    } else {
        return nameTest;
    }
}

function dispatchNewName(name) {
    const event = new CustomEvent("updateCompany", {
        detail: { company: name }
    })

    window.dispatchEvent(event);
}


function getData(nameMethod, fetchFunction){
    fetch("/get-data/", {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": csrfToken,
    },
})
    .then(res =>{
        if(!res.ok) throw new Error("Dados não encontrado.");
        return res.json();
    })
    .then(data =>{
        
        if(!idPlayer){            
            if(nameMethod == "postInit"){
                nameCompanyInit = verifyIfNameExist(data,nameCompanyInit);
                fetchFunction({"companyName": nameCompanyInit, "lsCount": 0});
                dispatchNewName(nameCompanyInit)
            }
        } else {
            if(nameMethod == "patchNameCompany"){
                nameCompanyInit = verifyIfNameExist(data,companyName.innerText);
                fetchFunction({"id": idPlayer, "companyName": nameCompanyInit});
                dispatchNewName(nameCompanyInit)
            } else {
                playerDetails = data.find( obj => obj.id == idPlayer );
                dispatchNewName(playerDetails.companyName)
                updateLsDisplay(playerDetails.lsCount)
            }
        }
        
    })
    .catch(err =>{
        console.log("Error", err)
    })
}

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
        // console.log("Linhas atualizadas")
    })
    .catch( err => {
        console.error("Error ", err )
    })
}

getData("postInit", postCompany)

companyName.addEventListener('blur', ()=>{
    getData("patchNameCompany", patchCompanyName)
})

companyName.addEventListener('keydown', event =>{
    if(event.key == "Enter"){
        event.preventDefault()
        companyName.blur()
    }
})

window.addEventListener("pontosAtualizados", (event) => {
  const novoValor = event.detail.newPoints;
  lsCount = novoValor;
  patchLS({"id": idPlayer, "lsCount": lsCount})

});
