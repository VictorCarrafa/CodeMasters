// Função para validar campos
function validateForm() {
    const cpf = document.getElementById('cpf').value.trim();
    const rg = document.getElementById('rg').value.trim();
    const celular = document.getElementById('celular').value.trim();
    const emergencyTelefone = document.getElementById('emergencyTelefone').value.trim();

    // Validação de campos que aceitam apenas números
    const onlyDigits = input => /^\d+$/.test(input);

    if (!onlyDigits(cpf) || cpf.length !== 11) {
        alert('CPF deve conter exatamente 11 números.');
        return false;
    }

    if (!onlyDigits(rg) || rg.length < 7 || rg.length > 9) {
        alert('RG deve conter entre 7 a 9 números.');
        return false;
    }

    if (!onlyDigits(celular) || celular.length !== 11) {
        alert('Celular deve conter exatamente 11 números.');
        return false;
    }

    if (!onlyDigits(emergencyTelefone) || emergencyTelefone.length !== 11) {
        alert('Telefone de emergência deve conter exatamente 11 números.');
        return false;
    }

    return true;
}

// Função para exibir mensagem de confirmação
function showSuccessMessage() {
    const messageElement = document.getElementById('successMessage');
    messageElement.style.display = 'block';

    // Ocultar a mensagem após alguns segundos
    setTimeout(() => {
        messageElement.style.display = 'none';
    }, 3000);
}

// Event listener para o botão de envio fora do formulário
document.getElementById('submitButton').addEventListener('click', function() {
    if (validateForm()) {
        showSuccessMessage();
        document.getElementById('employeeForm').reset(); // Reseta o formulário após validação bem-sucedida
    }
});

document.getElementById('submitButton').addEventListener('click', function() {
    const form = document.getElementById('myForm');
    const successMessage = document.getElementById('successMessage');
    
    // Verifica se todos os campos estão preenchidos
    if (form.checkValidity()) {
        successMessage.style.display = 'block';
        
        // Esconde a mensagem após 2 segundos
        setTimeout(function() {
            successMessage.style.display = 'none';
        }, 100);
    } else {
        // Se os campos não estiverem preenchidos, você pode mostrar uma mensagem de erro ou alertar o usuário
        alert('Por favor, preencha todos os campos.');
    }
});