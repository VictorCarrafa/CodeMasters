const estados = {
    entrada: false,
    saidaIntervalo: false,
    retornoIntervalo: false,
    saida: false,
    pontoFinalizado: false // Para controlar se o ponto foi finalizado após a saída
};

document.getElementById('registrar').addEventListener('click', function() {
    const select = document.getElementById('ponto');
    const selectedOption = select.value;

    // Verificar se o ponto já foi finalizado com entrada e saída
    if (estados.pontoFinalizado) {
        alert('Você já finalizou o ponto com entrada e saída. Não é possível registrar mais pontos.');
        return;
    }

    // Restrições para cada etapa do ponto
    if (selectedOption === 'entrada') {
        if (estados.entrada) {
            alert('A entrada já foi registrada.');
            return;
        }
        estados.entrada = true;
    } else if (selectedOption === 'saida intervalo') {
        if (!estados.entrada) {
            alert('Você precisa registrar a ENTRADA primeiro.');
            return;
        }
        if (estados.saidaIntervalo) {
            alert('A saída para intervalo já foi registrada.');
            return;
        }
        estados.saidaIntervalo = true;
    } else if (selectedOption === 'retorno intervalo') {
        if (!estados.saidaIntervalo) {
            alert('Você precisa registrar a SAÍDA PARA INTERVALO primeiro.');
            return;
        }
        if (estados.retornoIntervalo) {
            alert('O retorno do intervalo já foi registrado.');
            return;
        }
        estados.retornoIntervalo = true;
    } else if (selectedOption === 'saida') {
        if (!estados.entrada) {
            alert('Você precisa registrar a ENTRADA primeiro.');
            return;
        }
        if (!estados.retornoIntervalo && estados.entrada) {
            if (!estados.saidaIntervalo) {
                // Caixa de confirmação se o intervalo não foi registrado
                const confirmar = confirm('Você tem certeza que deseja pular a entrada e retorno do intervalo?');
                if (!confirmar) {
                    return; // Cancelar a operação se o usuário não confirmar
                }
            } else {
                alert('Você precisa registrar o RETORNO DO INTERVALO primeiro.');
                return;
            }
        }
        if (estados.saida) {
            alert('A saída já foi registrada.');
            return;
        }
        estados.saida = true;
        estados.pontoFinalizado = true; // Marcar como ponto finalizado se registrou a saída corretamente
    }

    // Registrar o ponto com a data e hora formatada (sem segundos)
    const date = new Date();
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Os meses começam do zero
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const formattedTime = `${hours}:${minutes}`;
    const formattedDate = `${day}/${month}/${year}`;

    const registro = document.createElement('li');
    registro.textContent = `${select.options[select.selectedIndex].text}: ${formattedDate} - ${formattedTime}`;

    document.getElementById('registros').appendChild(registro);
});
