document.getElementById('Tipoproduto').addEventListener('change', function() {
    const cardContainer = document.getElementById('cardcardgrande');
    cardContainer.innerHTML = '';

    const selectedValue = this.value;
    if (selectedValue) {
        const produtos = [];

        if (selectedValue === 'hortifrutes') {
            produtos.push(
                { imgSrc: 'https://cdn-icons-png.flaticon.com/512/883/883760.png', descricao: '1 kg cenoura', preco: 'R$ 5,10' },
                { imgSrc: 'https://cdn-icons-png.flaticon.com/512/1202/1202125.png', descricao: '1 kg tomate', preco: 'R$ 6,00' },
                { imgSrc: 'https://cdn-icons-png.flaticon.com/512/2347/2347045.png', descricao: '1 kg Brócolis', preco: 'R$ 6,00' },
                { imgSrc: 'https://cdn-icons-png.flaticon.com/512/1155/1155257.png', descricao: '1 kg Alface', preco: 'R$ 6,00' },
                { imgSrc: 'https://cdn-icons-png.flaticon.com/256/3137/3137044.png', descricao: '1 kg Maçã', preco: 'R$ 6,00' },
                { imgSrc: 'https://cdn-icons-png.flaticon.com/512/3137/3137032.png', descricao: '1 kg Laranja', preco: 'R$ 6,00' },
                { imgSrc: 'https://cdn-icons-png.flaticon.com/512/3367/3367210.png', descricao: '1 kg Abacaxi', preco: 'R$ 13,00' }
            );
        } else if (selectedValue === 'naturais') {
            produtos.push(
                { imgSrc: 'https://i.imgur.com/dCtbu55.png', descricao: '1 kg arroz', preco: 'R$ 8,69' },
                { imgSrc: 'https://i.imgur.com/sykPXRD.png', descricao: '1 Feijão', preco: 'R$ 5,00' },
                { imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMnL4XM3wgHpo5DfpCEPJ0uTcIsHK384pzMA&s', descricao: '1 chá mate', preco: 'R$ 2,00' },
                { imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScL89obYDsdNl6mfF0obgA_DM0sdJbeeTejw&s', descricao: '1 cereal leite', preco: 'R$ 2,00' },
                { imgSrc: 'https://cdn.awsli.com.br/600x450/1563/1563255/produto/58732360/2b4b550a53.jpg', descricao: '1 kg Açúcar mascavo', preco: 'R$ 13,00' },
                { imgSrc: 'https://cdn.awsli.com.br/600x450/4/4552/produto/38936992/430e48b86c.jpg', descricao: '1 aveia', preco: 'R$ 2,00' }
            );
        } else if (selectedValue === 'salgados e doces') {
            produtos.push(
                { imgSrc: 'https://cdn-icons-png.flaticon.com/512/1921/1921315.png', descricao: '1 unidade Pastel', preco: 'R$ 5,00' },
                { imgSrc: 'https://i.imgur.com/OFVIxj9.png', descricao: '1 unidade Coxinha', preco: 'R$ 5,00' },
                { imgSrc: 'https://static.vecteezy.com/system/resources/previews/021/217/286/original/arabian-esfiha-esfirra-brazilian-snack-png.png', descricao: '1 unidade Esfirra', preco: 'R$ 5,00' },
                { imgSrc: 'https://cdn-icons-png.flaticon.com/512/442/442471.png', descricao: '1 unidade Bolo', preco: 'R$ 5,00' },
                { imgSrc: 'https://static.vecteezy.com/ti/vetor-gratis/p3/15681711-de-brigadeiro-brasileiro-tradicional-brigadeiro-fofinho-doces-de-chocolate-em-estilo-cartoon-em-branco-vetor.jpg', descricao: '1 unidade Brigadeiro', preco: 'R$ 5,00' },
                { imgSrc: 'https://media.gettyimages.com/id/1283762165/pt/vetorial/sonho-icon-on-transparent-background.jpg?s=612x612&w=0&k=20&c=-M2lBeducSa-5RdsZYd1QK9bJsTRPEIVn7UhMYNAJmA=', descricao: '1 unidade Sonho', preco: 'R$ 5,00' }
            );
        } else if (selectedValue === 'artesanatos') {
            produtos.push(
                { imgSrc: 'https://static.vecteezy.com/ti/vetor-gratis/p1/5362042-dobrado-toalha-ou-pano-pilha-de-tecido-desenho-linha-isolado-cartoon-preto-e-branco-ilustracao-embalado-roupas-limpas-vetor.jpg', descricao: '1 peça pano de prato', preco: 'R$ 2,70' },
                { imgSrc: 'https://http2.mlstatic.com/D_NQ_NP_768892-MLB70216118002_062023-O.webp', descricao: '1 capa de butjão de gas', preco: 'R$ 10,70' },
                { imgSrc: 'https://i.imgur.com/7QcqDsB.jpg', descricao: '1 peça pano de chão', preco: 'R$ 2,70' }
            );
        } else if (selectedValue === 'bebidas') {
            produtos.push(
                { imgSrc: 'https://cdn-icons-png.flaticon.com/512/2554/2554142.png', descricao: '1 unidade de Água (500 ml)', preco: 'R$ 2,50' },
                { imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXc2tHTPQ9Uz-AX_ODvky9BOa7acG1MrpCHQ&s', descricao: '1 unidade Chopp', preco: 'R$ 5,00' },
                { imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGNhDswpyfKzARJldh2w8v9c8Ep9jYEIvthkZFNSSfU2LF56LSvi_kUluVLghy4jF70kk&usqp=CAU', descricao: '1 unidade Refrigerante (350 ml)', preco: 'R$ 5,00' },
                { imgSrc: 'https://cdn-icons-png.flaticon.com/512/924/924514.png', descricao: '1 unidade Café', preco: 'R$ 2,00' },
                { imgSrc: 'https://cdn-icons-png.flaticon.com/512/2007/2007859.png', descricao: '1 unidade Pingado', preco: 'R$ 2,00' }
            );
        }

        produtos.forEach(produto => {
            const card = document.createElement('div');
            card.className = 'card';

            const cardConteudo = document.createElement('div');
            cardConteudo.className = 'card-conteudo';

            const cardLeft = document.createElement('div');
            cardLeft.className = 'card-left';

            const imgElement = document.createElement('img');
            imgElement.className = 'produto-imagem';
            imgElement.src = produto.imgSrc;

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.className = 'produto-checkbox';
            checkbox.onclick = toggleBotao; // Adiciona o evento de clique

            cardLeft.appendChild(checkbox);
            cardLeft.appendChild(imgElement);

            const cardRight = document.createElement('div');
            cardRight.className = 'card-right';

            const descricao = document.createElement('p');
            descricao.className = 'descricao';
            descricao.textContent = produto.descricao;

            const preco = document.createElement('p');
            preco.className = 'preco';
            preco.textContent = produto.preco;

            cardRight.appendChild(descricao);
            cardRight.appendChild(preco);

            cardConteudo.appendChild(cardLeft);
            cardConteudo.appendChild(cardRight);
            card.appendChild(cardConteudo);
            cardContainer.appendChild(card);
        });
    }
});

function toggleBotao() {
    const checkboxes = document.querySelectorAll('.produto-checkbox');
    const botao = document.getElementById('meuBotao');
    let algumaCheckboxMarcada = false;

    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            algumaCheckboxMarcada = true;
        }
    });

    if (algumaCheckboxMarcada) {
        botao.style.display = 'block'; // Mostra o botão
    } else {
        botao.style.display = 'none'; // Oculta o botão
    }
}
