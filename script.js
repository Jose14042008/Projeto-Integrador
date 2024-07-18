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

        const cardconteudo = document.createElement('option');
        cardconteudo.textContent = `nossa mas vai dar trabalho em`;

        card.appendChild(cardconteudo);
        cardContainer.appendChild(card);
    }
});
