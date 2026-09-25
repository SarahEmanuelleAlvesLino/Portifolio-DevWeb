// =============================================================
// SCRIPT.JS — BOTÃO DE TEMA (CLARO / ESCURO)
// Ao clicar no botão, liga ou desliga a classe "tema-escuro" no <body>.
// O CSS (tema-escuro.css) cuida de trocar as cores.
// =============================================================

// 1. Pega o botão de tema na página (pela classe .botao-tema)
const botaoTema = document.querySelector('.botao-tema');

// 2. Pega o ícone <i> que está dentro do botão
const icone = botaoTema.querySelector('i');

// 3. "Escuta" o clique no botão. A cada clique, a função abaixo roda.
botaoTema.addEventListener('click', function () {

    // toggle funciona como um interruptor:
    // se o body NÃO tem a classe "tema-escuro", ele coloca;
    // se já tem, ele tira.
    document.body.classList.toggle('tema-escuro');

    // contains verifica se a classe está ligada agora.
    // Resultado: true (escuro) ou false (claro).
    const estaEscuro = document.body.classList.contains('tema-escuro');

    // Troca o ícone do botão. Ele mostra o tema para onde você VAI:
    // no tema escuro aparece o sol (clique para voltar ao claro);
    // no tema claro aparece a lua (clique para ir ao escuro).
    // O "? :" é um if/else curto: condição ? valor_se_verdadeiro : valor_se_falso
    icone.className = estaEscuro ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
});
