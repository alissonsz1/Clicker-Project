// Upgrades "place holder" só pro código funcionar
const upgrades = [
  { nome: "Café Forte", custo: 100, icon: 'place-holder' },
  { nome: "Atalho de Teclado", custo: 300, icon: 'place-holder' },
  { nome: "Dupla Tela", custo: 800, icon: 'place-holder' },
  { nome: "Modo Foco", custo: 1500, icon: 'place-holder' }
];

// Estruturas "place holder" só pro código funcionar
const estruturas = [
  { nome: "Servidor Local", custo: 1000, icon: 'place-holder' },
  { nome: "Banco de Dados", custo: 2500, icon: 'place-holder' },
  { nome: "Nuvem Privada", custo: 5000, icon: 'place-holder' },
  { nome: "Cluster de Servidores", custo: 10000, icon: 'place-holder' }
];

// variaveis
let pontos = 0;
let boost = 0;
let preco_upgrade = 10;

// O botão de clicar e o botão de upgrade e o display de pontos
const button = document.getElementById('click_button');
const upgradeButton = document.getElementById('upgrade_button');
const display = document.getElementById('pontos');
const buttonsHeader = document.querySelectorAll(".button-header");
const contentList = document.querySelector('.content-list')

// Evento do botão de clicar
// Quando o botão é clicado, adiciona pontos e atualiza o display
button.addEventListener('click', () => {
    pontos = pontos + 1 + boost;
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
    }
});

// Toda funcão que atualiza os pontos precisa atualizar o display
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