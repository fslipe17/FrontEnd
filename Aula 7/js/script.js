function executar(event) {
    event.preventDefault();

    limparForm();
    validarForm();
}

function validarForm() {
    const nome = document.querySelector("#nome").value;
    const erroNome = document.querySelector("#erro-nome");

    if(nome === "") {
        erroNome.textContent = "Nome não pode estar vazio !!";
        erroNome.classList.add("erro");
        erroNome.classList.remove("oculto");
    }

    const idade = document.querySelector("#idade").value;
    const erroIdade = document.querySelector("#erro-idade");

    if (idade === "") {
        erroIdade.textContent = "Idade não pode estar vazia !!";
        erroIdade.classList.add("erro");
        erroIdade.classList.remove("oculto");
    } else if (!/^[0-200]+$/.test(idade)) {
        erroIdade.textContent = "Digite apenas numeros !!";
        erroIdade.classList.add("erro");
        erroIdade.classList.remove("oculto");
    } else if(Number(idade) < 18) {
        erroIdade.textContent = "É necessário ser mais de 18 anos !!";
        erroIdade.classList.add("erro");
        erroIdade.classList.remove("oculto");
    }

    const email = document.querySelector("#email").value;
    const erroEmail = document.querySelector("#erro-email");
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailRegex.test(email)){
        erroEmail.textContent = "Erro ao digitar email";
        erroEmail.classList.add("erro");
        erroEmail.classList.remove("oculto");
    } else {
        erroEmail.classList.remove("erro");
        erroEmail.classList.add("oculto");
    }
    // alert(`Bem-Vindo ${nome}. Você tem ${idade} anos. E-Mail: ${email}`)

    const termos = document.querySelector("#termos");
    const erroTermos = document.querySelector("#erro-termos");

    if (!termos.checked) {
        erroTermos.textContent = "É necessário aceitar os termos !!";
        erroTermos.classList.add("erro");
        erroTermos.classList.remove("oculto");
    }

    const concluido = document.querySelector("#concluido");
    const valido = document.querySelector(".erro");

    if (!valido) {
        concluido.textContent = "Corrija os erros antes de prosseguir";
        concluido.classList.add("erro");
        concluido.classList.remove("oculto");
    } else{
        concluido.textContent = "Cadastro concluido com sucesso !!";
        concluido.classList.remove("erro");
        concluido.classList.add("oculto");
    }
}

function limparForm (){
    document.querySelectorAll(".erro").forEach( (item) => {
        item.classList.remove("erro");
        item.classList.add("oculto");
    });
    document.querySelector("#concluido").classList.add("oculto");
}