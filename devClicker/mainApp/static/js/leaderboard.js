const socket = new WebSocket("ws://" + window.location.host + "/ws/leaderboard/");

let company_id;
let companyName = document.getElementById('company-text');
let ls_count;

const csrfToken = document.getElementById("csrf-token").value;


function sampleName(min, max) {
  let num = Math.floor(Math.random() * (max - min) + min);
  return `company${num}`;
}


let nameCompanyInit = sampleName(1,1000)

// fetch('', {
//     method: ["POST", "GET", "PUT", "PATCH", "DELETE"],
//     headers: {
//         "Content-Type": "application/json", #Usado em todos, exceto o delete
//         "X-CSRFToken": "{{ csrf_token }}" #Toda vez que atualizar o banco de dados
//     },
// })
//     .then(res =>{
//         if(!res.ok) throw new Error("Erro ao buscar o dado");
//         return res.json()
//     })
//     .then(data =>{
//         console.log(data);
//     })
//     .catch(error => {
//         console.error("Erro ao inserir o player:", error);
//     })


function verifyIfNameExist(list, nameTest){
    const dataFound = list.find(obj => obj.companyName == nameTest);
    if(dataFound && dataFound.id != company_id){
        nameTest = sampleName(1, 1000);
        return verifyIfNameExist(list, nameTest);
    } else {
        return nameTest;
    }
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
        console.log(data)
        if(!company_id && data){ company_id = data[data.length-1].id + 1; }
        if(nameMethod == "postInit"){
            nameCompanyInit = verifyIfNameExist(data,nameCompanyInit);
            fetchFunction({"companyName": nameCompanyInit, "lsCount": 0});
        } else if(nameMethod == "patchNameCompany"){
            nameCompanyInit = verifyIfNameExist(data,companyName.innerText);
            fetchFunction({"id": company_id, "companyName": nameCompanyInit});
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
            console.log("Data postada:",data);
            companyName.innerHTML = nameCompanyInit;
            ls_count = 0;
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
        companyName.innerHTML = nameCompanyInit;
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
        console.log("Linhas atualizadas")
    })
    .catch( err => {
        console.err("Error ", err )
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
  ls_count = novoValor;
  patchLS({"id": company_id, "lsCount": ls_count})

});

function leaderboard_display(){
    fetch("/leaderboard/", {
        method:"GET",
        headers: {
            "Content-Type":"application/json",
            "X-CSRFToken": csrfToken,
        },
    })
        .then(res => {
            if(!res.ok) throw new Error("Error ao carregar os dados do leaderboard");
            return res.json()
        })
        .then( data => {
            console.log(data);
        })
        .catch( err => {
            console.error("ERRO AO CARREGAR O LEADERBOARD: ", err)
        })
}

socket.onmessage = function(e) {
    const data = JSON.parse(e.data);
    console.log("Leaderboard atualizado:", data);
    leaderboard_display()
};