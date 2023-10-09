function login() {
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    if (email === 'cetafi@gmail.com' && senha === '123456') {
        document.getElementById('mensagem').innerHTML = 'Login autenticado';
        window.location.href = "add.html"; 
    } else {
        document.getElementById('mensagem').innerHTML = 'Login negado!';
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("formulario");

    formulario.addEventListener("submit", function (event) {
        event.preventDefault();

        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const telefone = document.getElementById("telefone").value;

        const usuario = {
            nome,
            email,
            telefone
        };

        adicionarUsuario(usuario);
        formulario.reset();
    });
});

function adicionarUsuario(usuario) {
    const listaUsuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    listaUsuarios.push(usuario);
    localStorage.setItem("usuarios", JSON.stringify(listaUsuarios));
    atualizarListaUsuarios();
}

document.addEventListener("DOMContentLoaded", function () {
    atualizarListaUsuarios();
});

function atualizarListaUsuarios() {
    const listaUsuarios = document.getElementById("listaUsuarios");
    const totalUsuarios = document.getElementById("totalUsuarios");

    const listaUsuariosLocal = JSON.parse(localStorage.getItem("usuarios")) || [];
    totalUsuarios.textContent = listaUsuariosLocal.length;

    listaUsuarios.innerHTML = "";

    listaUsuariosLocal.forEach(function (usuario, index) {
        const itemLista = document.createElement("li");
        itemLista.innerHTML = `
            Nome: ${usuario.nome}, 
            E-mail: ${usuario.email}, 
            Telefone: ${usuario.telefone}
            <button onclick="removerUsuario(${index})">Excluir</button>
        `;
        listaUsuarios.appendChild(itemLista);
    });
}

function removerUsuario(index) {
    const listaUsuariosLocal = JSON.parse(localStorage.getItem("usuarios")) || [];
    listaUsuariosLocal.splice(index, 1);
    localStorage.setItem("usuarios", JSON.stringify(listaUsuariosLocal));
    atualizarListaUsuarios();
}



function exibirMensagem() {

    const valor1 = parseFloat(document.getElementById("valor1").value);
    const valor2 = parseFloat(document.getElementById("valor2").value);
    const valor3 = parseFloat(document.getElementById("valor3").value);

    
    if (isNaN(valor1) || isNaN(valor2) || isNaN(valor3)) {
        document.getElementById("mensagem").textContent = "Por favor, insira três valores válidos.";
    } else {
        const total = valor1 + valor2 + valor3;
        document.getElementById("mensagem").textContent = `Este usuário deve ${total.toFixed(2)}`;
    }
}


