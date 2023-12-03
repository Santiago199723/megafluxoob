document.addEventListener('DOMContentLoaded', function () {
  // ... Código existente ...

  // Adiciona o botão ADM
  const btnAdm = document.createElement('button');
  btnAdm.innerHTML = 'Administração';
  btnAdm.addEventListener('click', mostrarUsuarios);

  // Adiciona o botão ADM à div 'admButtonContainer'
  const admButtonContainer = document.querySelector('#admButtonContainer');
  admButtonContainer.appendChild(btnAdm);
});

// Função para mostrar os usuários na área restrita
function mostrarUsuarios() {
  const codigoAdm = prompt('Informe o código para entrar na área restrita');

  // Verifica se o código ADM está correto
  if (codigoAdm === 'admin') {
    // Redireciona para a página de cadastro
    window.location.href = '../html/cadastro.html';
  } else {
    alert('Código incorreto. Acesso negado!');
  }
}

// ... Restante do código ...

// Event Listeners
nome.addEventListener('keyup', validarNome);
usuario.addEventListener('keyup', validarUsuario);
senha.addEventListener('keyup', validarSenha);
confirmSenha.addEventListener('keyup', validarConfirmSenha);

function validarNome() {
  // ... Lógica de validação do nome ...
}

function validarUsuario() {
  // ... Lógica de validação do usuário ...
}

function validarSenha() {
  // ... Lógica de validação da senha ...
}

function validarConfirmSenha() {
  // ... Lógica de validação da confirmação de senha ...
}

function cadastrar() {
  // ... Lógica de cadastro ...
}
