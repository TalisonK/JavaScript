function load() {
    var d = new Date();
    var ano = d.getFullYear();
    var mes = d.getMonth() + 1;
    var dia = d.getDate();
}

function naocompletou(conta, saida) {
    saida.innerText = conta - 1;
}

function completou(conta, saida) {
    saida.innerText = conta;
}

function verificar() {

    var conta = 2020 - Number(passado.value.substring(0, 4));
    var passado = document.getElementById('data');
    var saida = document.getElementById('res');
    saida.innerText = "oi";
    if (mes < Number(passado.value.substring(5, 7))) {
        naocompletou(conta, saida);
    } else if (mes > Number(passado.value.substring(5, 7))) {
        completou(conta, saida);
    } else {
        if (dia < Number(passado.value.substring(9, 10))) {
            naocompletou(conta, saida);
        } else if (dia > Number(passado.value.substring(9, 10))) {
            completou(conta, saida);
        } else {
            saida.innerHTML = `PARABENS!! SEU ANIVERSÁRIO É HOJE!!. VOCÊ COMPLETOU ${conta} ANOS!`
        }
    }

}