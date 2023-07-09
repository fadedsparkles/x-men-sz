/*

pra escrever várias linhas de comentário, ou apenas //
/*


/*
O que precisamos fazer? - quando passar o mouse em cima do personagem na lista, teremos que adicionar a borda azul
de seleção na imagem pequena do personagem e mostrar a imagem, o nome e o texto grande do personagem que está selecionado

    OBJETIVO 1 - quando passar o mouse em cima do personagem na listagem, devemos selecioná-lo
        passo 1 - pegar os personagens no JS para poder verificar quando o usuário passar o mouse em cima de um deles
        passo 2 - adicionar a classe selecionada no personagem que o usuário passou o cursor do mouse
        passo 3 - verificar se já existe um personagem selecionado, se sim, devemos remover a seleção 
        
    OBJETIVO 2 - quando passar o mouse em cima do personagem na listagem, trocar a imagem, o nome e a descrição do personagem 
        passo 1 - pegar o elemento do personagem grande para adicionar as informações nele
        passo 2 - alterar a imagem do personagem grande
        passo 3 - alterar o nome do personagem grande
        passo 4 - alterar a descrição do personagem grande
*/

// Objetivo 1 - passo 1

const personagens = document.querySelectorAll('.personagem')

// passo 2

personagens.forEach((personagem) => {
    console.log(personagem);
    personagem.addEventListener('mouseenter', () => {

        if(window.innerHeight < 450) {
            window.scrollTo(`{top: 0, behavior: 'smooth }`);
        }

        // passo 3
        const personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('selecionado')

            personagem.classList.add('selecionado');
    
     //Objetivo 2 - passo 1
     
     const imagemPersonagemGrande = document.querySelector('.personagem-grande');

     // passo 2
     const idPersonagem = personagem.attributes.id.value;
     imagemPersonagemGrande.src = `./src/imagens/imagens/card-${idPersonagem}.png`;
      
    // passo 3
    const nomePersonagem = document.getElementById('nome-personagem');
    nomePersonagem.innerText = personagem.getAttribute('data-name');
     
    //passo 4 
    const descricaoPersonagem = document.getElementById('descricao-personagem');
    descricaoPersonagem.innerText = personagem.getAttribute('data-description')

    })
})

