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


// =============================================================
// CABEÇALHO TRANSPARENTE AO ROLAR A PÁGINA
// Quando a pessoa rola a página para baixo, o cabeçalho ganha a
// classe "rolado". Essa classe é o "gatilho" que o CSS
// (cabecalho.css) usa para deixar o fundo transparente com efeito de vidro.
// =============================================================

// 4. Pega o cabeçalho na página (pela classe .cabecalho)
const cabecalho = document.querySelector('.cabecalho');

// 5. "Escuta" a rolagem da janela. A função roda toda vez que a página rola.
window.addEventListener('scroll', function () {

    // window.scrollY é o quanto a pessoa já rolou, em pixels, a partir do topo.
    // Passou de 30px? Liga a classe "rolado".
    // Voltou para perto do topo? Desliga a classe, e o cabeçalho fica sólido de novo.
    if (window.scrollY > 30) {
        cabecalho.classList.add('rolado');
    } else {
        cabecalho.classList.remove('rolado');
    }
});
