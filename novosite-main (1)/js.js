const listagemPosts = document.querySelector('#listagemDePosts');

const dadosDosPosts = [
    {titulo: 'Título 1', resumo: 'resumo vai aqui...', urlImagem:'/img/caixa.png', link:'/indexx.html'},
    {titulo: 'Título post 2', resumo: 'resumo do 2 vai aqui...', urlImagem:'/img/caixa.png', link: ''},
    {titulo: 'Título do post 3', resumo: 'resumo do 3.', urlImagem:'/img/caixa.png', link: ''}
    
];

let numPosts = dadosDosPosts.length;

for(i=0; i<numPosts; i++) {
    const dadosDoPost = dadosDosPosts[i];

    const itemLista = document.createElement('article');
    itemLista.innerHTML = `

        <header>
        <h4>${dadosDoPost.titulo}</h4>
        </header>
        <a href=${dadosDoPost.link} >
            <img src='${dadosDoPost.urlImagem}' width=50%>
        </a>
        <main>
            ${dadosDoPost. resumo}
        </main>
        
    `;
    listagemPosts.appendChild(itemLista);

}

