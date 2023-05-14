// passo 1 - pegar no JS o elemento HTML correspondente ao botão de troca de tema
const botaoAlterarTema = document.getElementById("button-change-theme");

// passo 2 - dar um jeito de pegar no JS o elemento HTML correspondente ao body
const body = document.querySelector("body");

const imagemBotaoTrocadeTema = document.querySelector(".image-button");

// passo 3 - dar um jeito de identificar o clique do usuário no botão de troca de tema
botaoAlterarTema.addEventListener("click", () => {
    // passo 6 - verificar se o body já tem a classe "modo escuro"
    const modoEscuroEstaAtivo = body.classList.contains("night-theme");

    // toggle faz a verificação se há o efeito da classe solicitar, se houver ele tira, se não houver ele adiciona, podendo substituir um .add e .remove
    body.classList.toggle("night-theme");

    if (modoEscuroEstaAtivo) {
        // passo 8 - trocar a imagem do botão de alterar tema pra Sol
        imagemBotaoTrocadeTema.setAttribute("src", "./imagens/sun.png");
    } else {
        // passo 5 - trocar a imagem do botão de alterar tema pra lua
        imagemBotaoTrocadeTema.setAttribute("src", "./imagens/moon.png");
    }
});
