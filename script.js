    function redirecionarpágina(event) {
    event.preventDefault();
    window.location.href = "indexregistro.html";
}
function confirmarsenha(event) {
    event.preventDefault();

    const password = document.getElementById('isenha').value;
    const confirmPassword = document.getElementById('isenha_confirm').value;

    if (password !== confirmPassword) {
        alert('As senhas não coincidem.');
        return false;
    }

    window.location.href = "index.html"; 
    return true;
}

document.getElementById('Tipoproduto').addEventListener('change', function() {
    const cardContainer = document.getElementById('cardcardgrande');
    cardContainer.innerHTML = '';

    const selectedValue = this.value;
    if (selectedValue) {
        const card = document.createElement('div');
        card.className = 'card';

        const cardconteudo = document.createElement('div');
        cardconteudo.textContent = "Selecione entre os tipos de produtos: " + selectedValue;

        card.appendChild(cardconteudo);
        cardContainer.appendChild(card);

        if (selectedValue === 'hortifrutes') {
            const imgElement = document.createElement("img");
            imgElement.src = 'https://cdn-icons-png.flaticon.com/512/883/883760.png';
            imgElement.id = 'Imagem';
            cardconteudo.appendChild(imgElement);

            
            card.addEventListener("mouseover", () => {
                imgElement.style.display = 'block';
            });

            card.addEventListener("mouseout", () => {
                imgElement.style.display = 'none';
            });
        }
    }
});
