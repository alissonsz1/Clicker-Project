// Upgrades "place holder" só para o código funcionar
const upgrades = [
  {
    nome: "Mouse gamer",
    custo: 100,
    descricao: 'Ninguém sabe pra que servem todos esses botões, mas eles estão lá.',
    funcao: 'Cada clique gera o dobro de linhas.',
    icon: 'mouse.png',
    // icon: 'placeholder.png',
    efeito: () => boost *= 2,
  },
  {
    nome: "Cadeira Gamer",
    custo: 250,
    descricao: 'Ergonomia duvidosa, produtividade inegável.',
    funcao: 'Cada clique gera o dobro de linhas.',
    icon: 'cadeira.png',
    // icon: 'placeholder.png',
    efeito: () => boost *= 2,
  },
  {
    nome: "Teclado Mecânico RGB",
    custo: 50000,
    descricao: 'Cada cor te deixa 1% mais feliz. São 16M de cores.',
    funcao: 'Cada clique gera 1% das suas LS.',
    icon: 'teclado.png',
    // icon: 'placeholder.png',
    efeito: () => onClickEffects.push(() => lsTOT * 0.01),
  },
  {
    nome: "Bot de Commit",
    custo: 12000,
    descricao: 'feat: commita com base nos seus pensamentos.',
    funcao: 'Cada clique gera o dobro de linhas.',
    icon: 'commitbot.png',
    // icon: 'placeholder.png',
    efeito: () => boost *= 2,
  },
  {
    nome: "Placa gamer",
    custo: 1500,
    descricao: 'Impede seu irmão caçula de perturbar seu foco.',
    funcao: 'Aumenta geração de LS em 10%.',
    icon: 'placa.png',
    // icon: 'placeholder.png',
    efeito: () => lsMultiplier *= 1.1,
  },
  {
    nome: "ChatGPT Licenciado",
    custo: 4000,
    descricao: 'Agora com 5% menos alucinações.',
    funcao: 'Aumenta geração de LS em 10%.',
    icon: 'chatgpt.png',
    // icon: 'placeholder.png',
    efeito: () => lsMultiplier *= 1.1,
  },
  {
    nome: "Cafeteira elétrica",
    custo: 100000,
    descricao: 'Seus cafés mais rápidos e mais gostosos!',
    funcao: 'Dobra a chance de aparecer um cafézinho.',
    icon: 'cafeteira.png',
    // icon: 'placeholder.png',
    efeito: () => coffeeProb *= 2,
  },
  {
    nome: "Frigobar",
    custo: 2500,
    descricao: 'Menos idas à cozinha, mais código.',
    funcao: 'Aumenta geração de LS em 10%.',
    icon: 'frigobar.png',
    // icon: 'placeholder.png',
    efeito: () => lsMultiplier *= 1.10,
  },
  {
    nome: "PENDRIVE de 2TB",
    custo: 2000,
    descricao: 'Por algum motivo, diz que já está 97% cheio...',
    funcao: 'Cada clique gera o dobro de linhas.',
    icon: 'pendrive.png',
    // icon: 'placeholder.png',
    efeito: () => boost *= 2,
  },
  {
    nome: "Gatinho fofo",
    custo: 10000,
    descricao: 'Meoow',
    funcao: 'Aumenta consideravelmente suas LS.',
    icon: 'gatinho.png',
    // icon: 'placeholder.png',
    efeito: () => lsMultiplier *= 2,
  },
  {
    nome: "Mousepad ergonômico",
    custo: 3000,
    descricao: 'Previne você de ter uma tendinite.',
    funcao: 'Aumenta geração de LS em 5%.',
    icon: 'mousepad.png',
    // icon: 'placeholder.png',
    efeito: () => lsMultiplier *= 1.05,
  },
  {
    nome: "Fibra óptica",
    custo: 5000,
    descricao: 'Chega de ping alto no lolzinho!',
    funcao: 'Aumenta geração de LS em 5%.',
    icon: 'fibra.png',
    // icon: 'placeholder.png',
    efeito: () => lsMultiplier *= 1.05,
  },
  {
    nome: "Cubo mágico",
    custo: 4500,
    descricao: 'Save a diferença entre o cubo mágico e a programação? É que da programação eu desisto.',
    funcao: 'Chance de 5% de dobrar um clique.',
    icon: 'cubo.png',
    // icon: 'placeholder.png',
    efeito: () => onClickEffects.push(() => {
      if (Math.random() < 0.05) return boost
      else return 0
    }),
  },
  {
    nome: "Ventilador portátil",
    custo: 3500,
    descricao: 'Para esfriar sua cabeça (e evitar um burnout).',
    funcao: 'Aumenta geração de LS em 10%.',
    icon: 'ventilador.png',
    // icon: 'placeholder.png',
    efeito: () => lsMultiplier *= 1.10,
  },
  {
    nome: "Fone antirruído",
    custo: 6500,
    descricao: 'Abafa até 99,999999999999999999999999999999999999999999999999999% dos ruídos.',
    funcao: 'Aumenta geração de LS em 10%.',
    icon: 'fone.png',
    // icon: 'placeholder.png',
    efeito: () => lsMultiplier *= 1.10,
  },
  {
    nome: "Certificado Online",
    custo: 7500,
    descricao: 'Aumenta exponencialmente suas chances de arranjar um emprego - Obrigado, Guanabara!',
    funcao: 'Cada clique gera +0.5 linha de código para cada construção comprada',
    icon: 'certificado.png',
    // icon: 'placeholder.png',
    efeito: () => onClickEffects.push(() => estruturas.reduce((sum, obj) => sum + obj.comprados, 0) * 0.5),
  },
  {
    nome: "SSD de última geração",
    custo: 12000,
    descricao: 'HD é coisa do passado, agora a moda é comprar SSD usado.',
    funcao: 'Aumenta geração de LS em 10%.',
    icon: 'ssd.png',
    // icon: 'placeholder.png',
    efeito: () => lsMultiplier *= 1.10,
  },
  {
    nome: "Placa de vídeo",
    custo: 20000,
    descricao: 'RTX 5090 só pra assistir tutoriais em 8K!',
    funcao: 'Cada clique gera o dobro de linhas.',
    icon: 'gpu.png',
    // icon: 'placeholder.png',
    efeito: () => boost *= 2,
  },
].map((up, i) => ({...up, id: `up${i+1}`})).sort((a, b) => a.custo - b.custo)

// Estruturas "place holder" só para o código funcionar
const estruturas = [
  { 
    nome: "LED", 
    plural: "LEDs",
    custoBase: 15, 
    comprados: 0,
    icon: 'led.png',
    descricao: 'Não aumenta seu desempenho, mas sua moral sim.',
    ls: .5,
    gerado: 0,
  },
  { 
    nome: "Monitor", 
    plural: "Monitores",
    custoBase: 100, 
    comprados: 0,
    icon: 'monitor.png',
    descricao: 'Telas nunca são demais.',
    ls: 5,
    gerado: 0,
  },
  { 
    nome: "IDE", 
    plural: "IDEs",
    custoBase: 1100, 
    comprados: 0,
    icon: 'ide.png',
    descricao: 'VS Code? Eclipse? Sublime? IntelliJ IDEA? Por que não TODOS eles?',
    ls: 40,
    gerado: 0,
  },
  { 
    nome: "Clippy", 
    plural: "Clippies",
    custoBase: 12000, 
    comprados: 0,
    icon: 'clippy.png',
    descricao: 'Olá! Eu sou o Clippy, seu assistente. Gostaria de uma ajudinha?',
    ls: 250,
    gerado: 0,
  },
  { 
    nome: "DEV Júnior", 
    plural: "DEVs Júniores",
    custoBase: 130000, 
    comprados: 0,
    icon: 'dev_jr.png',
    descricao: 'Não faz ideia do que está fazendo, mas ele tenta... Tadinho.',
    ls: 1500,
    gerado: 0,
  },
  { 
    nome: "Servidor local", 
    plural: "Servidores locais",
    custoBase: 1400000,
    comprados: 0,
    icon: 'servidor.png',
    descricao: 'Quando seu PC não aguenta mais, você terceiriza.',
    ls: 8000,
    gerado: 0,
  },
  { 
    nome: "DEV Pleno", 
    plural: "DEVs Plenos",
    custoBase: 20000000, 
    comprados: 0,
    icon: 'dev_pleno.png',
    descricao: 'DEV Júnior+ com uma pitada de independência',
    ls: 35000,
    gerado: 0,
  },
  { 
    nome: "Cloud",
    plural: "Clouds",
    custoBase: 330000000, 
    comprados: 0,
    icon: 'cloud.png',
    descricao: 'Seus códigos agora suspensos no limbo da internet',
    ls: 200000,
    gerado: 0,
  },
  { 
    nome: "DEV Sênior", 
    plural: "DEVs Sêniores",
    custoBase: 5100000000, 
    comprados: 0,
    icon: 'dev_senior.png',
    descricao: 'Codifica em silêncio absoluto e surge apenas para resolver os bugs alheios.',
    ls: 1100000,
    gerado: 0,
  },
    { 
    nome: "Data Center", 
    plural: "Data Centers",
    custoBase: 75000000000, 
    comprados: 0,
    icon: 'data_center.png',
    descricao: 'Armazena zettabytes de memória! (e seus dados mais obscuros).',
    ls: 7700000,
    gerado: 0,
  },
  { 
    nome: "IA ultra-generativa", 
    plural: "IAs ultra-generativas",
    custoBase: 1000000000000, 
    comprados: 0,
    icon: 'ia.png',
    descricao: 'É tipo um DEV, só que mais rápido, mais esperto, mais eficaz, mais sagaz, mais sucinto, mais... Deixa pra lá.',
    ls: 45000000,
    gerado: 0,
  },
  { 
    nome: "PC quântico", 
    plural: "PCs quânticos",
    custoBase: 14000000000000, 
    comprados: 0,
    icon: 'quantico.png',
    descricao: 'Resolve os bugs antes mesmo deles surgirem.',
    ls: 230000000,
    gerado: 0,
  },

].map((es, i) => ({id: `es${i+1}`,...es})).sort((a, b) => a.custoBase - b.custoBase)

// Lista com os possíveis bônus do café
const bonusList = [
  {
    id: 'bn1',
    nome: "CAFÉZINHO",
    descricao: "15% das linhas + 13",
    peso: 100,
    get efeito() {
      const ganho = Math.floor(pontos * 0.15 + 13);
      refresh(ganho) // Atualiza os pontos na tela
      return `Ganhou ${formatarNumero(ganho)} linhas!`
    },
  },
  {
    id: 'bn2',
    nome: "CAFÉ DOCINHO",
    descricao: "LS x7",
    type: 'matrix',
    duracao: 30,
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
    nome: "CAFÉ PERFEITO",
    descricao: "LS x777",
    type: 'matrix',
    duracao: 15,
    peso: 4,
    icon: 'placeholder.png',
    get efeito() {
      lsMultiplier *= 777;
      return `LS x777 por ${this.duracao} segundos!!!`
    },
    reverter: () => lsMultiplier /= 777,
  },
  {
    id: 'bn4',
    nome: "CAFÉ DIVINO",
    descricao: "LS x1111",
    type: 'matrix',
    duracao: 10,
    peso: 1,
    icon: 'placeholder.png',
    get efeito() {
      lsMultiplier *= 1111;
      return `LS x1111 por ${this.duracao} segundos!!!`
    },
    reverter: () => lsMultiplier /= 1111,
  },
  {
    id: 'bn5',
    nome: "TEMPESTADE DE CAFÉ",
    peso: 5,
    get efeito() {
        var coffeeStorm = setInterval(() => {
            spawnCoffe('bn6')
        }, 400)

        setTimeout(() => {
            clearInterval(coffeeStorm)
        }, 7000)

        return "Café para todo lado!"
    },
  },
  // STORM BONUS SÓ É ATIVADO PELO BONUS 5
  {
    id: 'bn6',
    nome: "STORM BONUS",
    descricao: "5 min das LS!",
    get efeito() {
        const ganho = Math.floor(lsTOT * 60 * 5);
        refresh(ganho)
        return `Ganhou ${formatarNumero(ganho)} linhas!`
    },
  },
  {
    id: 'bn7',
    nome: 'CAFÉ VENCIDO',
    descricao: 'Não faz nada...',
    peso: 2,
    get efeito() {
      return 'Não faz nada... Absolutamente nada.'
    },
  },
  {
    id: 'bn8',
    nome: 'CAFÉ DO MAL',
    type: 'evil',
    icon: 'placeholder.png',
    peso: 10,
    duracao: 30,
    get efeito() {
      lsMultiplier *= .5
      coffeeProb *= .1
      return `LS x0.5 por ${this.duracao} segundos...`
    },
    reverter: () => {
      lsMultiplier /= .5
      coffeeProb /= .1
    },
  },
    {
    id: 'bn9',
    nome: 'CAFÉ DEMONÍACO',
    type: 'evil',
    icon: 'placeholder.png',
    peso: 2,
    duracao: 6,
    get efeito() {
      lsMultiplier *= 666
      return `LS x666 por ${this.duracao} segundos...`
    },
    reverter: () => lsMultiplier /= 666,
  }
]

const onClickEffects = [
  () => {
    return boost
  },
]

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

function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


const csrfToken = window.csrfToken

// Variaveis
let id = -1
let company = ''
let pontos = 0;
let boost = 1 // Incrementa os CLIQUES (ou TECLADADAS no futuro)
let lsTOT = 0
let lsMultiplier = 1 // Multiplicador para as LS
let coffeeProb = 0.03 // Probabilidade de aparecer um café na tela (AUMENTAR CASO QUEIRA DEBUGAR)
let boostsActive = [] // Array que armazena todos os boosts ativos
let tabActive = 'Estruturas' // Qual a aba ativa atualmente
let mouseX = 0 // Coordenada x do mouse
let mouseY = 0 // Coordenada y do mouse
let listDataLeaderboard; // guarda os dados do leaderboard
let listUpgrades; // lista de upgrades comprados
let listStructures; // lista de estruturas comprados
let debug = false; // debugar parte do código
let currentMusic = null // Controla qual música está tocando no momento
let fadeOutInterval = null
let fadeInInterval = null
let gameInterval = null
let coffeeInterval = null

const button = document.getElementById('click_button') // Teclado CLICÁVEL
const keyboard = document.querySelector('.computer-keyboard')
const display = document.getElementById('pontos') // Display das linhas de código
const buttonsHeader = document.querySelectorAll(".button-header") // Botões para mudar de aba
const contentList = document.querySelector('.content-list') // Lista de items
const coffeeContainer = document.getElementById('coffee-container') // Container dos cafés
const boostsContainer = document.querySelector('.container-boosts') // Container dos boosts
const clicksContainer = document.querySelector('.clicks-container') // Container que armazena os pequenos incrementos dos cliques
const tooltip = document.querySelector('.tooltip') // Container que armazenas as descrições quando passa o mouse por cima
const mobileTooltip = document.querySelector('.mobile-tooltip')
const companyNameContainer = document.querySelector('.company-text')
const leaderboardWrapperContainer = document.querySelector('.leaderboard-wrapper')
const lbContentContainer = document.querySelector('.leaderboard-content')
const lsPersecondContainer = document.querySelector('.ls-persecond')
const computerCodelinesContainer = document.querySelector(".computer-codelines");
const modalContainer = document.querySelector('.modal')
const modalInput = document.querySelector('.modal-input')
const modalForm = document.querySelector('.modal-form')
const modalErrorContainer = document.querySelector('.modal-error')

// ESTRUTURAS QUE MANDA EVENTOS

//Atualização o arquivo em outros arquivos js
function atualizarPontos(novoValor) {
  // Dispara um evento personalizado com o novo valor
  const evento = new CustomEvent("pontosAtualizados", {
    detail: { newPoints: novoValor }
  })

  window.dispatchEvent(evento); // Notifica outros scripts
}

// LEADERBOARD

addSafeTouchListener(leaderboardWrapperContainer, toggleMobileLeaderboard)

lbContentContainer.addEventListener("transitionend", (e) => {
  if (e.propertyName === "opacity" && getComputedStyle(lbContentContainer).opacity != 1) {
    leaderboardWrapperContainer.classList.remove('enabled')
  }
})

leaderboardWrapperContainer.addEventListener('mouseenter', (e) => {
  if (window.matchMedia('(pointer: coarse)').matches) return
  playSound(`/static/assets/sounds/lb-in.ogg`, .4)
})

leaderboardWrapperContainer.addEventListener('mouseleave', (e) => {
  if (window.matchMedia('(pointer: coarse)').matches) return
  playSound(`/static/assets/sounds/lb-out.ogg`, .4)
})

function toggleMobileLeaderboard(e) {
  const touchedContent = e.target.closest('.leaderboard-content')
  if (touchedContent) return

  const isEnabled = leaderboardWrapperContainer.classList.contains('enabled')

  if (isEnabled) {
    lbContentContainer.style.opacity = 0
    leaderboardWrapperContainer.style.background = 'transparent'
    playSound(`/static/assets/sounds/lb-out.ogg`, .4)

  } else {
    leaderboardWrapperContainer.classList.toggle('enabled')
    void lbContentContainer.offsetWidth
    lbContentContainer.style.opacity = 1
    leaderboardWrapperContainer.style.background = 'var(--bs)'
    playSound(`/static/assets/sounds/lb-in.ogg`, .4)
  }
}

window.addEventListener('dispatchLeaderboard', (e) => {
  renderLeaderboard(e.detail.lb)
})

function requestLeaderboard() {
    const event = new CustomEvent("requestLeaderboard")

    window.dispatchEvent(event);
}

function renderLeaderboard(jogadores) {
  jogadores = jogadores.map((j, i) => ({...j, pos: i+1}))
  const yourPlayer = jogadores.find(j => j.id == idPlayer);

  const container = document.querySelector(".leaderboard-content>ul");
  const prevPos = document.querySelector('.lb--prev-pos')

  prevPos.textContent = yourPlayer?.pos
  prevPos.className = `lb--prev-pos lb-${yourPlayer?.pos}`

  let topJogadores = jogadores.slice(0, Math.min(jogadores.length, 11))

  const hasPlayerInTop = topJogadores.some(j => j.id == idPlayer)
  if (!hasPlayerInTop) {
    const newPlayer = {
      id: idPlayer,
      companyName: company,
      lsCount: pontos,
      pos: yourPlayer?.pos
    }
    topJogadores = [...topJogadores.slice(0, Math.min(jogadores.length, 10)), newPlayer]
  }

  container.childNodes.forEach(j => {
    const jID = j.id
    if (!topJogadores.find(tj => tj.id == jID)) j.remove()
  })

  topJogadores.forEach((jogador, index) => {
    const jogadorEl = document.getElementById(jogador.id)
    const isYou = jogador.id == idPlayer
    const pos = jogador.pos


    if (jogadorEl) {
      const pointsEl = jogadorEl.querySelector('.lb-number')
      const posEl = jogadorEl.querySelector('.lb-pos')

      jogadorEl.style.order = pos
      jogadorEl.style.transform = `translateY(${index*100}%)`
      jogadorEl.style.zIndex = pos >= 11 ? 200 : 200-pos
      pointsEl.textContent = formatarNumero(jogador.lsCount)
      posEl.textContent = pos
      posEl.className = `lb-pos lb-${pos} ${pos >= 11 ? 'lb-last': ''}`

      return
    }

    const li = document.createElement("li");

    if (isYou) li.className = 'you'
    li.id = jogador.id
    li.style.order = pos
    li.style.zIndex = pos >= 11 ? 200 : 200-pos
    li.innerHTML = `
      <span class="lb-pos lb-${pos} ${pos >= 11 ? 'lb-last': ''}">${pos}</span>
      <span class="lb-name">${jogador.companyName}${isYou ? ' <strong>(VOCÊ)</strong>' : ''}</span>
      <span class="lb-number">${formatarNumero(jogador.lsCount)}</span>
    `

    container.appendChild(li);

    li.style.transform = `translateY(2000%)`
    void li.offsetWidth
    li.style.transform = `translateY(${index*100}%)`
  })
}

// FIM DO LEADERBOARD

// Pega o nome do player
window.addEventListener("updateCompany", (e) => {
  company = e.detail.company;
  companyName.textContent = company;
  
})

// PEGA DO BACKEND TODOS OS DADOS DO PLAYER

window.addEventListener("dispatchPlayerData", (event) => {
  //Coleta os dados do player e coloca em variáveis e postam no index
  let loadingPlayer = event.detail.player;
  company = loadingPlayer.companyName
  companyName.textContent = company;


  // Verifica quais estrutras e upgrades estão salvos e atualiza da lista principal
  listUpgrades = JSON.parse(localStorage.getItem("upgrades"))?.salve || []
  listStructures = JSON.parse(localStorage.getItem("estruturas"))?.salve || []

  listUpgrades.forEach(item => {
    upgrades.forEach((upgrade, index) => {
      if(upgrade.id == item){
        upgrades[index].purchased = true;
        upgrades[index].efeito();
      }
    })
  })

  listStructures.forEach(item => {
    estruturas.forEach((estrutura, index)=>{
      if(estrutura.id == item.id){
        estruturas[index].comprados = item.comprados;
        estruturas[index].gerado = item.gerado;
        estruturas[index].unlocked = true;
      }
    })
  })

  refresh(loadingPlayer.lsCount)
})

// Traz os dados do leaderboard do backend na primeira execução
window.addEventListener("dispatchLearderboardData", (event)=>{
  // ESTRUTURA = {id, companyName, lsCount}
  let leaderboardInfo = event.detail.leaderboardData;
  renderLeaderboard(leaderboardInfo, 0, companyName, pontos);
})

history.pushState(null, null, window.top.location.pathname + window.top.location.search);
window.addEventListener('popstate', (e) => {
  e.preventDefault()
  // Reempilha o estado para impedir voltar
  history.pushState(null, null, window.top.location.pathname + window.top.location.search)
})

// Atualizar os upgrades, puxar as estruturas salvas no banco de dados
window.addEventListener("dispatchUpdateList", (event) => { 
  let loadingUpdateList = event.detail.updateList; // o index do upgrade é retornado
})

// Atualiza as estruturas, puxar as estruturas salvas do banco de dados
window.addEventListener("dispatchStructList", (event)=> {
  let loadingStructList = event.detail.structList; // retorna o index da estrutra e quantas delas foram comprados
})

// USAR ESSA FUNÇÃO PARA ATUALIZAR OS PONTOS
// valorAtual = pontos em seu estado ATUAL / add = o incremento que será adicionado (ou subtraído)
function refresh(add) {
  valorAtual = pontos
  pontos = valorAtual + add

  if (pontos != 0) document.title = `${formatarNumero(Math.floor(pontos))} linha${pontos > 1 ? 's' : ''} de código - Dev Clicker`
  checarDesbloqueios(pontos)
  animarContador(valorAtual)
  
  if (tabActive == 'Estruturas') renderEstruturas()
  else if (tabActive == 'Upgrades') renderUpgrades()
  showTooltip()
}

// Anima os numerozinhos para eles subirem de pouco em pouco
function animarContador(valorInicial, duracao = 700) {
  const valorFinal = pontos
  const add = valorFinal - valorInicial

  if (Math.abs(add) == 1) {
    display.textContent = `${formatarNumero(pontos)} linha${pontos > 1 ? 's' : ''} de código`
    if (add > 0) generateCodeLine()
    return
  }

  const MAX_LINHAS_POR_FRAME = 10;
  const range = valorFinal - valorInicial;
  let start = null;
  let lastValue = valorInicial

  // Função de easing
  function ease(x) {
    return Math.sqrt(1 - Math.pow(x - 1, 2));
  }

  function step(timestamp) {
    if (!start) start = timestamp
    const tempoDecorrido = timestamp - start
    const progresso = Math.min(tempoDecorrido / duracao, 1) // entre 0 e 1
    const eased = ease(progresso) // aplica easing

    const valorInterpolado = Math.floor(valorInicial + range * eased)
    const valorFormatado = formatarNumero(valorInterpolado)

    display.textContent = `${valorFormatado} linhas de código`

    // Gera code lines para cada valor novo que passou
    const diff = valorInterpolado - lastValue;
    if (diff > 0) {
      const linhasAGerar = Math.min(diff, MAX_LINHAS_POR_FRAME);
      for (let i = 0; i < linhasAGerar; i++) {
        lastValue++;
        generateCodeLine(1);
      }
    }

    if (progresso < 1) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}

// Essa função formata números grandes (10e6) para valores mais amigáveis (1 milhão)
function formatarNumero(valor) {
  if (valor < 1000000) return Number(valor).toLocaleString('pt-BR')

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
    if (pontos >= custoAtual(estrutura) && !estrutura.unlocked) {
      notificacoes.estruturas.add(index)
      estrutura.unlocked = true
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

  if ((notificacoes.upgrades.size > 0 && tabActive != 'Upgrades') || (notificacoes.estruturas.size > 0 && tabActive != 'Estruturas')) playSound('/static/assets/sounds/not.ogg', .4)
}

function addSafeTouchListener(element, onValidTouchEnd) {
  let touchValid = false;

  element.addEventListener('touchstart', () => {
    touchValid = true;
  });

  element.addEventListener('touchmove', (e) => {
    const touch = e.touches[0];
    const elAtPoint = document.elementFromPoint(touch.clientX, touch.clientY);
    if (!element.contains(elAtPoint)) {
      touchValid = false;
    }
  });

  element.addEventListener('touchend', (e) => {
    if (touchValid) {
      onValidTouchEnd(e);
    }
  });
}

// Quando o botão é clicado, adiciona pontos e atualiza o display com a função refresh()
button.addEventListener('click', (e) => {
  const toAdd = onClick()

  const click = document.createElement('div')
  const randomOffset = Math.random() * 8
  click.className = 'click'
  click.textContent = `+${formatarNumero(toAdd.toFixed(1))}`
  click.style.left = `calc(${e.pageX}px + ${randomOffset}px)`
  click.style.top = `${e.pageY}px`
  clicksContainer.appendChild(click)
  void click.offsetHeight
  click.classList.add('fading-up')


  playSound(`/static/assets/sounds/k${randomBetween(1, 3)}.ogg`, .4)

  click.addEventListener("transitionend", (e) => {
    if (e.propertyName === "opacity" && click.classList.contains("fading-up")) click.remove()
  })

})

function onClick() {
  let toAdd = 0

  // Executa todos os efeitos extras adicionados por upgrades
  onClickEffects.forEach(fn => {
    toAdd += fn()
  })

  refresh(toAdd)
  return toAdd
}

// No celular, 'active' fica muito bugado, portanto iremos colocar uma animação manualmente de pulo no teclado ao ser clicado
button.addEventListener("touchstart", triggerAnimation)

function triggerAnimation() {
  keyboard.classList.remove('pulinho') // remove a classe
  void keyboard.offsetWidth             // força reflow (reinicia a animação)
  keyboard.classList.add('pulinho')    // adiciona novamente
}

document.body.addEventListener('mousemove', (e) => {
  // Essa condição verifica se é um dispositivo com suporte a toque ou não
  if (window.matchMedia('(pointer: coarse)').matches || !modalContainer.classList.contains('disabled')) return

  mouseX = e.clientX
  mouseY = e.clientY

  showTooltip()
})

function showTooltip(x = mouseX, y = mouseY) {
  const el = document.elementsFromPoint(x, y).find(el => el.hasAttribute('data-tooltipid'))

  if (!el) {
    if (getComputedStyle(tooltip).opacity !== 0) tooltip.style.opacity = 0
    return
  }

  const container = document.querySelector(".container-right")
  const containerRect = container.getBoundingClientRect()
  const tooltipRect = tooltip.getBoundingClientRect()
  const id = el.getAttribute('data-tooltipid')
  const atributtePre = id.slice(0, 2)

  if (atributtePre === 'es') {
    const data = estruturas.find(es => es.id === id)

    let extraInfo = ``

    if (data.unlocked && data.comprados > 0) {
      extraInfo = `
          <ul>
            <li>cada ${data.nome} gera ${formatarNumero((data.ls * lsMultiplier).toFixed(1))} LS</li>
            <li>${data.comprados} ${data.comprados > 1 ? data.plural : data.nome} ${data.comprados > 1 ? 'estão' : 'está'} gerando ${formatarNumero((data.comprados*data.ls*lsMultiplier).toFixed(1))} LS</li>
            <li>${formatarNumero(Math.floor(data.gerado))} linhas geradas até agora</li>
          </ul>
      `
    }

    const custo = custoAtual(data)

    tooltip.innerHTML = `
        <div class="tooltip-header">
          <div class="tooltip-header--left">
            <img src="/static/assets/icons/${data.icon}" class="tooltip-icon ${!data.unlocked ? "hidden" : ''}"/>
            <strong class="tooltip-name">${data.unlocked ? data.nome : '???'}</strong>
          </div>
          <span class="tooltip-price ${pontos < custo ? 'high' : 'low'}">${formatarNumero(custo)}</span>
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
    tooltip.style.top = `min(${(y - 10)}px, calc(100vh - ${tooltipRect.height/2}px))`
  }
  else if (atributtePre === 'up') {
    const data = upgrades.find(up => up.id === id)

    tooltip.innerHTML = `
      <div class="tooltip-header">
        <div class="tooltip-header--left">
          <img src="/static/assets/icons/${data.icon}" class="tooltip-icon"/>
          <strong class="tooltip-name">${data.nome}</strong>
        </div>
        <span class="tooltip-price ${pontos < data.custo ? 'high' : 'low'}">${formatarNumero(data.custo)}</span>
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
    tooltip.style.top = `min(${(y - 10)}px, calc(100vh - ${tooltipRect.height/2}px))`

  }
  else if (atributtePre === 'bn') {
    const containerRect = document.querySelector('.container-boosts>.boost').getBoundingClientRect()  
    const data = boostsActive.find(bn => bn.id === id)
    
    tooltip.classList.add('bonus')
    tooltip.innerHTML = `
      <div class="tooltip-header center">
        <strong class="tooltip-name">${data.nome}</strong>
      </div>
      <div class="tooltip-content">
        <span class="tooltip-efeito">${data.efeito}</span>
      </div>
    `
    const tooltipRect = document.querySelector('.tooltip').getBoundingClientRect()
    tooltip.style.left = `${x}px`
    tooltip.style.top = `${containerRect.top - tooltipRect.height - 15}px`
    tooltip.style.transform = `translateX(-50%)`
    tooltip.style.opacity = 1
  }
}

function showMobileTooltip(type, item) {
  const titles = {
    es: 'Estruturas',
    up: 'Upgrades',
    bn: 'Bônus'
  }

  const content = document.createElement('div')
  const close = document.createElement('button')

  mobileTooltip.innerHTML = ''
  mobileTooltip.style.opacity = 1
  mobileTooltip.style.pointerEvents = 'all'

  content.className = 'mobile-tooltip--content'
  content.innerHTML = `<div class="mobile-tooltip--title">${titles[type]}</div>`

  if (type == 'es') {
    content.innerHTML += `
      <div class="mobile-tooltip--wrapper">
        <div class="mobile-tooltip--header">
          <img  src="/static/assets/icons/${item.icon}" class="mobile-tooltip--icon"/>
          <div class="mobile-tooltip--header-text">
              <span class="mobile-tooltip--name">${item.nome}</span>
              <span>Comprados: ${item.comprados}</span>
          </div>
        </div>
        <div class="monile-tootltip--items">
            <ul>
              <li>cada ${item.nome} gera ${formatarNumero((item.ls * lsMultiplier).toFixed(1))} LS</li>
              <li>${item.comprados} ${item.comprados > 1 ? item.plural : item.nome} ${item.comprados > 1 ? 'estão' : 'está'} gerando ${formatarNumero((item.comprados * item.ls * lsMultiplier).toFixed(1))} LS</li>
              <li>${formatarNumero(Math.floor(item.gerado))} linhas geradas até agora</li>
            </ul>
        </div>
          <span class="tooltip-description">${item.descricao}</span>
      </div>
    `
  } else if (type == 'up') {
    content.innerHTML += `
      <div class="mobile-tooltip--wrapper">
        <div class="mobile-tooltip--header">
          <img  src="/static/assets/icons/${item.icon}" class="mobile-tooltip--icon"/>
          <div class="mobile-tooltip--header-text">
              <span class="mobile-tooltip--name">${item.nome}</span>
          </div>
        </div>
        <span class="tooltip-function">${item.funcao}</span>
        <span class="tooltip-description">${item.descricao}</span>
      </div>
    `
  } else if (type == 'bn') {
    content.innerHTML += `
      <div class="mobile-tooltip--wrapper">
        <div class="mobile-tooltip--header">
          <img  src="/static/assets/icons/${item.icon}" class="mobile-tooltip--icon"/>
          <div class="mobile-tooltip--header-text">
              <span class="mobile-tooltip--name">${item.nome}</span>
          </div>
        </div>
        <span class="tooltip-function">${item.efeito}</span>
        <span class="tooltip-description">${item.descricao}</span>
      </div>
    `
  }

  close.className = 'close-bttn'
  close.textContent = 'Fechar'

  addSafeTouchListener(close, (e) => {
    e.stopPropagation(); // impede que o clique vá para outros elementos
    e.preventDefault(); // (opcional) previne o comportamento padrão, se necessário
    closeMobileTootip()
    playSound('/static/assets/sounds/close.ogg', .8)
  })

  content.appendChild(close)
  mobileTooltip.appendChild(content)
}

function closeMobileTootip() {
  mobileTooltip.style.opacity = 0
  mobileTooltip.style.pointerEvents = 'none'
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

      playSound(`/static/assets/sounds/tab.ogg`, .5)
      // Através do conteúdo, verifica qual botão foi clicado
      tabActive = btn.querySelector('.text').textContent
      if (tabActive == 'Upgrades') renderUpgrades() // Irá renderizar UPGRADES
      else if (tabActive == 'Estruturas') renderEstruturas() // Irá renderizar ESTRUTURAS
      else return
    })
})

// Função que irá rendereizar a lista certa na seção de estruturas
const renderEstruturas = () => {
  // Se antes, na lista, havia algum "upgrade", reseta o conteúdo da lista
  if (!contentList.querySelector('.estrutura')) contentList.innerHTML = ''

  const size = estruturas.filter(es => es.unlocked).length
  // const size = 99
  const estruturasFixed = estruturas.slice(0, Math.min(size + 2, estruturas.length))

  estruturasFixed.forEach((item) => {
    const id = `estrutura-${item.id}`
    const estrutura = document.getElementById(id)

    // Se o item já está renderizado, não adiciona ele novamente, apenas atualiza
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
      custo.textContent = formatarNumero(custoAtual(item))
      if (custoAtual(item) > pontos) {
        custo.classList.add('high')
        custo.classList.remove('low')
      } else {
        custo.classList.add('low')
        custo.classList.remove('high')
      }
      
      return
    } 

    const custo = custoAtual(item)
    const div = document.createElement("div")
    div.id = id
    div.innerHTML = (`
      <div class="item-icon"><img src="/static/assets/icons/${item.icon}"/></div>
      <div class="item-content">
        <div class="item-text">
          <span class="item-name">${!item.unlocked ? '???' : item.nome}</span>
          <span class="cust ${custo> pontos ? 'high' : 'low'}">${formatarNumero(custo)}</span>
        </div>
        <span class="item-purchased">${item.comprados > 0 ? item.comprados : ''}</span>
        <button class="info-bttn">INFO</button>
      </div>
    `)
    div.className = "content-item estrutura"
    if (item.unlocked) {
      div.classList.add('unlocked')
    }

    else div.classList.add('hidden')
    div.setAttribute('data-tooltipId', item.id)
    div.addEventListener('click', (e) => {
      const hasClickedInfo = document.elementsFromPoint(e.clientX, e.clientY).some(el => el.classList.contains('info-bttn'))
      if (hasClickedInfo) return
  
      buyEstrutura(item.id)
    })

    addSafeTouchListener(div.querySelector('.info-bttn'), () => {
      showMobileTooltip('es', item)
      playSound('/static/assets/sounds/open.ogg', .4)
    })
    
    contentList.appendChild(div)

  })
}

// Função que irá renderizar a lista certa na seção de upgrades
const renderUpgrades = () => {
  if (!contentList.querySelector('.upgrade')) contentList.innerHTML = ''

  const upgradesFiltered = upgrades.filter(item => !item.purchased)
  if (upgradesFiltered.length > 0) {
    upgradesFiltered.forEach(item => {
      const id = `upgrade-${item.id}`
      const upgrade = document.getElementById(id)

      if (upgrade) {
        const custo = upgrade.querySelector('.cust')

        if (item.purchased) upgrade.remove()
        else {
          custo.textContent = formatarNumero(item.custo)
          if (item.custo > pontos) {
            upgrade.classList.toggle('unlocked', false)
            custo.classList.add('high')
            custo.classList.remove('low')
          } else {
            upgrade.classList.toggle('unlocked', true)
            custo.classList.add('low')
            custo.classList.remove('high')
          }
        }
        return 
      }

      const div = document.createElement("div")
      div.id = id

      div.innerHTML = (`
        <div class="item-icon"><img src="/static/assets/icons/${item.icon}"/></div>
        <div class="item-content">
          <div class="item-text">
            <span class="item-name">${item.nome}</span>
            <span class="cust ${item.custo > pontos ? 'high' : 'low'}">${formatarNumero(item.custo)}</span>
          </div>
          <button class="info-bttn">INFO</button>
        </div>
      `)

      div.className = "content-item upgrade"
      if (pontos >= item.custo) div.classList.add('unlocked')

      div.setAttribute('data-tooltipId', item.id)
      div.addEventListener('click', (e) => {
        const hasClickedInfo = document.elementsFromPoint(e.clientX, e.clientY).some(el => el.classList.contains('info-bttn'))
        if (hasClickedInfo) return
        
        const hasBought = buyUpgrade(item.id)
        if (hasBought) div.remove()
      })

      addSafeTouchListener(div.querySelector('.info-bttn'), () => {
        showMobileTooltip('up', item)
        playSound('/static/assets/sounds/open.ogg', .4)
      })
      
      contentList.appendChild(div)
    })
  } else {
    const span = document.createElement("span")

    span.style.fontSize = '1.2em'
    span.textContent = 'Você comprou tudo :('
    contentList.appendChild(span)
  }
}

// Compra a estrutura, aumenta o contador de "comprados" e subtrai dos pontos
const buyEstrutura = (id) => {
  const estrutura = estruturas.find( e => e.id == id )
  const custo = custoAtual(estrutura)

  if (pontos < custo) return

  estrutura.comprados += 1
  refresh(-custo)
  
  playSound(`/static/assets/sounds/b${randomBetween(1, 2)}.ogg`, .5)
}

// Compra a estrutura, deixa ela como "purchased" (comprada), ativa o efeito do upgrade e subtrai dos pontos
const buyUpgrade = (id) => {
  const upgrade = upgrades.find(e => e.id == id)

  if (pontos < upgrade.custo || upgrade.purchased) return

  upgrade.efeito()
  upgrade.purchased = true

  refresh(-upgrade.custo)
  
  playSound(`/static/assets/sounds/b${randomBetween(1, 2)}.ogg`, .5)

  return true
}

// FIM DO CONTAINER DA DIREITA

// EVENTO ALEATÓRIO DO CAFÉ

const triggerCoffeeEvent = () => {
    // A cada um segundo, verificar se o número aleatorizado é menor que a probabilidade, para então spawnar o coffee
    setInterval(() => {
        if (Math.random() < coffeeProb) spawnCoffe()
    }, 1000)
}

let lastBonus = ''

// Função responsável por spawnar o café, recebendo de parâmetro qual o BÔNUS escolhido
const spawnCoffe = (bonusId = null) => {
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
      // Esse operador serve para: se "bonusName" for null, será escolhido um bonus aleatório, senão será escolhido o que foi enviado como parâmetro pela função
      const bonus = bonusList.find(b => b.id == bonusId) ?? escolherBonusComPeso(bonusList)
      setBonus(bonus) // Coloca o bônus na tela
      spawnAlert(x, y)
      
      playSound(`/static/assets/sounds/coffee.ogg`, .5)
      div.remove() // Remove o café
    })
}

function spawnAlert(x, y, bonus = lastBonus) {
  const root = document.documentElement
  const cookieSize = getComputedStyle(root).getPropertyValue('--cs')
  const cookieSizeValue = parseInt(cookieSize)
    // Cria um pequeno "alerta" para mostrar qual foi o bônus obtido
  const alertCoffee = document.createElement('div')
  alertCoffee.classList.add('alert-coffee')
  alertCoffee.innerHTML = (`
        <div class="alert-back"></div> 
        <h2 class="alert-text alert-name">${bonus.nome}</h2>
        <span class="alert-text">${bonus.efeito}</span>
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
function setBonus(bonus) {
  if (!bonus.icon) {
    lastBonus = {
      nome: bonus.nome,
      efeito: bonus.efeito,
    }

    return
  } // Se o bonus nao tem um icone, ele não é um bonus "passivo" e não precisa ficar na listinha de bonus

  const active = boostsActive.find(b => b.nome == bonus.nome) // Verifica se já tem um boost ativo

  // Se o bonus já está ativo, será renovado
  if (active) {
    clearTimeout(active.timeoutId) // Para com o timer anterior

    // E inicia um novo
    active.timeoutId = setTimeout(() => {
      removeBoost(bonus.id)
    }, bonus.duracao * 1000)

    const boostDiv = document.querySelector(`[data-id="${bonus.id}"]`)
    lastBonus = {
      nome: active.nome,
      efeito: active.efeito,
  }

    boostDiv.classList = 'boost'
    void boostDiv.offsetHeight // Essa linha serve para 'atualizar' o elemento, ou seja, identificar que houver a mudança em 'classList'
    boostDiv.classList = 'boost cooldown'
    active.expiresIn = Date.now() + bonus.duracao * 1000

    return
  }

  // Inicia um timer pro bonus baseado na sua duracao
  const timeoutId = setTimeout(() => {
    removeBoost(bonus.id)
  }, bonus.duracao * 1000)

  const expiresIn = Date.now() + bonus.duracao * 1000

  const efeito = bonus.efeito

  lastBonus = {
    nome: bonus.nome,
    efeito,
  }

  const bonusActive = {
    id: bonus.id,
    nome: bonus.nome,
    descricao: bonus.descricao,
    type: bonus.type,
    reverter: bonus.reverter,
    icon: bonus.icon,
    efeito,
    timeoutId,
    expiresIn,
  }
  // Adiciona na array de bonus ativos
  boostsActive.push(bonusActive)

  startMatrix(bonus.id, bonus.type, expiresIn)

  const div = document.createElement("div")
  div.className = `boost cooldown`
  div.setAttribute('data-tooltipId', bonus.id)
  div.dataset.id = bonus.id // Coloca um data-set para facilitar a localização dessa div
  div.style.backgroundImage = `url('/static/assets/${bonus.icon}')` // Coloca dire
  div.style.setProperty('--time', `${bonus.duracao}s`) // Coloca uma variável para o CSS saber o tempo da animação
  addSafeTouchListener(div, () => {
    showMobileTooltip('bn', bonusActive)
    playSound('/static/assets/sounds/open.ogg', .4)
  })

  boostsContainer.appendChild(div) // Adiciona ao container dos boosts
}

// Remove o bonus do café
function removeBoost(id) {
  const index = boostsActive.findIndex(b => b.id === id)
  if (index !== -1) {
    const boost = boostsActive[index]
    if (boost.reverter) boost.reverter() // Desfaz o efeito
    boostsActive.splice(index, 1) // Retira o boost da lista

    const boostDiv = document.querySelector(`[data-id="${id}"]`) // Pega a div com o boost ativo
    stopMatrix(id) // Para com a respectiva matrix
    boostDiv.remove()
    showTooltip()
  }
}

// FIM DO EVENTO DO CAFÉ

// FUNÇÃO EFEITO MATRIX (https://github.com/resolvendobug/efeito-matrix)

// Armazena todas os efeitos MATRIX ativos (id e elemento DOM)
const matrices = {}

const startMatrix = (id = 0, type = 'matrix', expiresIn) => {
  if (matrices[id]) return

  if (!currentMusic) {
    setTimeout(() => {
      playMusic(`/static/assets/music/matrix.mp3`, .04, true)
    }, 200)
  }
  // Cria canvas
  const matricesLength = Object.values(matrices).length
  const canvas = document.createElement('canvas')
  canvas.id = `matrix-${id}`
  canvas.classList.add('matrix-canvas')
  canvas.style.zIndex = -100 + matricesLength
  document.body.appendChild(canvas)

  canvas.height = window.innerHeight
  canvas.width = 2000 // Se alguém tiver um monitor maior que isso...

  const ctx = canvas.getContext('2d')
  const texts = '0123456789'.split('')
  const fontSize = 16;
  const columns = canvas.width / fontSize
  const drops = Array.from({ length: columns }, () => 1)

  function drawMatrix(){
    ctx.fillStyle = type == 'matrix' ? '#00290a0d' : '#29000a0d'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = type == 'matrix' ? '#0F0' : '#F00'
    ctx.font = fontSize + 'px Doto';
    for (let i = 0; i < drops.length; i++){
        var text = texts[Math.floor(Math.random() * texts.length)]
        ctx.fillText(text, i * fontSize, drops[i]*fontSize)

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

  document.body.className = ''
  document.body.classList.add(type) // adiciona a classe em 'body' pra poder customizar os elementos
  matrices[id] = { canvas, interval, expiresIn, type }
}

const stopMatrix = (id) => {
  const matrix = matrices[id]
  if (!matrix) return

  clearInterval(matrix.interval)
  matrix.canvas.style.opacity = 0

  const type = boostsActive[boostsActive.length-1]?.type
  if (!type) stopMusic()
  document.body.classList.toggle('matrix', type === 'matrix')
  document.body.classList.toggle('evil', type === 'evil')
}

// FIM DA FUNÇÃO MATRIX

// INÍCIO FUNÇÃO DAS "SALSICHINHAS" (os códigos passando pela tela kk)

let currentIndentLevel = 0
let isFirstLine = true
let currentLineNumber = 1

const draculaColors = [
  '#ff79c6', // keyword
  '#f1fa8c', // string
  '#bd93f9', // number
  '#50fa7b', // function/variable
  '#8be9fd', // operator
  '#6272a4', // comment
];

function generateCodeLine(add = 1) {
  const wrapper = document.createElement("div")
  wrapper.className = 'code-line-wrapper'

  const lineNumber = document.createElement("div");
  lineNumber.className = 'line-number'
  lineNumber.textContent = currentLineNumber
  currentLineNumber += add

  const line = document.createElement("div")
  line.className = "code-line"

  if (isFirstLine) {
    currentIndentLevel = 0
    isFirstLine = false
  } else {
    // Atualiza o nível de identação com base na regra
    const weightedChange = [-1, -1, -1, 0, 0, 0, 1, 1]
    // const change = weightedChange[randomBetween(0, weightedChange.length-1)]
    const change = randomBetween(-1, 1);
    const newIndentLevel = currentIndentLevel + change
   
    // Garante que o novo nível é válido (0 a 3)
    currentIndentLevel = Math.max(0, Math.min(newIndentLevel, currentIndentLevel + 1, 3))
  }

  line.style.marginLeft = `calc(${String(currentLineNumber).length} * 0.41 * var(--fs) + 8px + ${currentIndentLevel} * 15px)`;

  // Quantidade de blocos aleatória
  const weightedBlockCounts = [3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 6, 6, 7, 7, 8, 9];
  const blockCount = weightedBlockCounts[randomBetween(0, weightedBlockCounts.length-1)]

  for (let i = 0; i < blockCount; i++) {
    const block = document.createElement("div")
    block.className = "code-block"

    // Largura aleatória 
    const width = randomBetween(4, 15)
    block.style.width = `${width}%`

    const color = draculaColors[Math.floor(Math.random() * draculaColors.length)]
    block.style.backgroundColor = color

    line.appendChild(block);
  }

  wrapper.appendChild(lineNumber);
  wrapper.appendChild(line);
  computerCodelinesContainer.appendChild(wrapper);

  // Reduz o número máximo de linhas visíveis
  if (computerCodelinesContainer.children.length > 30) {
    computerCodelinesContainer.removeChild(computerCodelinesContainer.children[0]);
  }
}

// FIM DA FUNÇÃO DAS SALSICHINHAS

// INICIO LINHAS POR SEGUNDO (FINALMENTE)

function custoAtual(el) {
    return Math.floor(el.custoBase * Math.pow(1.15, el.comprados))
}

const timing = 0.1

function gerarPassivamente() {
  let totalGerado = 0;

  estruturas.forEach(estrutura => {
    const geradoPorEssa = estrutura.ls * estrutura.comprados * lsMultiplier * timing
    estrutura.gerado += geradoPorEssa
    totalGerado += geradoPorEssa
  })


  if (totalGerado == 0) return
  lsTOT = totalGerado / timing
  lsPersecondContainer.textContent = `por segundo: ${formatarNumero(lsTOT.toFixed(1))}` 
  refresh(totalGerado)
}

setInterval(gerarPassivamente, 1000*timing)

// FIM FUNÇÃO LINHAS POR SEGUNDO

// INÍCIO FUNÇÃO SOM

const soundCache = {};            // Guarda os objetos Audio já carregados
const soundInstances = [];        // Instâncias de áudio para tocar simultaneamente
const MAX_INSTANCES = 12;         // Número máximo de instâncias para reutilização
let instanceIndex = 0;            // Índice da instância atual

// Cria instâncias pré-carregadas
for (let i = 0; i < MAX_INSTANCES; i++) {
  soundInstances.push(new Audio());
}

function playSound(url, vol = 1) {
  const globalVolume = 1; // ou use Game.volume / Config.volume se quiser configurar

  // Se o volume estiver zero ou global mutado, sai
  if (vol <= 0 || globalVolume <= 0) return;

  // Cacheia o som se ainda não foi carregado
  if (!soundCache[url]) {
    const audio = new Audio(url);
    soundCache[url] = audio;

    // Quando terminar de carregar, toca o som
    audio.addEventListener('canplaythrough', () => {
      playSound(url, vol); // Rechama quando estiver pronto
    }, { once: true });

    return;
  }

  const audioInstance = soundInstances[instanceIndex];
  instanceIndex = (instanceIndex + 1) % MAX_INSTANCES;

  audioInstance.src = soundCache[url].src;
  audioInstance.volume = Math.pow(vol * globalVolume, 2); // curva mais natural

  try {
    audioInstance.play();
  } catch (e) {
    console.warn("Erro ao tocar som:", e);
  }
}

function playMusic(url, finalVolume = 1, loop = true, fadeDuration = 2000) {
  if (currentMusic) {
    stopMusic(true); // interrompe a música atual com fade-out
  }

  const audio = new Audio(url);
  audio.loop = loop;
  audio.volume = 0;

  audio.play().then(() => {
    currentMusic = audio;

    // Fade-in
    const steps = 20;
    const interval = fadeDuration / steps;
    let currentStep = 0;

    fadeInInterval = setInterval(() => {
      currentStep++;
      const newVolume = finalVolume * (currentStep / steps);
      audio.volume = Math.min(finalVolume, newVolume);

      if (currentStep >= steps) {
        clearInterval(fadeInInterval);
      }
    }, interval);
  }).catch((err) => {
    console.error("Erro ao tocar música:", err);
  });
}

function stopMusic(useFade = true, fadeDuration = 1000) {
  if (!currentMusic) return;

  if (fadeInInterval) clearInterval(fadeInInterval);
  if (fadeOutInterval) clearInterval(fadeOutInterval);

  if (useFade) {
    const steps = 20;
    const interval = fadeDuration / steps;
    let currentStep = 0;
    const startVolume = currentMusic.volume;

    fadeOutInterval = setInterval(() => {
      currentStep++;
      const newVolume = startVolume * (1 - currentStep / steps);
      currentMusic.volume = Math.max(0, newVolume);

      if (currentStep >= steps) {
        clearInterval(fadeOutInterval);
        currentMusic.pause();
        currentMusic = null;
      }
    }, interval);
  } else {
    currentMusic.pause();
    currentMusic = null;
  }
}

// FIM DA FUNÇÃO SOM

// INICIO DO MODAL

modalContainer.addEventListener("transitionend", (e) => {
    if (e.propertyName === "opacity" && !modalContainer.classList.contains("disabled")) modalContainer.classList.add('disabled')
})

function closeModal() {
  if (modalInput.value == '') {
    modalContainer.classList.add('disabled')
  } else {
    modalInput.value = ''
    modalContainer.style.opacity = 0
  }
}

modalForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const inputName = modalInput.value

  const event = new CustomEvent("submitName", {
    detail: { newName: inputName }
  });

  window.dispatchEvent(event); // Notifica outros scripts
})

window.addEventListener('submitError', (e) => {
  if(modalContainer.classList.contains("disabled")) modalContainer.classList.remove("disabled");
  modalErrorContainer.textContent = e.detail.error;
  modalInput.value = ''
})

window.addEventListener('submitSucess', (e) => {
  company = e.detail.companyName;
  companyName.textContent = company;
  modalErrorMessage = ''
  closeModal()
  startGame()
  console.log(e)
  if (e.detail.hasToRenderLb) requestLeaderboard()
})

// VERIFICAR SE A PÁGINA FOI CARREGADA
//Seta o data no localStorage
function setData(){
  if (debug) return

  // verifica as upgrades compradas e armazenas
  let listPatchUpgrades = [];
  upgrades.forEach((element) => {
    if(element.purchased) listPatchUpgrades.push(element.id)
  })
  
  // verifica as estruturas compradas e armazenas
  let listPatchStructures = [];
  estruturas.forEach((element)=>{
    if(element.comprados > 0) listPatchStructures.push({
      "id": element.id,
      "comprados": element.comprados,
      "gerado": element.gerado,
    });
  })

  localStorage.setItem("upgrades", JSON.stringify({salve: listPatchUpgrades}));
  localStorage.setItem("estruturas", JSON.stringify({salve: listPatchStructures}));
}

// Toda vez que atualizar a página, ele atualiza os dados
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'hidden' && !!company) {
    atualizarPontos(pontos)
    setData()
  }
});

// Detectar o usuário recarregando a página no mobile
let touchStartY = 0;

document.addEventListener('touchstart', e => {
  touchStartY = e.touches[0].clientY;
}, { passive: false });

document.addEventListener('touchmove', e => {
  const touchY = e.touches[0].clientY;
  const diff = touchY - touchStartY;
  if (diff > 50 && window.scrollY === 0) {
    atualizarPontos(pontos)
    setData()
    // aqui você pode executar lógica antes de chamar reload
  }
}, { passive: false });

// FUNÇÕES ESSENCIAIS

renderEstruturas()

function startGame() {
  gameInterval = setInterval(() =>{
    setData();
    atualizarPontos(pontos);
    requestLeaderboard()
  }, 1000 * 5);

  setTimeout(() => {
    coffeeInterval = setInterval(() => {
      if (Math.random() < coffeeProb) spawnCoffe()
    }, 1000)
  }, 1000 * 15)
}

function endGame() {
  gameInterval = null
  coffeeInterval = null
}

function reset(lsToo, cookiesToo) {
  debug = true
  localStorage.removeItem('upgrades')
  localStorage.removeItem('estruturas')
  if (lsToo) {
    refresh(-pontos)
    atualizarPontos(pontos)
  }
  if (cookiesToo) {
    document.cookie.split(";").forEach(cookie => {
      const nome = cookie.split("=")[0].trim()
      document.cookie = `${nome}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/`
    })
  }

  location.reload()
}