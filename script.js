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
