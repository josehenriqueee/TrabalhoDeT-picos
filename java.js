document.addEventListener("DOMContentLoaded", () => {
    const botao = document.getElementById("botao-fugitivo");

    botao.addEventListener("mouseover", () => {
        // 1. Pega a largura e altura total da janela do navegador
        const larguraJanela = window.innerWidth;
        const alturaJanela = window.innerHeight;

        // 2. Gera uma posição aleatória (subtraindo 100px para o botão não sumir nas bordas)
        const novaPosicaoX = Math.random() * (larguraJanela - 100);
        const novaPosicaoY = Math.random() * (alturaJanela - 40);

        // 3. Aplica as novas coordenadas no estilo do botão
        botao.style.left = `${novaPosicaoX}px`;
        botao.style.top = `${novaPosicaoY}px`;
    });
});