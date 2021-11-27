let pixelBoard = document.querySelector("#pixel-board");
for (let index = 0; index < 5; index += 1) {
    let linhas = document.createElement("div");
    pixelBoard.appendChild(linhas);
    
    for (let i = 0; i < 5; i +=1 ) {
        let colunas = document.createElement("div");
        colunas.className = "pixel";
        linhas.appendChild(colunas);
    } 
}



let corSelecionada = document.querySelector("#color-palette");
corSelecionada.addEventListener("click" , selecionarCor);

function selecionarCor (corSelecionada) {

}