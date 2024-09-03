function redirectToCadastro() {
    window.location.href = "cadastro_remover.html";
}
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

// Função para exibir mensagem de remoção
function showRemoveMessage() {
    const messageElement = document.getElementById('removeMessage');
    messageElement.style.display = 'block';

    // Ocultar a mensagem após alguns segundos
    setTimeout(() => {
        messageElement.style.display = 'none';
    }, 3000);
}

// Event listener para o botão "Salvar"
document.getElementById('saveButton').addEventListener('click', function() {
    if (validateForm()) {
        showSuccessMessage();
        // Aqui você pode adicionar lógica para salvar os dados
        document.getElementById('employeeForm').reset(); // Reseta o formulário após validação bem-sucedida
    }
});

// Event listener para o botão "Remover"
document.getElementById('removeButton').addEventListener('click', function() {
    // Aqui você pode adicionar lógica para remover os dados
    showRemoveMessage();
    document.getElementById('employeeForm').reset(); // Reseta o formulário
});

document.getElementById('saveButton').addEventListener('click', function() {
    const form = document.getElementById('myForm');
    const successMessage = document.getElementById('successMessage');
    
    // Verifica se todos os campos estão preenchidos
    if (form.checkValidity()) {
        successMessage.style.display = 'block';
        
        // Esconde a mensagem após 2 segundos
        setTimeout(function() {
            successMessage.style.display = 'none';
        }, 2000);
    } else {
        // Se os campos não estiverem preenchidos, você pode mostrar uma mensagem de erro ou alertar o usuário
        alert('Por favor, preencha todos os campos.');
    }
});

document.getElementById('removeButton').addEventListener('click', function() {
    const form = document.getElementById('myForm');
    const removeMessage = document.getElementById('removeMessage');
    
    // Verifica se todos os campos estão preenchidos
    if (form.checkValidity()) {
        removeMessage.style.display = 'block';
        
        // Esconde a mensagem após 2 segundos
        setTimeout(function() {
            removeMessage.style.display = 'none';
        }, 2000);
    } else {
        // Se os campos não estiverem preenchidos, você pode mostrar uma mensagem de erro ou alertar o usuário
        alert('Por favor, preencha todos os campos.');
    }
});