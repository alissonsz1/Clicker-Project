// Upgrades "place holder" só para o código funcionar
const upgrades = [
  { nome: "Café Forte", custo: 100, icon: 'place-holder' },
  { nome: "Atalho de Teclado", custo: 300, icon: 'place-holder' },
  { nome: "Dupla Tela", custo: 800, icon: 'place-holder' },
  { nome: "Modo Foco", custo: 1500, icon: 'place-holder' }
];

// Estruturas "place holder" só para o código funcionar
const estruturas = [
  { nome: "Servidor Local", custo: 1000, icon: 'place-holder' },
  { nome: "Banco de Dados", custo: 2500, icon: 'place-holder' },
  { nome: "Nuvem Privada", custo: 5000, icon: 'place-holder' },
  { nome: "Cluster de Servidores", custo: 10000, icon: 'place-holder' }
];

// Lista com os possíveis bônus do café
const bonusList = [
  {
    nome: "BONUS 1",
    descricao: "15% das linhas + 13",
    efeito: () => {
      const ganho = Math.floor(pontos * 0.15 + 13);
      pontos += ganho;
      return `Ganhou ${ganho} linhas!`
    },
    peso: 70,
  },
  {
    nome: "BONUS 2",
    descricao: "LS x7",
    efeito: () => {
      lsMultiplier *= 7;
      return "LS multiplicado por 7!"
    },
    duracao: 150,
    peso: 20,
  },
  {
    nome: "BONUS 3",
    descricao: "LS x777",
    efeito: () => {
      lsMultiplier *= 777;
      return "LS multiplicado por 777!!"
    },
    duracao: 20,
    peso: 9,
  },
  {
    nome: "BONUS 4",
    descricao: "LS x1111",
    efeito: () => {
      lsMultiplier *= 1111;
      return "LS multiplicado por 1111!!!"
    },
    duracao: 10,
    peso: 1,
  },
  {
    nome: "BONUS 5",
    descricao: 'Café para todo lado!',
    efeito: () => {
        var coffeeStorm = setInterval(() => {
            spawnCoffe('STORM BONUS')
        }, 400)

        setTimeout(() => {
            clearInterval(coffeeStorm)
        }, 7000)

        return "Tempestade de café!"
    },
    peso: 1,
  },
  // STORM BONUS SÓ É ATIVADO PELO BONUS 5
  {
    nome: "STORM BONUS",
    descrição: "7% das linhas!", // MUDAR PARA BONUS DE LINHAS POR SEGUNDO NO FUTURO
    efeito: () => {
        const ganho = Math.floor(pontos * 0.07 + 13);
        pontos += ganho;
        return `Ganhou ${ganho} linhas!`
    },
  }
];

// Variaveis
let pontos = 0;
let boost = 0; // Incrementa os CLIQUES (ou TECLADADAS no futuro)
let lsMultiplier = 0 // Multiplicador apra as LS
let preco_upgrade = 10;
let coffeeProb = 0.02 // Probabilidade de aparecer um café na tela (AUMENTAR CASO QUEIRA DEBUGAR)

// O botão de clicar e o botão de upgrade e o display de pontos
const button = document.getElementById('click_button');
const upgradeButton = document.getElementById('upgrade_button');
const display = document.getElementById('pontos');
const buttonsHeader = document.querySelectorAll(".button-header");
const contentList = document.querySelector('.content-list')
const coffeeContainer = document.getElementById('coffee-container')

// Evento do botão de clicar
// Quando o botão é clicado, adiciona pontos e atualiza o display
button.addEventListener('click', () => {
    console.log('OPA')
    pontos += 1 + boost;
    display.textContent = pontos;
});

// Evento do botão de upgrade
// Quando o botão é clicado, verifica se tem pontos suficientes para o upgrade
upgradeButton.addEventListener('click', () => {
    if (pontos < preco_upgrade) {
        alert("Precisas de " + preco_upgrade + " pontinhos!");
        return;
    } else {
        boost += 2;
        pontos -= preco_upgrade;
        preco_upgrade *= 2;
        display.textContent = pontos;
        // Toda funcão que atualiza os pontos precisa atualizar o display
    }
});

// CONTAINER DA DIREITA (UPGRADES/ESTRUTURAS)

buttonsHeader.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (btn.classList.contains('active')) return

        buttonsHeader.forEach((b) => b.classList.remove('active')) // Primeiro, remove "active" de todos
        btn.classList.add('active') // Depois, adiciona somente no que foi clicado

        // Através das classes, verifica se é o botão da esquerda que foi clicado
        const isButtonLeft = btn.classList.contains('left')
        if (isButtonLeft) {
            render(upgrades, 'upgrades') // Se é o da esquerda, irá renderizar UPGRADES
        } else {
            render(estruturas, 'estruturas') // Se não, irá renderizar ESTRUTURAS
        }
    })
})

// Função que irá renderizar a lista certa na seção da direita9 seja upgrades, seja estruturas
function render(lista, which='upgrades') {
  contentList.innerHTML = "" // Limpa o conteúdo para renderizar certinho
  lista
    .filter(item => !item.purchased) // Retira os items que já foram comprados (no caso dos upgrades)
    .forEach(item => {
        const div = document.createElement("div")
        // if (which == 'upgrades') {
            div.innerHTML = upgradeItemHTML(item)
        // }
        div.className = "content-item"
        contentList.appendChild(div)
    })
}

const upgradeItemHTML = (item) => {
    return (
        `
            <img src="./assets/${item.icon}.png" class="item-icon"/>
            <div>
                <span">${item.nome}</span>
            </div>
        `
    )
}

// Renderiza os upgrades assim que o site inicia
render(upgrades)

// FIM DO CONTAINER DA DIREITA

// EVENTO ALEATÓRIO DO CAFÉ

const triggerCoffeeEvent = () => {
    // A cada um segundo, verificar se o número aleatorizado é menor que a probabilidade, para então spawnar o coffee
    setInterval(() => {
        if (Math.random() < coffeeProb) {
            spawnCoffe()
        }
    }, 1000)
}

const spawnCoffe = (bonusName) => {
    // Cria o elemento que vai envolver (wrap) o coffee
    const div = document.createElement("div")
    div.classList.add('coffee-wrapper')
    div.innerHTML = `<div class="coffee"></div>`
    
    // Insere no DOM
    coffeeContainer.appendChild(div)
    
    // Pega coordenadas aleatórias, respeitando o tamanho da tela
    const { x, y } = randomCoord(div)
    div.style.top = y
    div.style.left = x

    // É necessário um pequeno intervalo para então colocar a opacidade e a escala em 1 (CSS fará a transição suave)
    setTimeout(() => {
        div.style.opacity = 1
        div.style.transform = "scale(1)"
        div.innerHTML = `<div class="coffee" style="animation: pulse 2s infinite ease-in-out, tilt 5s infinite"></div>`
    }, 50)

    // Quando se passar 5s, adicionar uma animação de "fade-out"
    setTimeout(() => {
        div.classList.add("fade-out")
        div.style.opacity = 0
        div.style.transform = "scale(0)"
    }, 10050) //10050ms = 10s (lembrando que há 5s só para surgir o elemento)

    // Adicionar um listener para saber quando o "fade-out" terminou, para então remover a div do "coffee"
    div.addEventListener("transitionend", (e) => {
        if (e.propertyName === "opacity" && div.classList.contains("fade-out")) div.remove()
    })

    // Ao clicar no café:
    div.addEventListener('click', (e) => {
        // ADICIONAR ALGUM SOM
        // Esse operador serve para: se "bonusName" for null, será escolhido um bonus aleatório, senão será escolhido o que foi enviado como parâmetro pela função
        const bonus = bonusList.find(b => b.nome == bonusName) ?? escolherBonusComPeso(bonusList)
        const efeito = bonus.efeito() // Trigga o efeito do bônus
        display.textContent = pontos // Atualiza os pontos na tela
        
        // Cria um pequeno "alerta" para mostrar qual foi o bônus obtido
        const alertCoffee = document.createElement('div')
        alertCoffee.classList.add('alert-coffee')
        alertCoffee.innerHTML = (`
            <h2>${bonus.nome}</h2>
            <span>${efeito}</span>   
        `)
        coffeeContainer.appendChild(alertCoffee)
        alertCoffee.style.top = `max(5vh, ${y})` // max() serve para evitar que parte do alerta fique para fora da tela
        alertCoffee.style.left = `clamp(5vw, ${x}, 85vw)` // clamp() cumpre o mesmo propósito: delimitar um min e max de onde o alerta estará

        // Um pequeno delay para iniciar a animação de subida
        setTimeout(() => {
            alertCoffee.style.opacity = 1
            alertCoffee.style.transform = "translate(calc(-50% + 48px), -50%)"
        }, 10)

        // Depois de 3s, o alerta irá começar a desaparecer com um "fade-out"
        setTimeout(() => {
            alertCoffee.classList.add("fade-out")
            alertCoffee.style.opacity = 0
        }, 3000)

        // Assim como o café, um listener é adicionado para saber quando a animação acaba para, então, remover a div do DOM
        alertCoffee.addEventListener("transitionend", (e) => {
            if (e.propertyName === "opacity" && alertCoffee.classList.contains("fade-out")) alertCoffee.remove()
        })
        
        div.remove() // Remove o café
    })
}

// Essa função pega uma coordenada aleatória da tela para colocar o café, levando em conta os limites inferior e superior da tela, usando o tamanho do café como margem
const randomCoord = (el) => {
  const widthVW = (el.offsetWidth / window.innerWidth) * 100
  const heightVH = (el.offsetHeight / window.innerHeight) * 100
  // Depois, isso é transformado em "vh" e "vw", para ser responsivo (se adequar ao redimensionar)

  const maxX = 100 - widthVW
  const maxY = 100 - heightVH

  const x = Math.random() * maxX
  const y = Math.random() * maxY

  return { x: `${x}vw`, y: `${y}vh` }
}

const escolherBonusComPeso = (lista) => {
  const totalPeso = lista.reduce((soma, b) => soma + (b?.peso ?? 0), 0) // Essa linha soma TODOS os pesos
  const sorteio = Math.random() * totalPeso // Aqui é sorteado um número entre 0 e o PESO TOTAL

  let acumulado = 0;
  for (let bonus of lista) {
    acumulado += bonus?.peso
    if (sorteio <= acumulado) {
      return bonus
    }
  }
}

triggerCoffeeEvent()

// FIM DO EVENTO DO CAFÉ