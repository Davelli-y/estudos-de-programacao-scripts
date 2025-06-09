function validarDescricao() {
    const desc = $('#desc').val().trim();
    if (desc === '') {
        $('#desc').css('background-color', 'yellow');
        $('#mensagem').html('Preencha a descrição do produto!');
        $('#alerta').modal('show');
        return false;
    } else {
        $('#desc').css('background-color', 'white');
        return true;
    }
}

function validarQuantidade() {
    const valor = $('#qtd').val().trim();
    const nQtd = Number(valor);

    if (valor === '' || isNaN(nQtd) || !Number.isInteger(nQtd) || nQtd < 1 || nQtd > 999) {
        $('#qtd').css('background-color', 'yellow');
        $('#mensagem').html("A quantidade deve ser um número inteiro entre 1 e 999!");
        $('#alerta').modal('show');
        return false;
    } else {
        $('#qtd').css('background-color', 'white');
        return true;
    }
}

function validarPreco() {
    const valor = $('#unit').val().trim().replace(',', '.');
    const nUnit = Number(valor);

    if (valor === '' || isNaN(nUnit) || nUnit <= 0) {
        $('#unit').css('background-color', 'yellow');
        $('#mensagem').html("O preço unitário deve ser um número maior que zero!");
        $('#alerta').modal('show');
        return false;
    } else {
        $('#unit').val(nUnit.toFixed(2).replace('.', ','));
        $('#unit').css('background-color', 'white');
        return true;
    }
}

function calcular() {
    if (validarDescricao() && validarQuantidade() && validarPreco()) {
        // Troca vírgula por ponto para garantir o cálculo correto
        const preco = Number($('#unit').val().replace(',', '.'));
        const qtd = Number($('#qtd').val());
        const nTotal = preco * qtd;
        $('#total').val(nTotal.toFixed(2).replace('.', ','));
    }
}