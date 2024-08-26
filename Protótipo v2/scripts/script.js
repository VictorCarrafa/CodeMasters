const estados = {
    entrada: false,
    saidaIntervalo: false,
    retornoIntervalo: false,
    saida: false
};

document.getElementById('registrar').addEventListener('click', function() {
    const select = document.getElementById('ponto');
    const selectedOption = select.value;

    // Verificar se a opção pode ser registrada
    if (selectedOption === 'entrada' && estados.entrada) {
        alert('A entrada já foi registrada.');
        return;
    }
    if (selectedOption === 'saida-intervalo' && !estados.entrada) {
        alert('Você precisa registrar a ENTRADA primeiro.');
        return;
    }
    if (selectedOption === 'saida-intervalo' && estados.saidaIntervalo) {
        alert('A saída para intervalo já foi registrada.');
        return;
    }
    if (selectedOption === 'retorno-intervalo' && !estados.saidaIntervalo) {
        alert('Você precisa registrar a SAÍDA PARA INTERVALO primeiro.');
        return;
    }
    if (selectedOption === 'retorno-intervalo' && estados.retornoIntervalo) {
        alert('O retorno do intervalo já foi registrado.');
        return;
    }
    if (selectedOption === 'saida' && !estados.retornoIntervalo) {
        alert('Você precisa registrar o RETORNO DO INTERVALO primeiro.');
        return;
    }
    if (selectedOption === 'saida' && estados.saida) {
        alert('A saída já foi registrada.');
        return;
    }

    // Atualizar estados com base na opção selecionada
    switch (selectedOption) {
        case 'entrada':
            estados.entrada = true;
            break;
        case 'saida-intervalo':
            estados.saidaIntervalo = true;
            break;
        case 'retorno-intervalo':
            estados.retornoIntervalo = true;
            break;
        case 'saida':
            estados.saida = true;
            break;
    }

    // Registrar o ponto
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    const formattedTime = `${hours}:${minutes}:${seconds}`;

    const registro = document.createElement('li');
    registro.textContent = `${select.options[select.selectedIndex].text}: ${formattedTime}`;

    document.getElementById('registros').appendChild(registro);
});
