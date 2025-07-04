let botao = document.getElementById('meuBotao');
let divMensagem = document.getElementById('mensagem');

botao.addEventListener('click', e => {
  divMensagem.textContent = 'Acredite em si mesmo!';
});