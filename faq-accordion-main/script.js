const botoes = document.querySelectorAll('.toggle-btn');
botoes.forEach(botao => {
  botao.addEventListener('click', function() {
    const targetId = this.getAttribute('data-target'); // Corrigido o método aqui
    const conteudo = document.getElementById(targetId);

    // Corrigindo a condição com o operador lógico correto
    if (conteudo.style.display === 'none' || conteudo.style.display === '') {
      conteudo.style.display = 'block';
    } else {
      conteudo.style.display = 'none';
    }
  });
});
