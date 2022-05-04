const pixelBoard = document.querySelector("#pixel-board");
for (let index = 0; index < 5; index += 1) {
    let linhas = document.createElement("div");
    pixelBoard.appendChild(linhas);

    for (let i = 0; i < 5; i +=1 ) {
        let colunas = document.createElement("div");
        colunas.className = "pixel";
        linhas.appendChild(colunas);
    }
}

const cor1 = document.querySelector("#cor1");
let cor2 = document.querySelector("#cor2");
let cor3 = document.querySelector("#cor3");
let cor4 = document.querySelector("#cor4");
const colorPalet = document.querySelector("#color-palette");
const botao = document.querySelector("#clear-board");
const pixel = document.querySelector(".pixel");

function selecionarCor(cor) {
    let selecionarCor = document.querySelector(".selected");
    selecionarCor.classList.remove("selected");
    cor.target.classList.add("selected");
    console.log(selecionarCor);
    console.log(cor.target);
}
function pintarPixel(pixel) {
    let selecionarCor = document.querySelector(".selected");
    const cliqueiNoPixel = pixel.target;
    cliqueiNoPixel.id = selecionarCor.id;
    console.log("Pintando cor selecionada", pixel);
}
function clickBotao() {
    const pixel1 = document.querySelectorAll('.pixel');
    //pegando a classe.pixel para poder comprar com o tamnho do loop
    for (let i = 0; i < pixel1.length; i += 1) {
        //loop no for para adicionar o id white
        pixel1[i].id = 'white'; // id white add
    }
}
function eventosDeClick() {
    colorPalet.addEventListener("click", selecionarCor);
    botao.addEventListener("click", clickBotao);
    pixelBoard.addEventListener("click", pintarPixel)
}
window.onload = function init () {
    eventosDeClick();
}









