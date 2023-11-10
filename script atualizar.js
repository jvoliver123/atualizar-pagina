// Função para atualizar a página
function atualizarPagina() {
  location.reload(); // Recarrega a página
}

// Definir intervalo de atualização (5 minutos = 300.000 milissegundos)
var intervalo = 300000;

// Executar a função de atualização repetidamente no intervalo definido
setInterval(atualizarPagina, intervalo);


//How to use

// 01 - Pressione Ctrl + Shift + J (Windows/Linux) ou Cmd + Option + J (Mac) para abrir o Console de Desenvolvedor.
// 02 - No Console de Desenvolvedor, cole o código acima e pressione Enter.
// 03 - A aba atual será atualizada automaticamente a cada 5 minutos.