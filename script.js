// Upgrades "place holder" só para o código funcionar
const upgrades = [
  {
    id: 'up1',
    nome: "Café Forte", 
    custo: 20,
    descricao: 'DESCREVA',
    funcao: 'FAZ TAL COISA',
    icon: 'placeholder.png',
    efeito: () => boost *= 2,
  },
  { 
    id: 'up2',
    nome: "Atalho de Teclado", 
    custo: 100,
    descricao: 'DESCREVA',
    funcao: 'FAZ TAL COISA',
    icon: 'placeholder.png',
    efeito: () => boost *= 2,
  },
  { 
    id: 'up3',
    nome: "Dupla Tela", 
    custo: 500,
    descricao: 'DESCREVA',
    funcao: 'FAZ TAL COISA',
    icon: 'placeholder.png',
    efeito: () => boost *= 2,
  },
  { 
    id: 'up4',
    nome: "Modo Foco", 
    custo: 1000,
    descricao: 'DESCREVA',
    funcao: 'FAZ TAL COISA',
    icon: 'placeholder.png',
    efeito: () => boost *= 2,
  }
]

// Estruturas "place holder" só para o código funcionar
const estruturas = [
  { 
    id: 'es1',
    nome: "Servidor Local", 
    custoBase: 10, 
    comprados: 0,
    icon: 'placeholder.png',
    descricao: 'DESCREVA',
    get custoAtual() {
      return Math.floor(this.custoBase * Math.pow(1.15, this.comprados));
    }
  },
  { 
    id: 'es2',
    nome: "Banco de Dados", 
    custoBase: 100,
    comprados: 0,
    icon: 'placeholder.png',
    descricao: 'DESCREVA',
    get custoAtual() {
      return Math.floor(this.custoBase * Math.pow(1.15, this.comprados));
    }
  },
  { 
    id: 'es3',
    nome: "Nuvem Privada", 
    custoBase: 1000, 
    comprados: 0,
    icon: 'placeholder.png',
    descricao: 'DESCREVA',
    get custoAtual() {
      return Math.floor(this.custoBase * Math.pow(1.15, this.comprados));
    }
   },
  { 
    id: 'es4',
    nome: "Cluster de Servidores", 
    custoBase: 10000, 
    comprados: 0,
    icon: 'placeholder.png',
    descricao: 'DESCREVA',
    get custoAtual() {
      return Math.floor(this.custoBase * Math.pow(1.15, this.comprados));
    }
  }
]

// Lista com os possíveis bônus do café
const bonusList = [
  {
    id: 'bn1',
    nome: "BONUS 1",
    descricao: "15% das linhas + 13",
    peso: 70,
    get efeito() {
      const ganho = Math.floor(pontos * 0.15 + 13);
      refresh(pontos, ganho) // Atualiza os pontos na tela
      return `Ganhou ${ganho} linhas!`
    },
  },
  {
    id: 'bn2',
    nome: "BONUS 2",
    descricao: "LS x7",
    duracao: 60,
    peso: 30,
    icon: 'placeholder.png',
    get efeito() {
      lsMultiplier *= 7;
      return `LS x7 por ${this.duracao} segundos!`
    },
    reverter: () => lsMultiplier /= 7,
  },
  {
    id: 'bn3',
    nome: "BONUS 3",
    descricao: "LS x777",
    duracao: 15,
    peso: 10,
    icon: 'placeholder.png',
    get efeito() {
      lsMultiplier *= 777;
      return `LS x777 por ${this.duracao} segundos!!!`
    },
    reverter: () => lsMultiplier /= 777,
  },
  {
    id: 'bn4',
    nome: "BONUS 4",
    descricao: "LS x1111",
    duracao: 10,
    peso: 2,
    icon: 'placeholder.png',
    get efeito() {
      lsMultiplier *= 1111;
      return `LS x1111 por ${this.duracao} segundos!!!`
    },
    reverter: () => lsMultiplier /= 1111,
  },
  {
    id: 'bn5',
    nome: "BONUS 5",
    descricao: 'Café para todo lado!',
    peso: 5,
    get efeito() {
        var coffeeStorm = setInterval(() => {
            spawnCoffe('STORM BONUS')
        }, 400)

        setTimeout(() => {
            clearInterval(coffeeStorm)
        }, 7000)

        return "Tempestade de café!"
    },
  },
  // STORM BONUS SÓ É ATIVADO PELO BONUS 5
  {
    id: 'bn6',
    nome: "STORM BONUS",
    descricao: "7% das linhas!", // MUDAR PARA BONUS DE LINHAS POR SEGUNDO NO FUTURO
    get efeito() {
        const ganho = Math.floor(pontos * 0.07 + 13);
        pontos += ganho;
        return `Ganhou ${ganho} linhas!`
    },
  },
  {
    id: 'bn7',
    nome: 'CAFÉ VENCIDO',
    descricao: 'Não faz nada...',
    peso: 1,
    get efeito() {
      return 'Não faz nada... Literalmente.'
    },
  }
]

// Um array que conterá todos os upgrades e estruturas que foram sendo desbloqueados
const desbloqueados = {
  estruturas: new Set(),
  upgrades: new Set()
}

// Um array que conterá uma lista de desbloqueados, que será limpa quando a respectiva aba for acessada
const notificacoes = {
  upgrades: new Set(),
  estruturas: new Set()
}

// Tabela de unidades para os números
const unidades = [
  { limite: 1e33, nome: 'decilhão', plural: 'decilhões' },
  { limite: 1e30, nome: 'nonilhão', plural: 'nonilhões' },
  { limite: 1e27, nome: 'octilhão', plural: 'octilhões' },
  { limite: 1e24, nome: 'septilhão', plural: 'septilhões' },
  { limite: 1e21, nome: 'sextilhão', plural: 'sextilhões' },
  { limite: 1e18, nome: 'quintilhão', plural: 'quintilhões' },
  { limite: 1e15, nome: 'quatrilhão', plural: 'quatrilhões' },
  { limite: 1e12, nome: 'trilhão', plural: 'trilhões' },
  { limite: 1e9, nome: 'bilhão', plural: 'bilhões' },
  { limite: 1e6, nome: 'milhão', plural: 'milhões' },
  { limite: 1e3, nome: 'mil', plural: 'mil' }
]

// Variaveis
let pontos = 0;
let boost = 1 // Incrementa os CLIQUES (ou TECLADADAS no futuro)
let lsMultiplier = 0 // Multiplicador apra as LS
let coffeeProb = 0.04 // Probabilidade de aparecer um café na tela (AUMENTAR CASO QUEIRA DEBUGAR)
let boostsActive = [] // Array que armazena todos os boosts ativos
let tabActive = 'Upgrades' // Qual a aba ativa atualmente

const button = document.getElementById('click_button') // Teclado CLICÁVEL
const keyboard = document.querySelector('.computer-keyboard')
const display = document.getElementById('pontos') // Display das linhas de código
const buttonsHeader = document.querySelectorAll(".button-header") // Botões para mudar de aba
const contentList = document.querySelector('.content-list') // Lista de items
const coffeeContainer = document.getElementById('coffee-container') // Container dos cafés
const boostsContainer = document.querySelector('.container-boosts') // Container dos boosts
const clicksContainer = document.querySelector('.clicks-container') // Container que armazena os pequenos incrementos dos cliques
const tooltip = document.querySelector('.tooltip') // Container que armazenas as descrições quando passa o mouse por cima

// USAR ESSA FUNÇÃO PARA ATUALIZAR OS PONTOS
// valorAtual = pontos em seu estado ATUAL / add = o incremento que será adicionado (ou subtraído)
function refresh(valorAtual, add) {
  pontos = valorAtual + add
  checarDesbloqueios(pontos)
  animarContador(valorAtual)

  if (tabActive == 'Estruturas') renderEstruturas()
  else renderUpgrades()
}

// Anima os numerozinhos para eles subirem de pouco em pouco
function animarContador(valorInicial, duracao = 700) {
  const valorFinal = pontos

  if (Math.abs(valorFinal - valorInicial == 1)) {
    display.textContent = `${pontos} linhas de código`
    return
  }

  let start = null;
  const range = valorFinal - valorInicial;

  // Função de easing (easeOutQuad)
  function easeOutQuint(x) {
    return 1 - Math.pow(1 - x, 5);
  }

  function step(timestamp) {
    if (!start) start = timestamp
    const tempoDecorrido = timestamp - start
    const progresso = Math.min(tempoDecorrido / duracao, 1) // entre 0 e 1
    const eased = easeOutQuint(progresso) // aplica easing

    const valorInterpolado = Math.floor(valorInicial + range * eased)
    const valorFormatado = formatarNumero(valorInterpolado)
    display.textContent = `${valorFormatado} linhas de código`

    if (progresso < 1) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}

// Essa função formata números grandes (10e6) para valores mais amigáveis (1 milhão)
function formatarNumero(valor) {
  if (valor < 1000000) return valor.toString()

  // Se for maior que o maior limite conhecido
  const maiorLimite = unidades[0].limite
  if (valor >= maiorLimite * 1000) {
    return valor.toExponential(1).replace('+', '') // ex: "1.0e36"
  }

  for (const unidade of unidades) {
    if (valor >= unidade.limite) {
      const valorDividido = valor / unidade.limite
      const nome = valorDividido >= 2 ? unidade.plural : unidade.nome
      return `${valorDividido.toFixed(3).replace('.', ',')} ${nome}`
    }
  }
}

// Essa função é chamada sempre que os pontos são atualizados para verificar se algo foi desbloqueado
function checarDesbloqueios(pontos) {
  estruturas.forEach((estrutura, index) => {
    if (pontos >= estrutura.custoAtual && !desbloqueados.estruturas.has(index)) {
      desbloqueados.estruturas.add(index)
      notificacoes.estruturas.add(index)
      estrutura.unlocked = true
      atualizarIndicadores()

    }
  })

  upgrades.forEach((upgrade, index) => {
    if (pontos >= upgrade.custo && !desbloqueados.upgrades.has(index)) {
      desbloqueados.upgrades.add(index)
      notificacoes.upgrades.add(index)
      atualizarIndicadores()
    }
  })
}

// Essa função é chamada sempre que há um desbloqueio, para atualizar o iconezinho vermelho de "notificação"
function atualizarIndicadores() {
  const upgradesBtn = document.querySelector(".button-header.upgrades")
  const estruturasBtn = document.querySelector(".button-header.estruturas")

  upgradesBtn.classList.toggle("has-notification", notificacoes.upgrades.size > 0)
  estruturasBtn.classList.toggle("has-notification", notificacoes.estruturas.size > 0)
}

// Quando o botão é clicado, adiciona pontos e atualiza o display com a função refresh()
button.addEventListener('click', (e) => {
  const click = document.createElement('div')
  const randomOffset = Math.random() * 8
  click.className = 'click'
  click.textContent = `+${boost}`
  click.style.left = `calc(${e.pageX}px + ${randomOffset}px)`
  click.style.top = `${e.pageY}px`
  clicksContainer.appendChild(click)
  void click.offsetHeight
  click.classList.add('fading-up')

  click.addEventListener("transitionend", (e) => {
    if (e.propertyName === "opacity" && click.classList.contains("fading-up")) click.remove()
  })

  refresh(pontos, boost)
})

// No celular, 'active' fica muito bugado, portanto iremos colocar uma animação manualmente de pulo no teclado ao ser clicado
button.addEventListener("touchstart", triggerAnimation)

function triggerAnimation() {
  keyboard.classList.remove('pulinho') // remove a classe
  void keyboard.offsetWidth             // força reflow (reinicia a animação)
  keyboard.classList.add('pulinho')    // adiciona novamente
}

// CONTAINER DA DIREITA (UPGRADES/ESTRUTURAS)

buttonsHeader.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (btn.classList.contains('active')) return

        buttonsHeader.forEach((b) => b.classList.remove('active')) // Primeiro, remove "active" de todos
        btn.classList.add('active') // Depois, adiciona somente no que foi clicado

        // Limpas as notificações e atualiza o indicador vermelho
        notificacoes.upgrades.clear()
        notificacoes.estruturas.clear()
        atualizarIndicadores()

        // Através do conteúdo, verifica qual botão foi clicado
        tabActive = btn.querySelector('.text').textContent
        if (tabActive == 'Upgrades') {
            renderUpgrades() // Irá renderizar UPGRADES
        } else {
            renderEstruturas() // Irá renderizar ESTRUTURAS
        }
    })
})

// Função que irá rendereizar a lista certa na seção de estruturas
const renderEstruturas = () => {
  // Se antes, na lista, havia algum "upgrade", reseta o conteúdo da lista
  if (contentList.querySelector('.upgrade')) contentList.innerHTML = ''

  const size = desbloqueados.estruturas.size
  const estruturasFixed = estruturas.slice(0, Math.min(size + 2, estruturas.length))

  estruturasFixed.forEach((item, i) => {
    const id = `estrutura-${i}`
    const estrutura = document.getElementById(id)

    // Se o item já está renderizado, não faça nada
    if (estrutura) {
      const custo = estrutura.querySelector('.cust')
      const itemName = estrutura.querySelector('.item-name')
      const comprados = estrutura.querySelector('.item-purchased')

      if (item.unlocked) {
        if (item.comprados > 0) comprados.textContent = item.comprados
        if (estrutura.classList.contains('hidden')) estrutura.style.animation = 'fade-in .8s linear'
        itemName.textContent = item.nome
        estrutura.classList.remove('hidden')
        estrutura.classList.add('unlocked')
      }
      custo.textContent = item.custoAtual
      if (item.custoAtual > pontos) {
        custo.classList.add('high')
        custo.classList.remove('low')
      } else {
        custo.classList.add('low')
        custo.classList.remove('high')
      }
      
      return
    } 

    const div = document.createElement("div")
    div.id = id
    div.innerHTML = (`
      <img src="./assets/${item.icon}" class="item-icon"/>
      <div class="item-content">
        <div class="item-text">
          <span class="item-name">${!item.unlocked ? '???' : item.nome}</span>
          <span class="cust ${item.custoAtual > pontos ? 'high' : 'low'}">${item.custoAtual}</span>
        </div>
        <span class="item-purchased">${item.comprados > 0 ? item.comprados : ''}</span>
      </div>
    `)
    div.className = "content-item estrutura"
    if (item.unlocked) {
      div.classList.add('unlocked')
    }

    else div.classList.add('hidden')
    div.setAttribute('data-id', item.id)
    div.addEventListener('click', () => buyEstrutura(i))
    addEventListenerForEstruturasTooltip(div)
    contentList.appendChild(div)
  })
}

// Função que irá renderizar a lista certa na seção de upgrades
const renderUpgrades = () => {
  contentList.innerHTML = "" // Limpa o conteúdo para renderizar certinho
  upgrades
    .map((item, i) => ({...item, index: i}))
    .filter(item => !item.purchased) // Retira os items que já foram comprados (no caso dos upgrades)
    .forEach(item => {
        const div = document.createElement("div")
        div.innerHTML = (`
          <img src="./assets/${item.icon}" class="item-icon"/>
          <div class="item-content">
            <div class="item-text">
              <span class="item-name">${item.nome}</span>
              <span class="cust ${item.custo > pontos ? 'high' : 'low'}">${item.custo}</span>
            </div>
          </div>
        `)
        div.className = "content-item upgrade"
        if (pontos >= item.custo) div.classList.add('unlocked')

        div.setAttribute('data-id', item.id)
        div.addEventListener('click', () => buyUpgrade(item.index))
        addEventListenerForUpgradesTooltip(div)
        contentList.appendChild(div)
    })
}

function addEventListenerForEstruturasTooltip(el) {
  const container = document.querySelector(".container-right")
  const containerRect = container.getBoundingClientRect()
  const tooltipRect = tooltip.getBoundingClientRect()

  el.addEventListener("mousemove", (e) => {
    const id = el.getAttribute("data-id")
    const data = estruturas.find(es => es.id === id)

    const LS = 2 // BOTAR NUMERO REAL DE LS PARA CADA ESTRUTURA
    const GERADO = 10

    let extraInfo = ``

    if (data.unlocked && data.comprados > 0) {
      extraInfo = `
          <ul>
            <li>cada ${data.nome.toLocaleLowerCase()} coda <strong>${LS} LS</strong></li>
            <li>${data.comprados} ${data.nome.toLocaleLowerCase()} codando <strong>${data.comprados*LS} LS</strong></li>
            <li>${GERADO} linhas geradas até agora</li>
          </ul>
      `
    }

    tooltip.innerHTML = `
        <div class="tooltip-header">
          <div class="tooltip-header--left">
            <img src="./assets/${data.icon}" class="tooltip-icon"/>
            <strong class="tooltip-name">${data.unlocked ? data.nome : '???'}</strong>
          </div>
          <span class="tooltip-price ${pontos < data.custoAtual ? 'high' : 'low'}">${data.custoAtual}</span>
        </div>
        <div class="tooltip-content">
          <span class="tooltip-description">${data.unlocked ? data.descricao : '???'}</span>
        </div>
        ${extraInfo}
    `
    tooltip.classList.remove('bonus')
    tooltip.style.transform = 'translateY(-50%)'
    tooltip.style.left = `${containerRect.left - tooltip.offsetWidth - 10}px`
    tooltip.style.opacity = 1
    tooltip.style.top = `min(${(e.pageY - 10)}px, calc(100vh - ${tooltipRect.height/2}px))`
  })

  el.addEventListener("mouseleave", () => {
    tooltip.style.opacity = 0
  })
}

function addEventListenerForUpgradesTooltip(el) {
  const container = document.querySelector(".container-right")
  const containerRect = container.getBoundingClientRect()
  const tooltipRect = tooltip.getBoundingClientRect()

  el.addEventListener("mousemove", (e) => {
    const id = el.getAttribute("data-id")
    const data = upgrades.find(up => up.id === id)

    tooltip.innerHTML = `
      <div class="tooltip-header">
        <div class="tooltip-header--left">
          <img src="./assets/${data.icon}" class="tooltip-icon"/>
          <strong class="tooltip-name">${data.nome}</strong>
        </div>
        <span class="tooltip-price ${pontos < data.custo ? 'high' : 'low'}">${data.custo}</span>
      </div>
      <div class="tooltip-content">
        <span class="tooltip-function">${data.funcao}</span>
        <span class="tooltip-description">${data.descricao}</span>
      </div>
    `

    tooltip.classList.remove('bonus')
    tooltip.style.transform = 'translateY(-50%)'
    tooltip.style.left = `${containerRect.left - tooltip.offsetWidth - 10}px`
    tooltip.style.opacity = 1
    tooltip.style.top = `min(${(e.pageY - 10)}px, calc(100vh - ${tooltipRect.height/2}px))`
  })

  el.addEventListener("mouseleave", () => {
    tooltip.style.opacity = 0
  })
}

// Compra a estrutura, aumenta o contador de "comprados" e subtrai dos pontos
const buyEstrutura = (index) => {
  const estrutura = estruturas[index]

  if (pontos < estrutura.custoAtual) return

  const custo = estrutura.custoAtual
  estrutura.comprados += 1
  refresh(pontos, -custo)

}

// Compra a estrutura, deixa ela como "purchased" (comprada), ativa o efeito do upgrade e subtrai dos pontos
const buyUpgrade = (index) => {
  const upgrade = upgrades[index]

  if (pontos < upgrade.custo || upgrade.purchased) return

  upgrade.efeito()
  upgrade.purchased = true

  refresh(pontos, -upgrade.custo)
}

// Renderiza os upgrades assim que o site inicia
renderUpgrades(upgrades)

// FIM DO CONTAINER DA DIREITA

// EVENTO ALEATÓRIO DO CAFÉ

const triggerCoffeeEvent = () => {
    // A cada um segundo, verificar se o número aleatorizado é menor que a probabilidade, para então spawnar o coffee
    setInterval(() => {
        if (Math.random() < coffeeProb) spawnCoffe()
    }, 1000)
}

// Função responsável por spawnar o café, recebendo de parâmetro qual o BÔNUS escolhido
const spawnCoffe = (bonusName = null) => {
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
    div.addEventListener('click', () => {
      const root = document.documentElement
      const cookieSize = getComputedStyle(root).getPropertyValue('--cs')
      const cookieSizeValue = parseInt(cookieSize)
      // ADICIONAR ALGUM SOM
      // Esse operador serve para: se "bonusName" for null, será escolhido um bonus aleatório, senão será escolhido o que foi enviado como parâmetro pela função
      const bonus = bonusList.find(b => b.nome == bonusName) ?? escolherBonusComPeso(bonusList)
      const efeito = bonus.efeito // Trigga o efeito do bônus
      setBonus(bonus, efeito) // Coloca o bônus na tela
      
      // Cria um pequeno "alerta" para mostrar qual foi o bônus obtido
      const alertCoffee = document.createElement('div')
      alertCoffee.classList.add('alert-coffee')
      alertCoffee.innerHTML = (`
            <div class="alert-back"></div> 
            <h2 class="alert-text alert-name">${bonus.nome}</h2>
            <span class="alert-text">${efeito}</span>
      `)
      coffeeContainer.appendChild(alertCoffee)

      const alertWidth = alertCoffee.offsetWidth
      const alertHeight = alertCoffee.offsetHeight
      alertCoffee.style.top = `max(calc(${alertHeight/2}px + .5vh), ${y})` // max() serve para evitar que parte do alerta fique para fora da tela
      alertCoffee.style.left = `clamp(${(alertWidth*1.4/2) - (cookieSizeValue/2)}px, ${x}, calc(100vw - ${(alertWidth*1.4) - (cookieSizeValue/2)}px))` // clamp() cumpre o mesmo propósito: delimitar um min e max de onde o alerta estará

      // Um pequeno delay para iniciar a animação de subida
      setTimeout(() => {
          alertCoffee.style.opacity = 1
          alertCoffee.style.transform = `translate(calc(-50% + ${cookieSizeValue/2}px), -50%)`
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

// Ao invés de usar porcentagens, utilzamos pesos (pois teríamos que recalcular sempre que um café novo fosse adicionado): quantos maior, mais provável de ser escolhido
const escolherBonusComPeso = (list) => {
  const listFiltered = list.filter(l => l?.peso)
  const totalPeso = listFiltered.reduce((soma, b) => soma + b.peso, 0) // Essa linha soma TODOS os pesos
  const sorteio = Math.random() * totalPeso // Aqui é sorteado um número entre 0 e o PESO TOTAL

  let acumulado = 0;
  for (let bonus of listFiltered) {
    acumulado += bonus.peso
    if (sorteio <= acumulado) {
      return bonus
    }
  }
}

// Faz o bonus do café funcionar de fato
function setBonus(bonus, efeito) {
  if (!bonus.icon) return // Se o bonus nao tem um icone, ele não é um bonus "passivo" e não precisa ficar na listinha de bonus

  const active = boostsActive.find(b => b.nome == bonus.nome) // Verifica se já tem um boost ativo

  // Se o bonus já está ativo, será renovado
  if (active) {
    clearTimeout(active.timeoutId) // Para com o timer anterior

    // E inicia um novo
    active.timeoutId = setTimeout(() => {
      removeBoost(bonus.nome)
    }, bonus.duracao * 1000)

    const boostDiv = document.querySelector(`[data-nome="${bonus.nome}"]`)
    boostDiv.classList = 'boost'
    void boostDiv.offsetHeight // Essa linha serve para 'atualizar' o elemento, ou seja, identificar que houver a mudança em 'classList'
    boostDiv.classList = 'boost cooldown'
    active.expiresIn = Date.now() + bonus.duracao * 1000

    return
  }

  // Inicia um timer pro bonus baseado na sua duracao
  const timeoutId = setTimeout(() => {
    removeBoost(bonus.nome)
  }, bonus.duracao * 1000)

  // Adiciona na array de bonus ativos
  boostsActive.push({
    id: bonus.id,
    nome: bonus.nome,
    descricao: bonus.descricao,
    timeoutId,
    expiresIn: Date.now() + bonus.duracao * 1000,
    reverter: bonus.reverter,
  })

  startMatrix(bonus.id)

  const div = document.createElement("div")
  div.className = `boost cooldown`
  div.setAttribute('data-id', bonus.id)
  div.dataset.nome = bonus.nome // Coloca um data-set para facilitar a localização dessa div
  div.style.backgroundImage = `url('./assets/${bonus.icon}')` // Coloca dire
  div.style.setProperty('--time', `${bonus.duracao}s`) // Coloca uma variável para o CSS saber o tempo da animação
  boostsContainer.appendChild(div) // Adiciona ao container dos boosts
  addEventListenerForCoffeesTooltip(div, efeito)
}

// Remove o bonus do café
function removeBoost(nome) {
  const index = boostsActive.findIndex(b => b.nome === nome)
  if (index !== -1) {
    const boost = boostsActive[index]
    if (boost.reverter) boost.reverter() // Desfaz o efeito
    boostsActive.splice(index, 1) // Retira o boost da lista

    const boostDiv = document.querySelector(`[data-nome="${nome}"]`) // Pega a div com o boost ativo
    stopMatrix(boost.id) // Para com a respectiva matrix
    boostDiv.remove()
  }
}

function addEventListenerForCoffeesTooltip(el, efeito) {
  const containerRect = document.querySelector('.container-boosts>.boost').getBoundingClientRect()
  
  el.addEventListener("mousemove", (e) => {
    const id = el.getAttribute("data-id")
    const data = bonusList.find(bn => bn.id === id)
    
    tooltip.classList.add('bonus')
    tooltip.innerHTML = `
      <div class="tooltip-header center">
        <strong class="tooltip-name">${data.nome}</strong>
      </div>
      <div class="tooltip-content">
        <span class="tooltip-efeito">${efeito}</span>
      </div>
    `
    const tooltipRect = document.querySelector('.tooltip').getBoundingClientRect()
    tooltip.style.left = `${e.pageX}px`
    tooltip.style.top = `${containerRect.top - tooltipRect.height - 15}px`
    tooltip.style.transform = `translateX(-50%)`
    tooltip.style.opacity = 1
  })

  el.addEventListener("mouseleave", () => {
    tooltip.style.opacity = 0
  })
}

triggerCoffeeEvent()

// FIM DO EVENTO DO CAFÉ

// FUNÇÃO EFEITO MATRIX (https://github.com/resolvendobug/efeito-matrix)

// Armazena todas os efeitos MATRIX ativos (id e elemento DOM)
const matrices = {}

const startMatrix = (id = 0) => {
  if (matrices[id]) return

   // Cria canvas
  const canvas = document.createElement('canvas')
  canvas.id = `matrix-${id}`
  canvas.classList.add('matrix-canvas')
  document.body.appendChild(canvas)

  canvas.height = window.innerHeight
  canvas.width = 2000 // Se alguém tiver um monitor maior que isso...

  const ctx = canvas.getContext('2d')
  const texts = '0123456789'.split('')
  const fontSize = 16;
  const columns = canvas.width / fontSize
  const drops = Array.from({ length: columns }, () => 1)

  function drawMatrix(){
    ctx.fillStyle = 'rgba(0, 41, 10, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#0F0';
    ctx.font = fontSize + 'px Doto';
    for (let i = 0; i < drops.length; i++){
        var text = texts[Math.floor(Math.random() * texts.length)];
        ctx.fillText(text, i * fontSize, drops[i]*fontSize);

        if (drops[i] * fontSize > canvas.height || Math.random() > 0.95){
            drops[i] = 0;
        }

        drops[i]++;
    }
  }

  // Quando a matrix chegar em opacidade 0 é que ela deverá ser removida do DOM
  canvas.addEventListener("transitionend", (e) => {
    const opacity = getComputedStyle(canvas).opacity

    if (opacity == 0) {
      canvas.remove()
      delete matrices[id]
    }
  })

  const interval = setInterval(drawMatrix, 33)
  document.body.classList.add('matrix') // adiciona a classe em 'body' pra poder customizar os elementos
  matrices[id] = { canvas, interval }
}

const stopMatrix = (id) => {
  const matrix = matrices[id]
  if (!matrix) return

  clearInterval(matrix.interval)
  matrix.canvas.style.opacity = 0

  if (boostsActive.length == 0) document.body.classList.remove('matrix')
}

// FIM DA FUNÇÃO MATRIX