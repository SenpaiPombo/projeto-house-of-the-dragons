const botoesCarrossel = document.querySelectorAll('.botao')

const dragoes = document.querySelectorAll('.imagem')

const informacoes = document.querySelectorAll('.informacoes')

botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener("click", () => {

        removerBotao();
        
        addBotao(botao);
       
        removerDragao();

        addDragao(indice);

        removerInformacoes();

        addInformacoes(indice);
    });
});



function addInformacoes(indice) {
    informacoes[indice].classList.add('ativa');
}

function removerInformacoes() {
    const informacoesAtivas = document.querySelector(".informacoes.ativa");

    informacoesAtivas.classList.remove('ativa');
}

function addDragao(indice) {
    dragoes[indice].classList.add('ativa');
}

function removerDragao() {
    const dragaoSelecionado = document.querySelector(".imagem.ativa");

    dragaoSelecionado.classList.remove('ativa');
}

function addBotao(botao) {
    botao.classList.add('selecionado');
}

function removerBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");

    botaoSelecionado.classList.remove('selecionado');
}
