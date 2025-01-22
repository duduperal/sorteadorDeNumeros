function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    console.log(`Quantidade: ${quantidade}, de: ${de}, até: ${ate}`);
    if(de >= ate){
        alert('O número "Do número" deve ser menor que o número "Até o número"');
        return;
    }
    if(quantidade > (ate - de + 1)){
        alert("A quantidade deve ser menor que o intervalo de números do sorteio");
        return;
    }
    let sorteados = []
    let numero;
    for (let i = 0; i < quantidade; i++) {
        numero = obterNumeroAleatorio(de, ate);
        while(sorteados.includes(numero)) {
            numero = obterNumeroAleatorio(de, ate);
        }
        sorteados.push(numero);
    }
    
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;

    alterarStatusBotaoReiniciar();
    alterarStatusBotaoSortear();
}

function alterarStatusBotaoSortear(){
    let botaoSortear = document.getElementById('btn-sortear');
    if(botaoSortear.classList.contains('container__botao')){
        botaoSortear.classList.remove('container__botao');
        botaoSortear.classList.add('container__botao-desabilitado');
        botaoSortear.disabled = true;
    } else{
        botaoSortear.classList.remove('container__botao-desabilitado');
        botaoSortear.classList.add('container__botao');
        botaoSortear.disabled = false;
    }
}

function alterarStatusBotaoReiniciar(){
    let botaoReiniciar = document.getElementById('btn-reiniciar');
    if(botaoReiniciar.classList.contains('container__botao-desabilitado')){
        botaoReiniciar.classList.remove('container__botao-desabilitado');
        botaoReiniciar.classList.add('container__botao');
        botaoReiniciar.disabled = false;
    } else{
        botaoReiniciar.classList.remove('container__botao');
        botaoReiniciar.classList.add('container__botao-desabilitado');
        botaoReiniciar.disabled = true;
    }
}

function obterNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function reiniciar(){
    document.getElementById('quantidade').value = "";
    document.getElementById('de').value = "";
    document.getElementById('ate').value = "";
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>'
    alterarStatusBotaoReiniciar();
    alterarStatusBotaoSortear();
}