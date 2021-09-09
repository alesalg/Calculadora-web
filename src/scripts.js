function inserir(num) {
    let numeros = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numeros + num;
}

function limpar() {
    document.getElementById('resultado').innerHTML = "";
}

function voltar() {
    let resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, result.length -1);
}

function calcular() {
    let resultado = document.getElementById('resultado').innerHTML;
    if(resultado) {
        document.getElementById('resultado').innerHTML = eval(resultado)
    }
    else{
        document.getElementById('resultado').innerHTML = "?"
    }
}