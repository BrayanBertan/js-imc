var peso = document.getElementById('peso');
var altura = document.getElementById('altura');
var calcular = document.getElementById('calcular');
var resultado = document.getElementById('resultado');
var classificacao = document.getElementById('classificacao');
calcular.addEventListener('click', calculaImc);


function calculaImc() {
    var valor =  parseFloat(peso.value) / (parseFloat(altura.value) * parseFloat((altura.value)));
    resultado.innerText = valor+'';
    switch (true) {
        case (valor < 16):
            classificacao.innerText = 'Magreza grave';
            classificacao.style.color = '#c00000';
            break;
        case (valor >= 16  && valor < 17):
            classificacao.innerText = 'Magreza moderada';
            classificacao.style.color = '#ed7d31';
            break;
        case (valor >= 17  && valor < 18.5):
            classificacao.innerText = 'Magreza leve';
            classificacao.style.color = '#44546a';
            break;
        case (valor >= 18.5  && valor < 25):
            classificacao.innerText = 'Saudável';
            classificacao.style.color = '#00b050';
            break;
        case (valor >= 25  && valor < 30):
            classificacao.innerText = 'Sobrepeso';
            classificacao.style.color = '#44546a';
            break;
        case (valor >= 30  && valor < 35):
            classificacao.innerText = 'Obesidade Grau I';
            classificacao.style.color = '#ed7d31';
            break;
        case (valor >= 35  && valor < 40):
            classificacao.innerText = 'Obesidade Grau II (severa)';
            classificacao.style.color = '#c00000';
            break;
        case (valor > 40):
            classificacao.innerText = 'Obesidade Grau III (mórbida)';
            classificacao.style.color = '#c00000';
            break;
    }

}