// Função para redirecionar o usuário para a página de cadastro
function redirectToCadastro() {
    window.location.href = "cadastro_adicionar.html";
}

// Função para exibir o formulário de adição
function showAddForm() {
    document.getElementById('addForm').classList.toggle('hidden');
}

// Função para redirecionar para a página de remoção (ou altere a lógica conforme necessário)
function showEditForm() {
    window.location.href = "cadastro_alterar.html";
}

// Outras funções para editar/remover funcionários podem ser implementadas aqui
function showRemoveForm() {
    // Implementação da lógica para mostrar o formulário de remoção
}