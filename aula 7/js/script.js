function executar(event) {
    event.preventDefault();

    const nome = document.querySelector("#nome").value;
    const idade = document.querySelector("#idade").value;
    const email = document.querySelector("#email").value

    alert(`Bem-Vindo ${nome}. Você tem ${idade} anos. E-Mail: ${email}`)
}