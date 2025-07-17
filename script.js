// Upgrades "place holder" só para o código funcionar
const upgrades = [
  { nome: "Café Forte", 
    custo: 20, 
    icon: 'placeholder.png',
    efeito: () => boost *= 2,
  },
  { nome: "Atalho de Teclado", 
    custo: 100, 
    icon: 'placeholder.png',
    efeito: () => boost *= 2,
  },
  { nome: "Dupla Tela", 
    custo: 500, 
    icon: 'placeholder.png',
    efeito: () => boost *= 2,
  },
  { nome: "Modo Foco", 
    custo: 1000, 
    icon: 'placeholder.png',
    efeito: () => boost *= 2,
  }
]

// Estruturas "place holder" só para o código funcionar
const estruturas = [
  { nome: "Servidor Local", 
    custoBase: 10, 
    comprados: 0,
    icon: 'placeholder.png' ,
    get custoAtual() {
      return Math.floor(this.custoBase * Math.pow(1.15, this.comprados));
    }
  },
  { nome: "Banco de Dados", 
    custoBase: 100,
    comprados: 0,
    icon: 'placeholder.png',
    get custoAtual() {
      return Math.floor(this.custoBase * Math.pow(1.15, this.comprados));
    }
  },
  { nome: "Nuvem Privada", 
    custoBase: 1000, 
    comprados: 0,
    icon: 'placeholder.png',
    get custoAtual() {
      return Math.floor(this.custoBase * Math.pow(1.15, this.comprados));
    }
   },
  { nome: "Cluster de Servidores", 
    custoBase: 10000, 
    comprados: 0,
    icon: 'placeholder.png',
    get custoAtual() {
      return Math.floor(this.custoBase * Math.pow(1.15, this.comprados));
    }
  }
]

// Lista com os possíveis bônus do café
const bonusList = [
  {
    nome: "BONUS 1",
    descricao: "15% das linhas + 13",
    peso: 70,
    get efeito() {
      const ganho = Math.floor(pontos * 0.15 + 13);
      pontos += ganho;
      return `Ganhou ${ganho} linhas!`
    },
  },
  {
    nome: "BONUS 2",
    descricao: "LS x7",
    duracao: 60,
    peso: 30,
    icon: 'placeholder.png',
    get efeito() {
      lsMultiplier *= 7;
      return `Linhas de código x7 por ${this.duracao} segundos!`
    },
    reverter: () => lsMultiplier /= 7,
  },
  {
    nome: "BONUS 3",
    descricao: "LS x777",
    duracao: 15,
    peso: 10,
    icon: 'placeholder.png',
    get efeito() {
      lsMultiplier *= 777;
      return "LS multiplicado por 777!!"
    },
    reverter: () => lsMultiplier /= 777,
  },
  {
    nome: "BONUS 4",
    descricao: "LS x1111",
    duracao: 10,
    peso: 2,
    icon: 'placeholder.png',
    get efeito() {
      lsMultiplier *= 1111;
      return "LS multiplicado por 1111!!!"
    },
    reverter: () => lsMultiplier /= 1111,
  },
  {
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
    nome: "STORM BONUS",
    descricao: "7% das linhas!", // MUDAR PARA BONUS DE LINHAS POR SEGUNDO NO FUTURO
    get efeito() {
        const ganho = Math.floor(pontos * 0.07 + 13);
        pontos += ganho;
        return `Ganhou ${ganho} linhas!`
    },
  },
  {
    nome: 'CAFÉ VENCIDO',
    descricao: 'Não faz nada...',
    peso: 1,
    get efeito() {
      return 'Não faz nada... Literalmente.'
    },
  }
]

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
let tabActive = 'Estruturas' // Qual a aba ativa atualmente

const button = document.getElementById('click_button') // Teclado CLICÁVEL
const keyboard = document.querySelector('.computer-keyboard')
const display = document.getElementById('pontos') // Display das linhas de código
const buttonsHeader = document.querySelectorAll(".button-header") // Botões para mudar de aba
const contentList = document.querySelector('.content-list') // Lista de items
const coffeeContainer = document.getElementById('coffee-container') // Container dos cafés
const boostsContainer = document.querySelector('.container-boosts') // Container dos boosts
const clicksContainer = document.querySelector('.clicks-container')

// USAR ESSA FUNÇÃO PARA ATUALIZAR OS PONTOS
function refresh(valorAtual) {
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

// No celular, active fica muito bugado, portanto iremos colocar uma animação manualmente
button.addEventListener("touchstart", () => {
  triggerAnimation()
})

function triggerAnimation() {
  keyboard.classList.remove('pulinho') // remove a classe
  void keyboard.offsetWidth             // força reflow (reinicia a animação)
  keyboard.classList.add('pulinho')    // adiciona novamente
}

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

// Evento do botão de clicar
// Quando o botão é clicado, adiciona pontos e atualiza o display
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

  const atual = pontos
  pontos += boost
  refresh(atual)
})

// CONTAINER DA DIREITA (UPGRADES/ESTRUTURAS)

buttonsHeader.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (btn.classList.contains('active')) return

        buttonsHeader.forEach((b) => b.classList.remove('active')) // Primeiro, remove "active" de todos
        btn.classList.add('active') // Depois, adiciona somente no que foi clicado

        // Através das classes, verifica se é o botão da esquerda que foi clicado
        tabActive = btn.textContent
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
  let firstIndex= -1

  // Acha a primeira estrutura cujo custo é menor que o total de pontos
  for (let i = 0; i < estruturas.length; i++) {
    const estrutura = estruturas[i]

    if (pontos >= estrutura.custoAtual || estrutura.unlocked) {
      estrutura.unlocked = true
      continue
    } else {
      firstIndex = i - 1
      break
    }
  }

  // Se todas são compráveis, pega todas
  let estruturasFixed
  if (firstIndex === -1 && estruturas.every(e => e.unlocked)) {
    estruturasFixed = estruturas
  } else if (firstIndex === -1 || firstIndex === undefined) { // Se nenhuma é comprável, pega só as duas primeiras
    estruturasFixed = estruturas.slice(0, 2)
  } else {
    const finalIndex = Math.min(Number(firstIndex) + 2, estruturas.length - 1) // Caso contrário, pega todas as compráveis + duas
    estruturasFixed = estruturas.slice(0, finalIndex + 1)
  }

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
          <span class="item-name">${!item.unlocked ? '????' : item.nome}</span>
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

    div.addEventListener('click', () => buyEstrutura(i))

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

        div.addEventListener('click', () => buyUpgrade(item.index))
        contentList.appendChild(div)
    })
}

// Compra a estrutura, aumenta o contador de "comprados" e subtrai dos pontos
const buyEstrutura = (index) => {
  const estrutura = estruturas[index]

  if (pontos < estrutura.custoAtual) return

  const atual = pontos
  pontos -= estrutura.custoAtual
  estrutura.comprados += 1

  refresh(atual)
}

// Compra a estrutura, deixa ela como "purchased" (comprada), ativa o efeito do upgrade e subtrai dos pontos
const buyUpgrade = (index) => {
  const upgrade = upgrades[index]

  if (pontos < upgrade.custo || upgrade.purchased) return

  const atual = pontos
  pontos -= upgrade.custo
  upgrade.efeito()
  upgrade.purchased = true

  refresh(atual)
}

// Renderiza os upgrades assim que o site inicia
renderEstruturas(estruturas)

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
    div.addEventListener('click', () => {
      const root = document.documentElement
      const cookieSize = getComputedStyle(root).getPropertyValue('--cs')
      const cookieSizeValue = parseInt(cookieSize)
      // ADICIONAR ALGUM SOM
      // Esse operador serve para: se "bonusName" for null, será escolhido um bonus aleatório, senão será escolhido o que foi enviado como parâmetro pela função
      const bonus = bonusList.find(b => b.nome == bonusName) ?? escolherBonusComPeso(bonusList)
      const atual = pontos
      const efeito = bonus.efeito // Trigga o efeito do bônus
      setBonus(bonus) // Coloca o bônus na tela
      refresh(atual) // Atualiza os pontos na tela
      
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

const setBonus = (bonus) => {
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
    nome: bonus.nome,
    descricao: bonus.descricao,
    timeoutId,
    expiresIn: Date.now() + bonus.duracao * 1000,
    reverter: bonus.reverter,
  })

  startMatrix()

  const div = document.createElement("div")
  div.className = `boost cooldown`
  div.dataset.nome = bonus.nome // Coloca um data-set para facilitar a localização dessa div
  div.style.backgroundImage = `url('./assets/${bonus.icon}')` // Coloca dire
  div.style.setProperty('--time', `${bonus.duracao}s`) // Coloca uma variável para o CSS saber o tempo da animação
  boostsContainer.appendChild(div) // Adiciona ao container dos boosts
}

function removeBoost(nome) {
  const index = boostsActive.findIndex(b => b.nome === nome)
  if (index !== -1) {
    const boost = boostsActive[index]
    if (boost.reverter) boost.reverter() // Desfaz o efeito
    boostsActive.splice(index, 1) // Retira o boost da lista

    const boostDiv = document.querySelector(`[data-nome="${nome}"]`) // Pega a div com o boost ativo
    if (boostsActive.length == 0) stopMatrix() // Se não houver mais nenhum boost, para com o efeito de matrix
    boostDiv.remove()
  }
}

triggerCoffeeEvent()

// FIM DO EVENTO DO CAFÉ

// FUNÇÃO EFEITO MATRIX (https://github.com/resolvendobug/efeito-matrix)

const canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')
let matrix

canvas.height = window.innerHeight
canvas.width = 2000 // Se alguém tiver um monitor maior que isso...

const texts = '0123456789'.split('')
const fontSize = 16;
const columns = canvas.width/fontSize
let drops = Array.from({ length: columns }, () => 1)

function drawMatrix(){
    ctx.fillStyle = 'rgba(0, 41, 10, 0.05)';
    ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = '#0F0';
    ctx.font = fontSize+ 'px Doto';
    for (let i = 0; i < drops.length; i++){
        var text = texts[Math.floor(Math.random()*texts.length)];
        ctx.fillText(text,i*fontSize,drops[i]*fontSize);

        if (drops[i]*fontSize > canvas.height || Math.random() > 0.95){
            drops[i] = 0;
        }

        drops[i]++;
    }
}

const startMatrix = () => {
  matrix = setInterval(drawMatrix, 33)
  canvas.style.opacity = 1
  document.body.classList.add('matrix')
}

const stopMatrix = () => {
  clearInterval(matrix)
  canvas.style.opacity = 0
    document.body.classList.remove('matrix')
  setTimeout(() => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
  }, 500)
}

// FIM DA FUNÇÃO MATRIX