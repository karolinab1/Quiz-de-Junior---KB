export default [
    {
        titulo: "Pergunta 1 de 4",
        subtitulo: "Qual é a finalidade do elemento <head> em um documento HTML, e quais tipos de informações geralmente são inseridas nele, como links para arquivos CSS, metadados ou o título da página?",
        alternativas: [
            {alternativaLabel1: "(A) Contém o conteúdo visível da página exibido no navegador.", value: "A"},
            {alternativaLabel2: "(B) Define o rodapé do documento com informações de copyright.", value: "B"},
            {alternativaLabel3: "(C) Armazena informações não exibidas diretamente, como título e links externos.", value: "C"},
            {alternativaLabel4: "(D) Cria uma estrutura para listas ordenadas e não ordenadas.", value: "D"},
        ],
        respostaCerta: "C",
    },

    {
        titulo: "Pergunta 2 de 4",
        subtitulo: "Se você precisar exibir uma lista ordenada de passos para completar uma tarefa, qual elemento HTML você usaria e como poderia configurar os itens para aparecerem em ordem numérica? Alternativas:",
        alternativas: [
            {alternativaLabel1: "(A) Usaria <ul> com estilo CSS personalizado para números.", value: "A"},
            {alternativaLabel2: "(B) Utilizaria <ol> para criar a lista automaticamente numerada.", value: "B"},
            {alternativaLabel3: "(C) Aplicaria <li> diretamente, sem um contêiner específico.", value: "C"},
            {alternativaLabel4: "(D) Usaria <dl> para definir cada passo com uma descrição.", value: "D"},
        ],
        respostaCerta: "B", 
    },

    {
        titulo: "Pergunta 3 de 4",
        subtitulo: "Se você quiser centralizar um elemento na página tanto horizontal quanto verticalmente usando Flexbox, quais propriedades você aplicaria ao contêiner pai no CSS? Alternativas:",
        alternativas: [
            {alternativaLabel1: "(A) display: grid; align-items: top; justify-content: left;", value: "A"},
            {alternativaLabel2: "(B) display: flex; align-items: center; justify-content: center;", value: "B"},
            {alternativaLabel3: "(C) display: flex; margin: auto; padding: auto;", value: "C"},
            {alternativaLabel4: "(D) display: inline-flex; align-content: middle; text-align: center;", value: "D"},
        ],
        respostaCerta: "B",
    },

    {
        titulo: "Pergunta 4 de 4",
        subtitulo: "Como o modelo de caixa no CSS funciona, e quais são os principais componentes (como margem, borda, padding e conteúdo) que afetam o tamanho total de um elemento? Alternativas:",
        alternativas: [
            {alternativaLabel1: "(A) Ele apenas considera o conteúdo interno, ignorando margem e borda.", value: "A"},
            {alternativaLabel2: "(B) Ele inclui conteúdo, padding, borda e margem no tamanho total.", value: "B"},
            {alternativaLabel3: "(C) Ele desativa automaticamente margens para simplificar o layout.", value: "C"},
            {alternativaLabel4: "(D) Ele exclui a borda e o padding ao calcular o tamanho total.", value: "D"},
        ],
        respostaCerta: "B",
    },
];