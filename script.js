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
        cardconteudo.textContent = document.getElementById("Imagem").innerHTML = "<img src='img/ico1.png'>";
        card.appendChild(cardconteudo);
        cardContainer.appendChild(card);
    }
});

function thisIsjoseph() {
    let jose = prompt('Digite a senha do seu banco: ');
    alert(`Como voce caiu nessa e digitou sua senha que é ${jose}`);
    console.log(`a senha é ${jose}`);
}
