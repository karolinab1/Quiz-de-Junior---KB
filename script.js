import alternativas from "./alternativas.js";

// Definindo as consts 
const alternativa1 = document.getElementById('alternativa1');
const alternativa2 = document.getElementById('alternativa2');
const alternativa3 = document.getElementById('alternativa3');
const alternativa4 = document.getElementById('alternativa4');

const titulo = document.getElementById('titulo');
const subtitulo = document.getElementById('subtitulo');

const alternativaLabel1 = document.getElementById('alternativaLabel1');
const alternativaLabel2 = document.getElementById('alternativaLabel2');
const alternativaLabel3 = document.getElementById('alternativaLabel3');
const alternativaLabel4 = document.getElementById('alternativaLabel4');

const buttons = document.getElementById('buttons');
const buttonVoltar = document.getElementById('voltar');
const telainicial = document.getElementById('tela-inicial');

const telaPerguntas = document.getElementById('tela-perguntas');
telaPerguntas.style.display = 'none';

const screenFinal = document.getElementById('tela-final');
screenFinal.style.display = 'none';

const pontuacao = document.getElementById('pontuacao'); 
const perguntas = alternativas;

// Variáveis globais
let perguntaAtual = 0; 
const totalPerguntas = 4;
let correct = 0



const verificarResposta = function () {
    const respostaEscolhida = document.querySelector('input[name="opcao"]:checked'); 

    if (respostaEscolhida) {
        const perguntaAtualObj = alternativas[perguntaAtual]; 
        const respostaCerta = perguntaAtualObj.respostaCerta; 

        if (respostaEscolhida.value === respostaCerta) {
            correct++; // Incrementa a pontuação
        }
    }
    
};

const comecar = function () {
    // Limpando a tela para começar
    const telainicial = document.getElementById('tela-inicial');
    const subtitleInicial = document.getElementById('subtitle-inicial');
    document.getElementById('comecar').style.cursor = 'default';
    telainicial.style.display = 'none'

    // Exibindo a tela de perguntas
    telaPerguntas.style.display = 'block';
    telaPerguntas.style.opacity = 1;
    telaPerguntas.style.zIndex = 1;
    telaPerguntas.style.pointerEvents = 'auto';
    document.getElementById('tela-perguntas').style.opacity = 1;
    buttons.style.opacity = 1;


    buttonVoltar.disabled = true;
    // Iniciando a primeira pergunta
    atualizarPergunta();
};

// Função para atualizar a pergunta
const atualizarPergunta = function () {
    const pergunta = alternativas[perguntaAtual];

    titulo.textContent = pergunta.titulo;
    titulo.style.fontWeight = '600';
    titulo.style.fontSize = '25px';
    subtitulo.textContent = pergunta.subtitulo;
    subtitulo.style.fontWeight = '600';
    
    // Atualiza alternativas
    alternativaLabel1.childNodes[2].textContent = pergunta.alternativas[0].alternativaLabel1;
    alternativaLabel2.childNodes[2].textContent = pergunta.alternativas[1].alternativaLabel2;
    alternativaLabel3.childNodes[2].textContent = pergunta.alternativas[2].alternativaLabel3;
    alternativaLabel4.childNodes[2].textContent = pergunta.alternativas[3].alternativaLabel4;
    
};


// Função para avançar para a próxima pergunta
const proximo = function () {
    const respostaEscolhida = document.querySelector('input[name="opcao"]:checked');

    if (!respostaEscolhida) {
        alert('É necessário selecionar uma opção para prosseguir');
        return;
    }

    verificarResposta();
    limparInputs();
    if (perguntaAtual < totalPerguntas - 1) {
        perguntaAtual++;
        atualizarPergunta(); 
        buttonVoltar.disabled = false;
    }
    else{
        telaFinal();
    }
};

const telaFinal = function (){
    
    console.log("Exibindo tela final...");

    telaPerguntas.style.display = 'none'
    screenFinal.style.display = 'block'
    const tituloFinal = document.getElementById('tituloFinal')

    
    tituloFinal.style.fontSize = '35px'
    tituloFinal.innerHTML = 'SEU RESULTADO É: '
    tituloFinal.style.fontWeight = '700'
    pontuacao.style.fontSize = '25px'
    pontuacao.style.fontWeight = '500'
    pontuacao.innerHTML = `Você acertou ${correct} de ${totalPerguntas} perguntas!`;

    
}

const reiniciar = function() {
    perguntaAtual = 0; 
    correct = 0;
    limparInputs();
    screenFinal.style.display = 'none';
    telainicial.style.display = 'flex';

}

const limparInputs = function () {
    const radios = document.querySelectorAll('input[name="opcao"]');

    radios.forEach(radio => {
        radio.checked = false;
    });
};

const voltar = function () {

    if (perguntaAtual > 0) {
        perguntaAtual--; 
        atualizarPergunta();
        buttonVoltar.disabled = false;
    }

    if (perguntaAtual === 0){
        buttonVoltar.disabled = true;
        console.log("Botão desabilitado");
    } 
};

// Tornando as funções globais
window.comecar = comecar;
window.proximo = proximo;
window.telaFinal = telaFinal;
window.verificarResposta = verificarResposta;
window.reiniciar = reiniciar;
window.voltar = voltar;