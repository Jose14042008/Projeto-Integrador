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
{ imgSrc: 'https://cdn-icons-png.flaticon.com/256/3137/3137044.png', descricao: '1 kg Maçã', preco: 'R$ 6,00' },
{ imgSrc: 'https://cdn-icons-png.flaticon.com/512/3137/3137032.png', descricao: '1 kg Laranja', preco: 'R$ 6,00' },
{ imgSrc: 'https://cdn-icons-png.flaticon.com/512/928/928143.png', descricao: '1 kg Abacaxi', preco: 'R$ 13,00' },

            );
        } else if (selectedValue === 'naturais') {
            produtos.push(
{ imgSrc: 'https://i.imgur.com/dCtbu55.png', descricao: '1 kg arroz', preco: 'R$ 8,69' },
{ imgSrc: 'https://cdn-icons-png.flaticon.com/512/1921/1921315.png', descricao: '1 Feijão', preco: 'R$ 5,00' },

            );
        } else if (selectedValue === 'salgados e doces') {
            produtos.push(
{ imgSrc: 'https://cdn-icons-png.flaticon.com/512/1921/1921315.png', descricao: '1 unidade Pastel', preco: 'R$ 5,00' },
{ imgSrc: 'https://cdn-icons-png.flaticon.com/512/1921/1921315.png', descricao: '1 unidade Coxinha', preco: 'R$ 5,00' },
{ imgSrc: 'https://cdn-icons-png.flaticon.com/512/1921/1921315.png', descricao: '1 unidade Esfirra', preco: 'R$ 5,00' },
{ imgSrc: 'https://cdn-icons-png.flaticon.com/512/1921/1921315.png', descricao: '1 unidade Bolo', preco: 'R$ 5,00' },
{ imgSrc: 'https://cdn-icons-png.flaticon.com/512/1921/1921315.png', descricao: '1 unidade Brigadeiro', preco: 'R$ 5,00' },
{ imgSrc: 'https://www.jauserve.com.br/dw/image/v2/BFJL_PRD/on/demandware.static/-/Sites-jauserve-master/default/dw55f1c932/7180.png?sw=1800', descricao: '1 unidade Sonho', preco: 'R$ 5,00' },

            );
        } else if (selectedValue === 'artesanatos') {
            produtos.push(
{ imgSrc: 'https://static.vecteezy.com/ti/vetor-gratis/p1/5362042-dobrado-toalha-ou-pano-pilha-de-tecido-desenho-linha-isolado-cartoon-preto-e-branco-ilustracao-embalado-roupas-limpas-vetor.jpg', descricao: '1 peça pano de prato', preco: 'R$ 2,70' }

            );
        } else if (selectedValue === 'bebidas') {
            produtos.push (
{ imgSrc: 'https://cdn-icons-png.flaticon.com/512/2554/2554142.png', descricao: '1 unidade de Água (500 ml)', preco: 'R$ 2,50'},
{ imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXc2tHTPQ9Uz-AX_ODvky9BOa7acG1MrpCHQ&s', descricao: '1 unidade Chopp', preco: 'R$ 5,00' },
{ imgSrc: 'https://png.pngtree.com/png-vector/20200531/ourlarge/pngtree-softdrink-illustration-in-icon-drawn-style-png-image_2216367.jpg', descricao: '1 unidade Refrigerante', preco: 'R$ 5,00' },


                
            )
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
