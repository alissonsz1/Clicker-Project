//variaveis
let pontos = 0;
let boost = 0;
let preco_upgrade = 10;

//O botão de clicar e o botão de upgrade e o display de pontos
const button = document.getElementById('click_button');
const upgradeButton = document.getElementById('upgrade_button');
const display = document.getElementById('pontos');

//Evento do botão de clicar
//Quando o botão é clicado, adiciona pontos e atualiza o display
button.addEventListener('click', () => {
    pontos = pontos + 1 + boost;
    display.textContent = pontos;
});

//Evento do botão de upgrade
//Quando o botão é clicado, verifica se tem pontos suficientes para o upgrade
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

//Toda funcão que atualiza os pontos precisa atualizar o display