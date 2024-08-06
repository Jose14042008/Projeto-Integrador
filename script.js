document.getElementById('Tipoproduto').addEventListener('change', function() {
    const cardContainer = document.getElementById('cardcardgrande');
    cardContainer.innerHTML = '';

    const selectedValue = this.value;
    if (selectedValue) {
        const card = document.createElement('div');
        card.className = 'card';

        const cardConteudo = document.createElement('div');
        cardConteudo.className = 'card-conteudo';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'produto-checkbox';

        const imgElement = document.createElement("img");
        imgElement.className = 'produto-imagem';

        const descricao = document.createElement('p');
        descricao.className = 'descricao';

        const preco = document.createElement('p');
        preco.className = 'preco';

        if (selectedValue === 'hortifrutes') {
            imgElement.src = 'https://cdn-icons-png.flaticon.com/512/883/883760.png';
            descricao.textContent = "1 kg cenoura";
            preco.textContent = "R$ 5,10";
        } else if (selectedValue === 'naturais') {
            imgElement.src = 'https://i.imgur.com/dCtbu55.png';
            descricao.textContent = "1 kg arroz";
            preco.textContent = "R$ 8,69";
        } else if (selectedValue === 'salgados e doces') {
            imgElement.src = 'https://cdn-icons-png.flaticon.com/512/1921/1921315.png';
            descricao.textContent = "1 unidade pastel";
            preco.textContent = "R$ 5,00";
        } else if (selectedValue === 'artesanatos') {
            imgElement.src = 'https://static.vecteezy.com/ti/vetor-gratis/p2/5362042-dobrado-toalha-ou-pano-pilha-de-tecido-desenho-linha-isolado-cartoon-preto-e-branco-ilustracao-embalado-roupas-limpas-vetor.jpg';
            descricao.textContent = "1 peça pano de prato";
            preco.textContent = "R$ 2,70";
        }

        const cardLeft = document.createElement('div');
        cardLeft.className = 'card-left';
        cardLeft.appendChild(checkbox);
        cardLeft.appendChild(imgElement);

        const cardRight = document.createElement('div');
        cardRight.className = 'card-right';
        cardRight.appendChild(descricao);
        cardRight.appendChild(preco);

        cardConteudo.appendChild(cardLeft);
        cardConteudo.appendChild(cardRight);

        card.appendChild(cardConteudo);
        cardContainer.appendChild(card);
    }
});
