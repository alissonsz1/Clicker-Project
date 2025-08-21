// Upgrades "place holder" só para o código funcionar
const upgrades = [
  {
    nome: "Mouse gamer",
    custo: 200000,
    descricao: 'Ninguém sabe pra que servem todos esses botões, mas eles estão lá.',
    funcao: 'Aumenta geração de LpS em 5%.',

    icon: 'mouse.webp',
    // icon: 'placeholder.webp',
    efeito: () => lpsMultiplier *= 1.05,
    // efeito: () => boost *= 2,
  },
  {
    nome: "Mousepad ergonômico",
    custo: 1000000,
    descricao: 'Previne você de ter uma tendinite (e ainda vem com um LED maneiro).',
    funcao: 'Aumenta geração de LpS em 5%.',
    icon: 'mousepad.webp',
    // icon: 'placeholder.webp',
    efeito: () => lpsMultiplier *= 1.05,
  },
  {
    nome: "Teclado Mecânico RGB",
    custo: 2000000,
    descricao: 'Faz um barulho gostosinho ao teclar e possui mais de 16M de cores para você testar. Uau!',
    funcao: 'Aumenta geração de LpS em 5%.',
    icon: 'teclado.webp',
    // icon: 'placeholder.webp',
    efeito: () => lpsMultiplier *= 1.05,
  },
  {
    nome: "HUB USB",
    custo: 10000000,
    descricao: 'Organiza (ou pelo menos tenta) o teu emaranhado de cabos e fios.',
    funcao: 'Aumenta geração de LpS em 5%.',
    icon: 'usb.webp',
    // icon: 'placeholder.webp',
    efeito: () => lpsMultiplier *= 1.05,
  },
  {
    nome: "Fone Gamer",
    custo: 20000000,
    descricao: 'Abafa tudo: os cachorros latindo, a obra do vizinho e teus familiares te chamando.',
    funcao: 'Aumenta geração de LpS em 5%.',
    icon: 'fone.webp',
    // icon: 'placeholder.webp',
    efeito: () => lpsMultiplier *= 1.05,
  },
  {
    nome: "Cadeira Gamer",
    custo: 100000000,
    descricao: 'Melhora teu conforto e transforma tua coluna lentamente em uma espiral.',
    funcao: 'Aumenta geração de LpS em 5%.',
    icon: 'cadeira.webp',
    // icon: 'placeholder.webp',
    efeito: () => lpsMultiplier *= 1.05,
  },
  {
    nome: "PENDRIVE de 2TB",
    custo: 1000000000,
    descricao: 'Por algum motivo, diz que já está 97% cheio...',
    funcao: 'Aumenta geração de LpS em 5%.',
    icon: 'pendrive.webp',
    // icon: 'placeholder.webp',
    efeito: () => lpsMultiplier *= 1.05,
  },
  {
    nome: "SSD de última geração",
    custo: 2000000000,
    descricao: 'Faz milagres quando tudo que você possui é uma placa integrada.',
    funcao: 'Aumenta geração de LpS em 5%.',
    icon: 'ssd.webp',
    // icon: 'placeholder.webp',
    efeito: () => lpsMultiplier *= 1.05,
  },
  {
    nome: "Placa de vídeo",
    custo: 10000000000,
    descricao: 'Uma RTX 5090 só pra assistir tutoriais em 8K!',
    funcao: 'Aumenta geração de LpS em 5%',
    icon: 'gpu.webp',
    // icon: 'placeholder.webp',
    efeito: () => lpsMultiplier *= 1.05,
  },
  {
    nome: "Fibra óptica",
    custo: 20000000000,
    descricao: 'Chega de ping alto no lolzinho!',
    funcao: 'Aumenta geração de LpS em 5%.',
    icon: 'fibra.webp',
    // icon: 'placeholder.webp',
    efeito: () => lpsMultiplier *= 1.05,
  },
  {
    nome: "Óculos VR",
    custo: 200000000000,
    descricao: 'Te leva para fora dessa realidade cruel, monótona e apática, repleta de violência e ódio gratuito, onde sonhos são sufocados, esmagados, triturados - e tua força de trabalho é sugada até tua última gota de suor. Um ótimo gadget!',
    funcao: 'Aumenta geração de LpS em 5%.',
    icon: 'vr.webp',
    // icon: 'placeholder.webp',
    efeito: () => lpsMultiplier *= 1.05,
  },
  {
    nome: "Energético",
    custo: 88888,
    descricao: 'Junte com café e veja os poderes incríveis da cafeína.',
    funcao: 'Aumenta as chances de se aparecer um cafézinho (lide com as consequências).',
    icon: 'monster.webp',
    // icon: 'placeholder.webp',
    efeito: () => {
      coffeeProb *= 1.5
      bonusList.filter(b => b.type == 'evil').forEach(b => b.unlocked = true)
    },
  },
  {
    nome: "Cafeteira elétrica",
    custo: 8888888,
    descricao: 'Teus cafés mais rápidos e mais gostosos!',
    funcao: 'Aumenta as chances de se aparecer um cafézinho.',
    icon: 'cafeteira.webp',
    // icon: 'placeholder.webp',
    efeito: () => coffeeProb *= 1.5,
  },
  {
    nome: "Frigobar",
    custo: 888888888,
    descricao: 'Menos idas à cozinha, mais linhas de código.',
    funcao: 'Aumenta as chances de se aparecer um cafézinho.',
    icon: 'frigobar.webp',
    // icon: 'placeholder.webp',
    efeito: () => coffeeProb *= 1.5,
  },
  {
    nome: "Certificado Online",
    custo: 100,
    descricao: 'Aumenta exponencialmente suas chances de arranjar um emprego - Obrigado, Guanabara!',
    funcao: 'Cada clique gera o dobro de linhas.',
    icon: 'certificado.webp',
    // icon: 'placeholder.webp',
    efeito: () => boost *= 1.5,
  },
  {
    nome: "Calculadora científica",
    custo: 500,
    descricao: 'Te ajuda com os cálculos que o professor jura que são triviais.',
    funcao: 'Cada clique gera o dobro de linhas.',
    icon: 'calculadora.webp',
    // icon: 'placeholder.webp',
    efeito: () => boost *= 2,
  },
  {
    nome: "Livro de Cálculo",
    custo: 10000,
    descricao: 'Previne você de zerar quatro provas seguidas de Cálculo I (acredite, é possível).',
    funcao: 'Cada clique gera o dobro de linhas.',
    icon: 'livro.webp',
    // icon: 'placeholder.webp',
    efeito: () => boost *= 2,
  },
  {
    nome: "Placa gamer",
    custo: 50000,
    descricao: 'Impede teu irmão caçula de perturbar teu foco sagrado.',
    funcao: '+1% das suas LpS por clique.',
    icon: 'placa.webp',
    // icon: 'placeholder.webp',
    efeito: () => onClickEffects.push(() => lpsTOT * 0.01),
  },
  {
    nome: "Ventilador portátil",
    custo: 5000000,
    descricao: 'Para esfriar tua cabeça (e evitar um burnout).',
    funcao: '+1% das suas LpS por clique.',
    icon: 'ventilador.webp',
    // icon: 'placeholder.webp',
    efeito: () => onClickEffects.push(() => lpsTOT * 0.01),
  },
  {
    nome: "Gatinho fofo",
    custo: 500000000,
    descricao: 'Meoow',
    funcao: '+1% das suas LpS por clique.',
    icon: 'gatinho.webp',
    // icon: 'placeholder.webp',
    efeito: () => onClickEffects.push(() => lpsTOT * 0.01),
  },
  {
    nome: "Bot de Commit",
    custo: 100000,
    descricao: 'feat: lê e commita com base nos teus pensamentos.',
    funcao: 'Cada clique gera +0.5 linha de código para cada construção possuída',
    icon: 'commitbot.webp',
    // icon: 'placeholder.webp',
    efeito: () => onClickEffects.push(() => estruturas.reduce((sum, obj) => sum + obj.comprados, 0) * 0.5 * estruturaMultiplier),
  },
  {
    nome: "ChatGPT Licenciado",
    custo: 100000000,
    descricao: 'Agora com 5% menos alucinações.',
    funcao: 'Multiplica o ganho do Bot de Commit por 10',
    icon: 'chatgpt.webp',
    // icon: 'placeholder.webp',
    efeito: () => estruturaMultiplier *= 10,
  },
  {
    nome: "Cubo mágico",
    custo: 43252003,
    descricao: 'Você sabia que existem mais combinações possíveis em um cubo mágico do que átomos no universo? Pois é, na verdade é mentira...',
    funcao: 'Cada clique passa a ter uma chance mínima de fazer surgir um café',
    icon: 'cubo.webp',
    // icon: 'placeholder.webp',
    efeito: () => onClickEffects.push(() => {
      const chance = 0.01
      if (Math.random() < chance) spawnCoffee()
      return 0
    }),
  },
  {
    nome: "Stalker cibernética",
    custo: 802007,
    descricao: 'Receba instantaneamente o follow de uma garota que usa foto de dinossauro, luta boxe, desenha extremamente bem, ama patos e é terrivelmente boa em tudo (e se apaixone perdidamente por ela).',
    funcao: 'Clicar consecutivamente aumenta o multiplicador de cliques',
    icon: 'carta.webp',
    // icon: 'placeholder.webp',
    efeito: () => hasCombo = true,
  },
  {
    nome: "Extensão Caça-Cupom",
    custo: 999999,
    descricao: 'Mergulha nos cantos mais obscuros da internet em busca dos melhores cupons de desconto.',
    funcao: 'Reduz o preço de todas as estruturas em 10%',
    icon: 'preco.webp',
    // icon: 'placeholder.webp',
    efeito: () => {
      estruturas.forEach(e => e.custoBase *= 0.9)
    },
  },
].map((up, i) => ({...up, id: `up${i+1}`, unlocked: false, purchased: false})).sort((a, b) => a.custo - b.custo)

// Estruturas "place holder" só para o código funcionar
const estruturas = [
  { 
    nome: "LED", 
    plural: "LEDs",
    custoBase: 15, 
    comprados: 0,
    icon: 'led.webp',
    descricao: 'Não aumenta teu desempenho, mas tua moral sim.',
    lps: 0.5,
    gerado: 0,
  },
  { 
    nome: "Monitor", 
    plural: "Monitores",
    custoBase: 100, 
    comprados: 0,
    icon: 'monitor.webp',
    descricao: 'Telas nunca são demais.',
    lps: 5,
    gerado: 0,
  },
  { 
    nome: "IDE", 
    plural: "IDEs",
    custoBase: 1100, 
    comprados: 0,
    icon: 'ide.webp',
    descricao: 'VS Code? Eclipse? Sublime? IntelliJ IDEA? Por que não TODOS eles?',
    lps: 40,
    gerado: 0,
  },
  { 
    nome: "Clippy", 
    plural: "Clippies",
    custoBase: 12000, 
    comprados: 0,
    icon: 'clippy.webp',
    descricao: 'Olá! Eu sou o Clippy, teu assistente. Gostaria de uma ajudinha?',
    lps: 250,
    gerado: 0,
  },
  { 
    nome: "DEV Júnior", 
    plural: "DEVs Júniores",
    custoBase: 130000, 
    comprados: 0,
    icon: 'dev_jr.webp',
    descricao: 'Não faz ideia do que está fazendo, mas ele tenta... Tadinho.',
    lps: 1500,
    gerado: 0,
  },
  { 
    nome: "Servidor local", 
    plural: "Servidores locais",
    custoBase: 1400000,
    comprados: 0,
    icon: 'servidor.webp',
    descricao: 'Quando teu PC não aguenta mais, você terceiriza.',
    lps: 8000,
    gerado: 0,
  },
  { 
    nome: "DEV Pleno", 
    plural: "DEVs Plenos",
    custoBase: 20000000, 
    comprados: 0,
    icon: 'dev_pleno.webp',
    descricao: 'DEV Júnior+ com uma pitada de independência',
    lps: 35000,
    gerado: 0,
  },
  { 
    nome: "Cloud",
    plural: "Clouds",
    custoBase: 330000000, 
    comprados: 0,
    icon: 'cloud.webp',
    descricao: 'Teus códigos agora suspensos no limbo da internet',
    lps: 200000,
    gerado: 0,
  },
  { 
    nome: "DEV Sênior", 
    plural: "DEVs Sêniores",
    custoBase: 5100000000, 
    comprados: 0,
    icon: 'dev_senior.webp',
    descricao: 'Codifica em silêncio absoluto e surge apenas para resolver os bugs alheios.',
    lps: 1100000,
    gerado: 0,
  },
    { 
    nome: "Data Center", 
    plural: "Data Centers",
    custoBase: 75000000000, 
    comprados: 0,
    icon: 'data_center.webp',
    descricao: 'Armazena zettabytes de memória! (e teus dados mais obscuros).',
    lps: 7700000,
    gerado: 0,
  },
  { 
    nome: "IA ultra-generativa", 
    plural: "IAs ultra-generativas",
    custoBase: 1000000000000, 
    comprados: 0,
    icon: 'ia.webp',
    descricao: 'É tipo um DEV, só que mais rápido, mais esperto, mais eficaz, mais sagaz, mais sucinto, mais... Deixa pra lá.',
    lps: 45000000,
    gerado: 0,
  },
  { 
    nome: "PC quântico", 
    plural: "PCs quânticos",
    custoBase: 14000000000000, 
    comprados: 0,
    icon: 'quantico.webp',
    descricao: 'Resolve os bugs antes mesmo deles surgirem.',
    lps: 230000000,
    gerado: 0,
  },

].map((es, i) => ({id: `es${i+1}`,...es})).sort((a, b) => a.custoBase - b.custoBase)

// Lista com os possíveis bônus do café
const bonusList = [
  {
    id: 'bn1',
    nome: "Cafézinho",
    descricao: "15% das linhas + 13",
    peso: 100,
    unlocked: true,
    get efeito() {
      const ganho = Math.floor(pontos * 0.15 + 13);
      refresh(ganho) // Atualiza os pontos na tela
      return `Ganhou ${formatarNumero(ganho, true)} linhas!`
    },
  },
  {
    id: 'bn2',
    nome: "Café Docinho",
    descricao: "Uma colher de açúcar + uma pitada de amor materno",
    type: 'matrix',
    duracao: 30,
    peso: 30,
    icon: 'cafe_docinho.webp',
    unlocked: true,
    get efeito() {
      lpsMultiplier *= 7;
      return `LpS x7 por ${this.duracao} segundos!`
    },
    reverter: () => lpsMultiplier /= 7,
  },
  {
    id: 'bn3',
    nome: "Café Perfeito",
    descricao: "Temperatura ideal, sabor equilibrado e um aroma leve e perfumado. Perfeito!",
    type: 'matrix',
    duracao: 15,
    peso: 4,
    icon: 'cafe_perfeito.webp',
    unlocked: true,
    get efeito() {
      lpsMultiplier *= 777;
      return `LpS x777 por ${this.duracao} segundos!!!`
    },
    reverter: () => lpsMultiplier /= 777,
  },
  {
    id: 'bn4',
    nome: "Café Divino",
    descricao: "Preparado diretamente pelos deuses olimpianos. O néctar supremo, o elixir celestial, o suprassumo do prazer!",
    type: 'matrix',
    duracao: 10,
    peso: 1,
    icon: 'cafe_divino.webp',
    unlocked: true,
    get efeito() {
      lpsMultiplier *= 1111;
      return `LpS x1111 por ${this.duracao} segundos!!!`
    },
    reverter: () => lpsMultiplier /= 1111,
  },
  {
    id: 'bn5',
    nome: "Tempestade de Café",
    peso: 5,
    unlocked: true,
    get efeito() {
        var coffeeStorm = setInterval(() => {
            spawnCoffee('bn6', 500)
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
    nome: "Café Expresso",
    descricao: "5 min das LpS!",
    unlocked: true,
    get efeito() {
        const ganho = Math.floor(lpsTOT * 60 * 5);
        refresh(ganho)
        return `Ganhou ${formatarNumero(ganho, true)} linhas!`
    },
  },
  {
    id: 'bn7',
    nome: 'Café Vencido',
    descricao: '',
    type: 'evil',
    descricao: 'Não faz nada...',
    peso: 2,
    unlocked: false,
    get efeito() {
      return 'Não faz nada... Absolutamente nada.'
    },
  },
  {
    id: 'bn8',
    nome: 'Café Estragado',
        descricao: '',
    type: 'evil',
    icon: 'cafe_estragado.webp',
    peso: 10,
    duracao: 30,
    unlocked: false,
    get efeito() {
      lpsMultiplier *= .5
      coffeeProb *= .1
      return `LpS x0.5 por ${this.duracao} segundos...`
    },
    reverter: () => {
      lpsMultiplier /= .5
      coffeeProb /= .1
    },
  },
    {
    id: 'bn9',
    nome: 'Café Demoníaco',
    type: 'evil',
    icon: 'cafe_demoniaco.webp',
    peso: 2,
    duracao: 6,
    unlocked: false,
    get efeito() {
      lpsMultiplier *= 666
      return `LpS x666 por ${this.duracao} segundos...`
    },
    reverter: () => lpsMultiplier /= 666,
  }
]

// Onde serão armazenados todos os efeitos aplicados aos cliques
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

function countEstruturas() {
  return estruturas.reduce((sum, obj) => sum + obj.comprados, 0)
}

const protocol = window.location.protocol === "https:" ? "wss://" : "ws://";
const socket = new WebSocket(protocol + window.location.host + "/ws/leaderboard/");
const csrfToken = window.csrfToken

// Variaveis
let id = -1
let company = ''
let pontos = 0 // Linhas de código
let boost = 1 // Incrementa os CLIQUES (ou TECLADADAS no futuro)
let lpsTOT = 0 // Quantas LpS estão sendo geradas
let lpsMultiplier = 1 // Multiplicador para as LpS
let bulkBuy = 1 // Quantas estruturas serão comprados por vez (x1, x10, x100)
let comboMultiplier = 1
let estruturaMultiplier = 1
let hasCombo = false // Se possui o upgrade para gerar o combo de cliques
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
let comboTimeout = null // Variável que controla o tempo do combo de cliques
let fadeOutInterval = null // Variável que controla o fade out da música
let fadeInInterval = null // Variável que controla o fade in da música
let gameInterval = null // Variável que controla o intervalo do jogo (define se deve enviar data, atualizar pontos, etc)
let coffeeInterval = null // Variável que controla o intervalo de spawn dos cafés
let mobileTooltipItem = {type: '', item: null} // Guarda o item que está sendo mostrado no tooltip mobile
let scrollTabs = {estruturas: 0, upgrades: 0}
let defaultStats = {
  totalClicks: 0,
  handmadeLines: 0,
  totalCoffees: 0,
}
let lpsHighest = 0;
let statusPage;
let lbContentContainerStyle;


const button = document.getElementById('click_button') // Teclado CLICÁVEL
const keyboard = document.getElementById('computer-keyboard')
const display = document.getElementById('pontos') // Display das linhas de código
const buttonsHeader = document.querySelectorAll(".button-header") // Botões para mudar de aba
const contentList = document.querySelector('.content-list') // Lista de items
const containerContent = document.querySelector('.container-content')
const coffeeContainer = document.getElementById('coffee-container') // Container dos cafés
const boostsContainer = document.querySelector('.container-boosts') // Container dos boosts
const clicksContainer = document.querySelector('.clicks-container') // Container que armazena os pequenos incrementos dos cliques
const tooltip = document.querySelector('.tooltip') // Container que armazenas as descrições quando passa o mouse por cima
const mobileTooltip = document.querySelector('.mobile-tooltip') 
const companyNameContainer = document.querySelector('.company-text')
const leaderboardWrapperContainer = document.querySelector('.leaderboard-wrapper')
const lbContentContainer = document.querySelector('.leaderboard-content')
const lpsPersecondContainer = document.querySelector('.lps-persecond')
const computerCodelinesContainer = document.querySelector(".computer-codelines--wrapper");
const modalContainer = document.querySelector('.modal')
const modalInput = document.querySelector('.modal-input')
const modalForm = document.querySelector('.modal-form') 
const modalErrorContainer = document.querySelector('.modal-error') // Container de erro do modal (nome inválido, longo ou já existente)
const bulkButtons = document.querySelectorAll('.bulk') // Botões de compra em massa (x1, x10, x100)
const tap = document.querySelector('.tap') // Ícone que aparece quando clica no botão
const statsContainer = document.querySelector('.stats');
const loadingScreen = document.querySelector('.loading-screen');


// PRELOAD (CACHE)
const iconCache = {}

// Função que pré-carrega os ícones das estruturas e upgrades
// Isso ajuda a evitar o carregamento lento quando os ícones são usados pela primeira vez
function preloadIcons(iconList) {
  const promises = iconList.map(icon => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = `/static/assets/icons/${icon}`;
      img.onload = () => resolve({ icon, status: 'loaded' });
      img.onerror = () => reject({ icon, status: 'error' });
      iconCache[icon] = img;
    });
  });

  return Promise.all(promises);
}

// Função que define a imagem de um elemento img com base no ícone, procurando no cache
function setImg(img, icon) {
  const newSrc = `/static/assets/icons/${icon}`

  if (img.src !== location.origin + newSrc) {
    if (iconCache[icon]) {
      img.src = iconCache[icon].src // já foi carregado
    } else {
      img.src = newSrc // fallback, se não estiver no cache
    }
  }
}

const images = estruturas.map(e => e.icon).concat(upgrades.map(u => u.icon)).concat(bonusList.filter(b => b.icon).map(b => b.icon))

const preloadPromise = preloadIcons(images)

function closeLoading() {
  if(statusPage != "pause") loadingScreen.classList.add('invisible');
}

// FIM PRELOAD

// ESTRUTURAS QUE MANDA EVENTOS

//Atualização o arquivo em outros arquivos js
function atualizarPontos(novoValor) {
  // Dispara um evento personalizado com o novo valor

  const newPoints = Number(novoValor).toFixed(0);
  const newHighestPoint = Number(lpsHighest).toFixed(0);  

  const evento = new CustomEvent("pontosAtualizados", {
    detail: { "newPoints": newPoints, "newHighestPoint": newHighestPoint }
  })

  window.dispatchEvent(evento); // Notifica outros scripts
}

// LEADERBOARD

addSafeTouchListener(leaderboardWrapperContainer, toggleMobileLeaderboard)

lbContentContainer.addEventListener("transitionend", (e) => {
  if (e.propertyName === "opacity" && getComputedStyle(lbContentContainer).opacity != 1) {
    leaderboardWrapperContainer.classList.remove('enabled')
    console.log("AQUI 0");
  }
  console.log("AQUI 1");
})

if (!window.matchMedia('(pointer: coarse)').matches) {
  leaderboardWrapperContainer.addEventListener("transitionend", (e) => {
    if (e.propertyName === "transform" && leaderboardWrapperContainer.classList.contains('out')) {
        leaderboardWrapperContainer.classList.remove('visible')
        leaderboardWrapperContainer.classList.remove('out')
    }
  })
}

leaderboardWrapperContainer.addEventListener('mouseenter', (e) => {
  if (window.matchMedia('(pointer: coarse)').matches) return
  leaderboardWrapperContainer.classList.add('visible')
  leaderboardWrapperContainer.classList.remove('out')
  playSound(`/static/assets/sounds/lb-in.mp3`, .4)
})

leaderboardWrapperContainer.addEventListener('mouseleave', (e) => {
  console.log("AQUI 3");
  if (window.matchMedia('(pointer: coarse)').matches) return
    leaderboardWrapperContainer.classList.add('out')
  playSound(`/static/assets/sounds/lb-out.mp3`, .4)
})

function toggleMobileLeaderboard(e) {
  console.log("AQUI 4");
  const touchedContent = e.target.closest('.leaderboard-content')
  if (touchedContent) return

  const isEnabled = leaderboardWrapperContainer.classList.contains('enabled')

  if (isEnabled) {
    lbContentContainer.style.opacity = 0
    leaderboardWrapperContainer.style.background = 'transparent'
    playSound(`/static/assets/sounds/lb-out.mp3`, .4)

  } else {
    leaderboardWrapperContainer.classList.toggle('enabled')
    void lbContentContainer.offsetWidth
    lbContentContainer.style.opacity = 1
    leaderboardWrapperContainer.style.background = 'var(--bs)'
    playSound(`/static/assets/sounds/lb-in.mp3`, .4)
  }
}

window.addEventListener('dispatchLeaderboard', (e) => {
  if(statusPage != "pause") return renderLeaderboard(e.detail.lb);

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
      <span class="lb-name">${jogador.companyName}${isYou ? ' <strong style="font-size: .7em">(VOCÊ)</strong>' : ''}</span>
      <span class="lb-number">${formatarNumero(jogador.lsCount)}</span>
    `

    container.appendChild(li);

    li.style.transform = `translateY(2000%)`
    void li.offsetWidth
    li.style.transform = `translateY(${index*100}%)`
  })
}

// Socket para parar o jogo
socket.onmessage = (e) => {
  lbContentContainerStyle = lbContentContainer.style;
  // ESTRUTURA = {id, companyName, lsCount}
  statusPage = JSON.parse(e.data).status;
  if(statusPage == "pause"){
    loadingScreen.classList.remove('invisible');
    let newDiv = document.createElement("div");
    newDiv.className = "leaderboardEnd";
    newDiv.id = "leaderboardEnd";
    newDiv.style.display = "fixed";
    newDiv.appendChild(lbContentContainer);
    loadingScreen.replaceChildren(newDiv)
    lbContentContainer.style.fontSize = "1.5em";
    newDiv.style.width = "95%";
    newDiv.style.height = "95%";
    void lbContentContainer.offsetWidth;
    lbContentContainer.style.opacity = 1;
    lbContentContainer.style.display = "block";
    lbContentContainer.style.visibility = "visible";
    lbContentContainer.style.maxWidth = "100%";
    lbContentContainer.style.maxHeight = "100%";
    lbContentContainer.style.height = "560px";
    lbContentContainer.style.margin = "auto";
    lbContentContainer.style.border = "var(--c1b)";
    lbContentContainer.style.backgroundColor = "var(--c3)";
    void lbContentContainer.offsetWidth;

    let resume = document.createElement("button");
    resume.className = "resume";
    resume.id = "resume";
    resume.textContent = "VOLTAR";
    loadingScreen.appendChild(resume);

    document.querySelector(".resume").addEventListener("click", resumeGame);

    
  } else {
    loadingScreen.classList.add('invisible');
  }
}

// FIM DO LEADERBOARD

// INÍCIO DOS STATS

function updateStat(key, value) {
  const stats = defaultStats
  
  if (Array.isArray(stats[key])) {
    // Arrays (como lista de upgrades)
    if (!stats[key].includes(value)) {
      stats[key].push(value);
    }
  } else if (typeof stats[key] === 'number') {
    // Números
    stats[key] += value;
  } else {
    // Outros tipos (boolean, string, etc.)
    stats[key] = value;
  }
}

const itemsModal = document.querySelector('.items-modal')

itemsModal.addEventListener('click', (e) => {
  const hasTouchedContent = e.target.closest('.items-modal--content')
  if (hasTouchedContent) return
  itemsModal.classList.add('closing')
  toggleStats()
})

itemsModal.addEventListener("transitionend", (e) => {
    if (e.propertyName === "opacity" && itemsModal.classList.contains("closing")) {
      itemsModal.classList.remove('enabled')
      itemsModal.classList.remove('closing')
    }
  })

statsContainer.addEventListener('click', toggleStats)

function toggleStats() {
  const isEnabled = itemsModal.classList.contains('enabled')

  if (isEnabled) {
    itemsModal.style.opacity = 0
    itemsModal.classList.add('closing')
    playSound(`/static/assets/sounds/lb-out.mp3`, .4)
  } else {
    itemsModal.classList.toggle('enabled')
    itemsModal.classList.remove('closing')
    renderStats()
    void itemsModal.offsetWidth
    itemsModal.style.opacity = 1
    playSound(`/static/assets/sounds/lb-in.mp3`, .4)
  }
}

function renderStats() {
  function setText(el, txt) {
    el.querySelectorAll('span')[1].textContent = txt
  }

  const upgradesOwned = upgrades.filter(up => up.purchased)
  const upgradesOwnedCount = upgradesOwned.length
  const upgradesLength = upgrades.length

  setText(itemsModal.querySelector('.ct'), defaultStats.totalCoffees)
  setText(itemsModal.querySelector('.tt'), defaultStats.totalClicks)
  setText(itemsModal.querySelector('.lgm'), formatarNumero(defaultStats.handmadeLines.toFixed(0)))
  setText(itemsModal.querySelector('.mlps'), 'x'+formatarNumero(lpsMultiplier.toFixed(2)))
  setText(itemsModal.querySelector('.ec'), countEstruturas())
  setText(itemsModal.querySelector('.items-upgrades-owned'), `${upgradesOwnedCount}/${upgradesLength} (${Number(upgradesOwnedCount/upgradesLength*100).toFixed(1)}%)`)

  const itemUpgrades = itemsModal.querySelector('.item-upgrades--container')

  if (upgradesOwned.length == 0) {
    itemUpgrades.style.display = 'none'
    return
  }

  itemUpgrades.style.display = 'flex'

  upgradesOwned.forEach(up => {
      const id = `stats-upgrade-${up.id}`
      let upgrade = itemUpgrades.querySelector(`#${id}`)

      if (!upgrade) {
        upgrade = document.createElement('div')
        upgrade.className = 'stats-upgrades'
        upgrade.id = id
    
        upgrade.innerHTML = (`
          <span class="item-name">${up.nome}</span>
          <div class="item-icon--wrapper">
            <img class="item-icon"/>
          </div>
        `)

        itemUpgrades.appendChild(upgrade)

        upgrade.addEventListener('click', () => {
          showMobileTooltip('up', up)
        })
      }

      const img = upgrade.querySelector('.item-icon')
      setImg(img, up.icon)
  })

}

setScrollShadows(itemsModal.querySelector('.item-upgrades--container'))

// FIM DOS STATS

// Pega o nome do player
window.addEventListener("updateCompany", (e) => {
  company = e.detail.company
  companyName.textContent = company
  
})

// PEGA DO BACKEND TODOS OS DADOS DO PLAYER

window.addEventListener("dispatchPlayerData", (event) => {
  //Coleta os dados do player e coloca em variáveis e postam no index
  let loadingPlayer = event.detail.player
  company = loadingPlayer.companyName
  companyName.textContent = company

  lpsHighest = Number(loadingPlayer.lsHighest);

  const statsSaved = JSON.parse(localStorage.getItem('stats'))

  // Verifica quais estrutras e upgrades estão salvos e atualiza da lista principal
  listUpgrades = JSON.parse(localStorage.getItem("upgrades"))?.salve || []
  listStructures = JSON.parse(localStorage.getItem("estruturas"))?.salve || []

  if (statsSaved) defaultStats = statsSaved
  

  listUpgrades.forEach(item => {
    upgrades.forEach((upgrade, index) => {
      if (upgrade.id == item.id){
        upgrades[index].purchased = item.purchased
        upgrades[index].unlocked = item.unlocked
        if (item.purchased) upgrades[index].efeito()
      }
    })
  })

  listStructures.forEach(item => {
    estruturas.forEach((estrutura, index)=>{
      if (estrutura.id == item.id){
        estruturas[index].comprados = item.comprados
        estruturas[index].gerado = item.gerado
        estruturas[index].unlocked = true
      }
    })
  })



  refresh(loadingPlayer.lsCount, true)
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
function refresh(add, startPlayer = false) {
  valorAtual = pontos
  pontos = valorAtual + add;
  if(add > 0 && !startPlayer) lpsHighest += add;

  if (pontos != 0) document.title = `${formatarNumero(Math.floor(pontos), true)} linha${pontos > 1 ? 's' : ''} de código - Dev Clicker`
  checarDesbloqueios(pontos)
  animarContador(valorAtual)
  if (pontos !== 0) tap.classList.add('disabled')
  
  if (tabActive == 'Estruturas') renderEstruturas()
  else if (tabActive == 'Upgrades') renderUpgrades()

  if (!window.matchMedia('(pointer: coarse)').matches && getComputedStyle(tooltip).opacity == 1) showTooltip()
  else if (getComputedStyle(mobileTooltip).opacity == 1 && !close.classList.contains('closing')) {
    const {type, item} = mobileTooltipItem
    if (type !== 'es') return
    showMobileTooltip(type, item, false)
  }
}

// Anima os numerozinhos para eles subirem de pouco em pouco
function animarContador(valorInicial, duracao = 700) {
  const valorFinal = pontos
  const add = valorFinal - valorInicial

  if (Math.abs(add) == 1) {
    display.textContent = `${formatarNumero(pontos, true)} linha${pontos > 1 ? 's' : ''} de código`
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
    const progresso = Math.min(tempoDecorrido / (duracao || 1), 1) // entre 0 e 1
    const eased = ease(progresso) // aplica easing

    const valorInterpolado = Math.floor(valorInicial + range * eased)
    const valorFormatado = formatarNumero(valorInterpolado, true)

    display.textContent = `${valorFormatado} linha${valorInterpolado > 1 ? 's' : ''} de código`

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
function formatarNumero(valor, de = false) {
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
      return `${valorDividido.toFixed(3).replace('.', ',')} ${nome}${de ? ' de' : ''}`
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

  upgrades.forEach((upgrade, index) => {
    if (pontos >= upgrade.custo && !upgrade.unlocked) {
      notificacoes.upgrades.add(index)
      upgrade.unlocked = true
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

  if ((notificacoes.upgrades.size > 0 && tabActive != 'Upgrades') || (notificacoes.estruturas.size > 0 && tabActive != 'Estruturas')) playSound('/static/assets/sounds/not.mp3', .4)
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
  if (window.matchMedia('(pointer: coarse)').matches) return

  const coords = {
    x: e.pageX,
    y: e.pageY,
  }

  handleClick(coords)

})

button.addEventListener('touchstart', (e) => {
  const currentTouch = [...e.touches].at(-1)
  const coords = {
    x: currentTouch.pageX,
    y: currentTouch.pageY,
  }
  handleClick(coords)
})

function handleClick({x, y}) {
  const [toAdd, actualComboMultiplier] = onClick()

  updateStat('totalClicks', 1)
  updateStat('handmadeLines', toAdd)

  const click = document.createElement('div')
  const randomOffset = Math.random() * 8
  click.className = 'click'
  click.innerHTML = `<span>+${formatarNumero(toAdd.toFixed(1))}</span>${hasCombo ? ` <span class="combo">x${actualComboMultiplier.toFixed(1)}</span>` : ''}`
  click.style.left = `calc(${x}px + ${randomOffset}px)`
  click.style.top = `${y}px`
  clicksContainer.appendChild(click)
  void click.offsetHeight
  click.classList.add('fading-up')


  playSound(`/static/assets/sounds/k${randomBetween(1, 3)}.mp3`, .4)

  click.addEventListener("transitionend", (e) => {
    if (e.propertyName === "opacity" && click.classList.contains("fading-up")) click.remove()
  })
}

function onClick() {
  let toAdd = 0

  // Executa todos os efeitos extras adicionados por upgrades
  onClickEffects.forEach(fn => toAdd += fn())

  let actualCombo = comboMultiplier
  toAdd *= comboMultiplier

  if (hasCombo) {
    
    comboMultiplier = Math.min(2, comboMultiplier + .02)
    if (comboTimeout) clearTimeout(comboTimeout)
      
      comboTimeout = setTimeout(() => {
        comboTimeout = null
        comboMultiplier = 1
      }, 400)
  }
  
  refresh(toAdd);
  return [toAdd, actualCombo]
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
  if (window.matchMedia('(pointer: coarse)').matches 
      || !modalContainer.classList.contains('disabled')
      || itemsModal.classList.contains('enabled')
  ) return

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
    const custo = custoAtual(data)

    if (!tooltip.classList.contains('estrutura')) {
      tooltip.className = 'tooltip estrutura'
      tooltip.innerHTML = `
          <div class="tooltip-header">
            <div class="tooltip-header--left">
              <img class="tooltip-icon"/>
              <strong class="tooltip-name"></strong>
            </div>
            <span class="tooltip-price coin"></span>
          </div>
          <div class="tooltip-content">
            <span class="tooltip-description"></span>
          </div>
          <div class="tooltip-extra"></div>
      `
    }

    let extraInfo = ``

    if (data.unlocked && data.comprados > 0) {
      const gerando = (data.comprados*data.lps*lpsMultiplier).toFixed(1)
      extraInfo = `
          <ul>
            <li>cada ${data.nome} gera ${formatarNumero((data.lps * lpsMultiplier).toFixed(1), true)} LpS</li>
            <li>${data.comprados} ${data.comprados > 1 ? data.plural : data.nome} ${data.comprados > 1 ? 'estão' : 'está'} gerando ${formatarNumero(gerando, true)} LpS (${((gerando/(lpsTOT || 1))*100).toFixed(2)}%)</li>
            <li>${formatarNumero(Math.floor(data.gerado), true)} linhas geradas até agora</li>
          </ul>
      `
    }

    const img = tooltip.querySelector('.tooltip-icon')
    setImg(img, data.icon)
    img.classList.toggle('hidden', !data.unlocked)
    tooltip.querySelector('.tooltip-name').textContent = data.unlocked ? data.nome : '???'
    tooltip.querySelector('.tooltip-price').textContent = formatarNumero(custo)
    tooltip.querySelector('.tooltip-price').className = `tooltip-price coin ${pontos < custo ? 'high' : 'low'}`
    tooltip.querySelector('.tooltip-description').textContent = data.unlocked ? data.descricao : '???'
    tooltip.querySelector('.tooltip-extra').innerHTML = extraInfo
    tooltip.querySelector('.tooltip-extra').classList.toggle('hidden', !extraInfo)

    tooltip.style.transform = 'translateY(-50%)'
    tooltip.style.left = `${containerRect.left - tooltip.offsetWidth - 10}px`
    tooltip.style.opacity = 1
    tooltip.style.top = `min(${(y - 10)}px, calc(100vh - ${tooltipRect.height/2}px))`
  }
  else if (atributtePre === 'up') {
    const data = upgrades.find(up => up.id === id)
    
    if (!tooltip.classList.contains('upgrade')) {
      tooltip.className = 'tooltip upgrade'
      tooltip.innerHTML = `
        <div class="tooltip-header">
          <div class="tooltip-header--left">
            <img class="tooltip-icon"/>
            <strong class="tooltip-name"></strong>
          </div>
          <span class="tooltip-price coin"></span>
        </div>
        <div class="tooltip-content">
          <span class="tooltip-function"></span>
          <span class="tooltip-description"></span>
        </div>
      `
    }

    const img = tooltip.querySelector('.tooltip-icon')
    setImg(img, data.icon)
    tooltip.querySelector('.tooltip-name').textContent = data.nome
    tooltip.querySelector('.tooltip-price').textContent = formatarNumero(data.custo)
    tooltip.querySelector('.tooltip-price').className = `tooltip-price coin ${pontos < data.custo ? 'high' : 'low'}`
    tooltip.querySelector('.tooltip-function').textContent = data.funcao
    tooltip.querySelector('.tooltip-description').textContent = data.descricao

    tooltip.style.transform = 'translateY(-50%)'
    tooltip.style.left = `${containerRect.left - tooltip.offsetWidth - 10}px`
    tooltip.style.opacity = 1
    tooltip.style.top = `min(${(y - 10)}px, calc(100vh - ${tooltipRect.height/2}px))`

  }
  else if (atributtePre === 'bn') {
    const containerRect = document.querySelector('.container-boosts>.boost').getBoundingClientRect()  
    const data = boostsActive.find(bn => bn.id === id)

    if (!tooltip.classList.contains('bonus')) {
      tooltip.className = 'tooltip bonus'
      tooltip.innerHTML = `
        <div class="tooltip-header center">
          <strong class="tooltip-name"></strong>
        </div>
        <div class="tooltip-content">
          <span class="tooltip-efeito"></span>
        </div>
      `
    }

    tooltip.querySelector('.tooltip-name').textContent = data.nome
    tooltip.querySelector('.tooltip-efeito').textContent = data.efeito
    
    const tooltipRect = tooltip.getBoundingClientRect()
    tooltip.style.left = `${x}px`
    tooltip.style.top = `${containerRect.top - tooltipRect.height - 15}px`
    tooltip.style.transform = `translateX(-50%)`
    tooltip.style.opacity = 1
  }
}

function showMobileTooltip(type, item, touched = true) {
  const titles = {
    es: 'Estruturas',
    up: 'Upgrades',
    bn: 'Bônus'
  }

  if (touched) playSound('/static/assets/sounds/open.mp3', .4)

  const mobileTitle = mobileTooltip.querySelector('.mobile-tooltip--title')
  const wrapper = mobileTooltip.querySelector(`.mobile-tooltip--wrapper`)
  const data = wrapper.dataset?.mobileid
  const isItem = data == item.id

  mobileTooltip.classList.add('enabled')
  void mobileTooltip.offsetHeight
  mobileTooltip.style.opacity = 1

  mobileTitle.textContent = titles[type]

  if (type == 'es') {
    const gerando = (item.comprados * item.lps * lpsMultiplier).toFixed(1)
    const percentual = ((gerando / (lpsTOT || 1)) * 100).toFixed(2)

    if (!isItem) {
      // Cria o HTML se ainda não existir
      wrapper.innerHTML = `
        <div class="mobile-tooltip--header">
          <img class="mobile-tooltip--icon"/>
          <div class="mobile-tooltip--header-text">
            <span class="mobile-tooltip--name"></span>
            <span class="mobile-tooltip--comprados"></span>
          </div>
        </div>
        <div class="mobile-tooltip--items">
          <ul>
            <li class="tooltip-lps-unico"></li>
            <li class="tooltip-lps-total"></li>
            <li class="tooltip-gerado"></li>
          </ul>
        </div>
        <span class="tooltip-description"></span>
      `

      wrapper.dataset.mobileid = item.id // Define o ID do wrapper para o nome da estrutura
    }

    // Atualiza os dados SEMPRE
    let img = wrapper.querySelector('.mobile-tooltip--icon')
    setImg(img, item.icon)

    wrapper.querySelector('.mobile-tooltip--name').textContent = item.nome
    wrapper.querySelector('.mobile-tooltip--comprados').textContent = `Comprados: ${item.comprados}`
    wrapper.querySelector('.tooltip-lps-unico').textContent = `cada ${item.nome} gera ${formatarNumero((item.lps * lpsMultiplier).toFixed(1), true)} LpS`
    wrapper.querySelector('.tooltip-lps-total').textContent = `${item.comprados} ${item.comprados > 1 ? item.plural : item.nome} ${item.comprados > 1 ? 'estão' : 'está'} gerando ${formatarNumero(gerando)} LpS (${percentual}%)`
    wrapper.querySelector('.tooltip-gerado').textContent = `${formatarNumero(Math.floor(item.gerado), true)} linhas geradas até agora`
    wrapper.querySelector('.tooltip-description').textContent = item.descricao
  } else if (type == 'up') {
    if (!isItem) {
      // Cria o HTML se ainda não existir
      wrapper.innerHTML = `
        <div class="mobile-tooltip--header">
          <img class="mobile-tooltip--icon" />
          <div class="mobile-tooltip--header-text">
            <span class="mobile-tooltip--name"></span>
          </div>
        </div>
        <span class="tooltip-function"></span>
        <span class="tooltip-description"></span>
      `

      wrapper.dataset.mobileid = item.id // Define o ID do wrapper para o nome do upgrade
    }

    // Atualiza os dados SEMPRE
    const img = wrapper.querySelector('.mobile-tooltip--icon')
    setImg(img, item.icon)

    wrapper.querySelector('.mobile-tooltip--name').textContent = item.nome
    wrapper.querySelector('.tooltip-function').textContent = item.funcao
    wrapper.querySelector('.tooltip-description').textContent = item.descricao
  } else if (type == 'bn') {
    if (!isItem) {
      // Cria o HTML se ainda não existir
      wrapper.innerHTML = `
          <div class="mobile-tooltip--header">
            <img class="mobile-tooltip--icon" />
            <div class="mobile-tooltip--header-text">
              <span class="mobile-tooltip--name"></span>
            </div>
          </div>
          <span class="tooltip-function"></span>
          <span class="tooltip-description"></span>
      `
      wrapper.dataset.mobileid = item.id // Define o ID do wrapper para o nome do bônus
    }

    // Atualiza os dados SEMPRE
    const img = wrapper.querySelector('.mobile-tooltip--icon')
    setImg(img, item.icon)

    wrapper.querySelector('.mobile-tooltip--name').textContent = item.nome
    wrapper.querySelector('.tooltip-function').textContent = item.efeito
    wrapper.querySelector('.tooltip-description').textContent = item.descricao
  }
}

function closeMobileTootip() {
  mobileTooltip.style.opacity = 0
}

const close = mobileTooltip.querySelector('.close-bttn')

mobileTooltip.addEventListener("transitionend", (e) => {
  if (e.propertyName === "opacity" && mobileTooltip.classList.contains('closing')) {
    mobileTooltip.classList.remove('closing')
    mobileTooltip.classList.remove('enabled')
  }
})

close.addEventListener('click', (e) => {
  if (getComputedStyle(mobileTooltip).opacity != 1) return

  e.stopPropagation() // impede que o clique vá para outros elementos
  e.preventDefault() // (opcional) previne o comportamento padrão, se necessário
  closeMobileTootip()
  mobileTooltip.classList.add('closing')
  mobileTooltipItem = {type: '', item: null} // Reseta o item
  playSound('/static/assets/sounds/close.mp3', .8)
})


// CONTAINER DA DIREITA (UPGRADES/ESTRUTURAS)

bulkButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    if (btn.classList.contains('active')) return

    playSound(`/static/assets/sounds/tab.mp3`, .5)

    bulkButtons.forEach((b) => b.classList.remove('active')) // Primeiro, remove "active" de todos
    btn.classList.add('active') // Depois, adiciona somente no que foi clicado

    bulkBuy = Number(btn.dataset.bulk)

    if (tabActive == 'Estruturas') renderEstruturas()
  })
})

buttonsHeader.forEach((btn) => {
    btn.addEventListener('click', () => {
      if (btn.classList.contains('active')) return

      buttonsHeader.forEach((b) => b.classList.remove('active')) // Primeiro, remove "active" de todos
      btn.classList.add('active') // Depois, adiciona somente no que foi clicado

      // Limpas as notificações e atualiza o indicador vermelho
      notificacoes.upgrades.clear()
      notificacoes.estruturas.clear()
      atualizarIndicadores()

      playSound(`/static/assets/sounds/tab.mp3`, .5)
      // Através do conteúdo, verifica qual botão foi clicado
      tabActive = btn.querySelector('.text').textContent
      if (tabActive == 'Upgrades') renderUpgrades() // Irá renderizar UPGRADES
      else if (tabActive == 'Estruturas') renderEstruturas() // Irá renderizar ESTRUTURAS
      else return
    })
})

function setScrollShadows(el) {
  function updateVars() {
    const { scrollTop, scrollHeight, clientHeight } = el;
    let ot = 1, ob = 1;

    // Sem scroll: ambos 0
    if (scrollHeight <= clientHeight) {
      ot = 0;
      ob = 0;
    } else {
      const maxScroll = scrollHeight - clientHeight;

      ot = scrollTop / maxScroll
      ob = 1 - (scrollTop / maxScroll)
    }

    el.style.setProperty('--ot', ot);
    el.style.setProperty('--ob', ob);
  }

  // Atualiza no load e no scroll
  updateVars();
  el.addEventListener('scroll', updateVars);

  // Observa mudanças no tamanho/conteúdo
  const ro = new ResizeObserver(updateVars);
  ro.observe(el);
}

setScrollShadows(containerContent)

// Função que irá rendereizar a lista certa na seção de estruturas
const renderEstruturas = () => {
  // Se antes, na lista, havia algum "upgrade", reseta o conteúdo da lista
  if (!contentList.querySelector('.estrutura')) contentList.innerHTML = ''

  const size = estruturas.filter(es => es.unlocked).length
  // const size = 99
  const estruturasFixed = estruturas.slice(0, Math.min(size + 2, estruturas.length))

  estruturasFixed.forEach((item) => {
    const id = `estrutura-${item.id}`
    let estrutura = document.getElementById(id)

    // Se o item não está renderizado, cria a estrutura HTML
    if (!estrutura) {
      estrutura = document.createElement('div')
      estrutura.id = id
      estrutura.className = "content-item estrutura"
      estrutura.setAttribute('data-tooltipId', item.id)

      estrutura.innerHTML = (`
        <img class="item-icon">
        <div class="item-content">
          <div class="item-text">
            <div class="item-text--wrapper">
              <span class="mobile-purchased"></span>
              <span class="mobile-name"></span>
              <span class="item-name"></span>
            </div>
            <div class="cust-wrapper">
              <span class="cust"></span>
            </div>
          </div>
          <span class="item-purchased"></span>
          <button class="info-bttn">INFO</button>
        </div>
      `)

      estrutura.addEventListener('click', (e) => {
        const hasClickedInfo = document.elementsFromPoint(e.clientX, e.clientY).some(el => el.classList.contains('info-bttn'))
        if (hasClickedInfo) return
    
        buyEstrutura(item.id)
      })

      addSafeTouchListener(estrutura.querySelector('.info-bttn'), () => {
        close.classList.remove('closing')
        mobileTooltipItem = {item, type: 'es'}
        showMobileTooltip('es', item)
      })
    
      contentList.appendChild(estrutura)
    } 
    
    const custoContainer = estrutura.querySelector('.cust')
    const itemName = estrutura.querySelector('.item-name')
    const mobileName = estrutura.querySelector('.mobile-name')
    const mobilePurchased = estrutura.querySelector('.mobile-purchased')
    const comprados = estrutura.querySelector('.item-purchased')

    const img = estrutura.querySelector('.item-icon')
    setImg(img, item.icon)

    const custo = Math.round(sumPG(custoAtual(item), 1.15, bulkBuy))

    if (item.unlocked) {
      if (item.comprados > 0) {
        comprados.textContent = item.comprados
        mobilePurchased.classList.add('with-value')
        mobilePurchased.textContent = item.comprados
      }
      if (estrutura.classList.contains('hidden')) estrutura.style.animation = 'fade-in .8s linear'
      itemName.textContent = item.nome
      mobileName.textContent = item.comprados > 1 ? item.plural : item.nome
      estrutura.classList.remove('hidden')
      estrutura.classList.add('unlocked')
    } else {
      itemName.textContent = '???'
      mobileName.textContent = '???'
      estrutura.classList.add('hidden')
    }

    custoContainer.textContent = formatarNumero(custo)
    custoContainer.classList = `cust coin ${custo > pontos ? 'high' : 'low'}`
  })
}

// Função que irá renderizar a lista certa na seção de upgrades
const renderUpgrades = () => {
  if (!contentList.querySelector('.upgrade') && !contentList.querySelector('.all-purchased')) {
    contentList.innerHTML = ''
  }

  const upgradesFiltered = upgrades.filter(item => !item.purchased)
  if (upgradesFiltered.length > 0) {
    upgradesFiltered.forEach(item => {
      const id = `upgrade-${item.id}`
      let upgrade = document.getElementById(id)

      if (!upgrade) {
        upgrade = document.createElement('div')
        upgrade.id = id
    
        upgrade.innerHTML = (`
          <img class="item-icon"/>
          <div class="item-content">
            <div class="item-text">
              <span class="item-name">${item.nome}</span>
              <span class="cust coin"></span>
            </div>
            <button class="info-bttn">INFO</button>
          </div>
        `)
    
        upgrade.className = "content-item upgrade"
        if (pontos >= item.custo) upgrade.classList.add('unlocked')
    
        upgrade.setAttribute('data-tooltipId', item.id)
        upgrade.addEventListener('click', (e) => {
          const hasClickedInfo = document.elementsFromPoint(e.clientX, e.clientY).some(el => el.classList.contains('info-bttn'))
          if (hasClickedInfo) return
          
          const hasBought = buyUpgrade(item.id)
          if (hasBought) upgrade.remove()
        })
    
        addSafeTouchListener(upgrade.querySelector('.info-bttn'), () => {
          close.classList.remove('closing')
          mobileTooltipItem = {item, type: 'up'}
          showMobileTooltip('up', item)
        })
        
        contentList.appendChild(upgrade)
      }
      
      if (item.purchased) {
        upgrade.remove()
        return
      }

      const img = upgrade.querySelector('.item-icon')
      setImg(img, item.icon)

      const custoContainer = upgrade.querySelector('.cust')

      custoContainer.textContent = formatarNumero(item.custo)
      custoContainer.className = `cust coin ${item.custo > pontos ? 'high' : 'low'}`
      upgrade.classList.toggle('unlocked', pontos >= item.custo)
    })
  } else {
    if (contentList.querySelector('.all-purchased')) return
    const span = document.createElement("span")

    span.className = 'all-purchased'
    span.style.fontSize = '1.2em'
    span.style.marginTop = '2em'
    span.textContent = 'Você comprou tudo :('
    contentList.appendChild(span)
  }
}

// Compra a estrutura, aumenta o contador de "comprados" e subtrai dos pontos
const buyEstrutura = (id) => {
  const estrutura = estruturas.find(e => e.id == id);
  let custo = 0;
  let quantidadeComprada = 0;

  // Tenta comprar o bulkBuy completo primeiro
  custo = Math.round(sumPG(custoAtual(estrutura), 1.15, bulkBuy));
  
  if (pontos >= custo) {
    quantidadeComprada = bulkBuy;
  } else {
    // Se não tiver pontos para o bulkBuy, calcula quantas estruturas é possível comprar
    for (let i = bulkBuy; i >= 1; i--) {
      const custoParcial = Math.round(sumPG(custoAtual(estrutura), 1.15, i));
      if (pontos >= custoParcial) {
        quantidadeComprada = i;
        custo = custoParcial;
        break;
      }
    }
  }

  // Se for possível comprar pelo menos uma estrutura
  if (quantidadeComprada > 0) {
    estrutura.comprados += quantidadeComprada;
    refresh(-custo);
    playSound(`/static/assets/sounds/b${randomBetween(1, 2)}.mp3`, .5);
  } else {
    // Se não for possível comprar nenhuma, a função simplesmente retorna
    return;
  }
}

// Compra a estrutura, deixa ela como "purchased" (comprada), ativa o efeito do upgrade e subtrai dos pontos
const buyUpgrade = (id) => {
  const upgrade = upgrades.find(e => e.id == id)

  if (pontos < upgrade.custo || upgrade.purchased) return

  upgrade.efeito()
  upgrade.purchased = true

  refresh(-upgrade.custo)
  
  playSound(`/static/assets/sounds/b${randomBetween(1, 2)}.mp3`, .5)

  return true
}

// FIM DO CONTAINER DA DIREITA

// EVENTO ALEATÓRIO DO CAFÉ

const triggerCoffeeEvent = () => {
    // A cada um segundo, verificar se o número aleatorizado é menor que a probabilidade, para então spawnar o coffee
    setInterval(() => {
        if (Math.random() < coffeeProb) spawnCoffee()
    }, 1000)
}

let lastBonus = ''

// Função responsável por spawnar o café, recebendo de parâmetro qual o BÔNUS escolhido
function spawnCoffee (bonusId = null, duracao = 2500)  {
    // Cria o elemento que vai envolver (wrap) o coffee
    const div = document.createElement("div")
    div.classList.add('coffee-wrapper')
    div.innerHTML = `<div class="coffee"></div>`
    
    // Insere no DOM
    coffeeContainer.appendChild(div)
    
    const fadeCSS = getComputedStyle(div).getPropertyValue('--time').trim()
    const fadeNum = parseFloat(fadeCSS) * 1000 // converte para milissegundos
    
    // Pega coordenadas aleatórias, respeitando o tamanho da tela
    const { x, y } = randomCoord(div)
    div.style.top = y
    div.style.left = x

    div.style.opacity = 1
    div.style.transform = "scale(1)"
    div.innerHTML = `<div class="coffee" style="animation: pulse 2s infinite ease-in-out, tilt 5s infinite"></div>`

    // Quando se passar 5s, adicionar uma animação de "fade-out"
    setTimeout(() => {
      div.classList.add("fade-out")
      div.style.opacity = 0
      div.style.transform = "scale(0)"
    }, fadeNum + duracao) // 5s (surgimento) + tempo em que ficará na tela

    // Adicionar um listener para saber quando o "fade-out" terminou, para então remover a div do "coffee"
    div.addEventListener("transitionend", (e) => {
      if (e.propertyName === "opacity" && div.classList.contains("fade-out")) div.remove()
    })

    // Ao clicar no café:
    div.addEventListener('click', () => {
      // Esse operador serve para: se "bonusName" for null, será escolhido um bonus aleatório, senão será escolhido o que foi enviado como parâmetro pela função
      updateStat('totalCoffees', 1)
      const bonus = bonusList.find(b => b.id == bonusId) ?? escolherBonusComPeso(bonusList)
      setBonus(bonus) // Coloca o bônus na tela
      spawnAlert(x, y)
      
      playSound(`/static/assets/sounds/coffee.mp3`, .5)
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
  const listFiltered = list.filter(l => l?.peso && l?.unlocked)
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

  if (bonus.nome == 'Café Divino') { document.querySelector('.hacker').classList.add('active') } // Adiciona a classe 'active' para o hacker
  else if (bonus.nome == 'Café Demoníaco') { document.querySelector('.demon').classList.add('active') } // Adiciona a classe 'active' para o demon

  const active = boostsActive.find(b => b.nome == bonus.nome) // Verifica se já tem um boost ativo

  // Se o bonus já está ativo, será renovado
  if (active) {
    clearTimeout(active.timeoutId) // Para com o timer anterior

    // E inicia um novo
    active.timeoutId = setTimeout(() => {
      removeBoost(bonus.id)
    }, bonus.duracao * 1000)

    const boostDiv = document.querySelector(`[data-bonusid="${bonus.id}"]`)
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
  div.dataset.bonusid = bonus.id // Coloca um data-set para facilitar a localização dessa div
  div.style.setProperty('--time', `${bonus.duracao}s`) // Coloca uma variável para o CSS saber o tempo da animação
  addSafeTouchListener(div, () => {
    showMobileTooltip('bn', bonusActive)
  })

  const img = document.createElement("img")
  img.className = 'boost-icon'
  setImg(img, bonus.icon) // Coloca o ícone do bonus
  div.appendChild(img) // Coloca o ícone dentro da div
  
  boostsContainer.appendChild(div) // Adiciona ao container dos boosts
}

// Remove o bonus do café
function removeBoost(id) {
  const index = boostsActive.findIndex(b => b.id === id)
  if (index !== -1) {
    const boost = boostsActive[index]
    
    if (boost.nome == 'Café Divino') { document.querySelector('.hacker').classList.remove('active')} // Remove a classe 
    else if (boost.nome == 'Café Demoníaco') { document.querySelector('.demon').classList.remove('active')} // Remove a classe 
    
    if (boost.reverter) boost.reverter() // Desfaz o efeito
    boostsActive.splice(index, 1) // Retira o boost da lista

    renderStats()

    const boostDiv = document.querySelector(`[data-bonusid="${id}"]`) // Pega a div com o boost ativo
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

const sumPG = (a1, q, n) => (a1*(Math.pow(q, n) - 1))/((q - 1)||1)
const custoAtual = (el) => Math.floor(el.custoBase * Math.pow(1.15, el.comprados))

const timing = 0.1

function gerarPassivamente() {
  if(statusPage != "pause"){
    let totalGerado = 0;

  estruturas.forEach(estrutura => {
    const geradoPorEssa = estrutura.lps * estrutura.comprados * lpsMultiplier * timing
    estrutura.gerado += geradoPorEssa
    totalGerado += geradoPorEssa
  })


  if (totalGerado == 0) return
  lpsTOT = totalGerado / (timing || 1)
  lpsPersecondContainer.textContent = `linhas p/ segundo: ${formatarNumero(lpsTOT.toFixed(1))}` 
  refresh(totalGerado)
  }
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
    const interval = fadeDuration / (steps || 1);
    let currentStep = 0;

    fadeInInterval = setInterval(() => {
      currentStep++;
      const newVolume = finalVolume * (currentStep / (steps || 1));
      audio.volume = Math.min(finalVolume, newVolume);

      if (currentStep >= steps) {
        clearInterval(fadeInInterval);
      }
    }, interval)
  }).catch((err) => {
    console.error("Erro ao tocar música:", err);
  })
}

function stopMusic(useFade = true, fadeDuration = 1000) {
  if (!currentMusic) return;

  if (fadeInInterval) clearInterval(fadeInInterval);
  if (fadeOutInterval) clearInterval(fadeOutInterval);

  if (useFade) {
    const steps = 20;
    const interval = fadeDuration / (steps || 1);
    let currentStep = 0;
    const startVolume = currentMusic.volume;

    fadeOutInterval = setInterval(() => {
      currentStep++;
      const newVolume = startVolume * (1 - currentStep / (steps || 1));
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
  if (modalContainer.classList.contains("disabled")) modalContainer.classList.remove("disabled");
  modalErrorContainer.textContent = e.detail.error;
  modalInput.value = ''
})

const submitPromise = new Promise((resolve) => {
  if (!idPlayer) { resolve() }

  window.addEventListener('submitError', (e) => {
    resolve();
  })

  window.addEventListener('submitSucess', (e) => {
    company = e.detail.companyName;
    companyName.textContent = company;
    modalErrorMessage = '';
    closeModal();
    startGame();
    if (e.detail.hasToRenderLb) requestLeaderboard();

    resolve(); // Finaliza a promise quando tudo do evento acabar
  })
})

// VERIFICAR SE A PÁGINA FOI CARREGADA
//Seta o data no localStorage
function setData(){
  if (debug) return

  // verifica as upgrades compradas e armazenas
  let listPatchUpgrades = [];
  upgrades.forEach((element) => {
    listPatchUpgrades.push({
      "id": element.id,
      "purchased": element.purchased,
      "unlocked": element.unlocked,
    })
  })
  
  // verifica as estruturas compradas e armazenas
  let listPatchStructures = [];
  estruturas.forEach((element)=>{
    if (element.comprados > 0) listPatchStructures.push({
      "id": element.id,
      "comprados": element.comprados,
      "gerado": element.gerado,
    });
  })

  localStorage.setItem("upgrades", JSON.stringify({salve: listPatchUpgrades}));
  localStorage.setItem("estruturas", JSON.stringify({salve: listPatchStructures}));
  localStorage.setItem('stats', JSON.stringify(defaultStats))
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

  const setCoffeeInterval = () => {
    coffeeInterval = setInterval(() => {
      if (Math.random() < coffeeProb) spawnCoffee()
    }, 1000)
  }

  if (pontos == 0) {
    setTimeout(() => {
      setCoffeeInterval()
    }, 1000 * 15)
  } else {
    setCoffeeInterval()
  }
}

function endGame() {
  gameInterval = null
  coffeeInterval = null
}

function reset(linesToo = true, cookiesToo = true) {
  debug = true
  localStorage.removeItem('upgrades')
  localStorage.removeItem('estruturas')
  localStorage.removeItem('stats')
  if (linesToo) {
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

Promise.all([preloadPromise, submitPromise])
  .then(() => {
    closeLoading();
  })
  .catch((err) => {
    console.error('Erro em uma das operações:', err);
  });