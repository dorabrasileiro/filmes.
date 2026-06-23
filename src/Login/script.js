function cadastro(){
    var nome = $("#user").val()
    var senha = $("#senha").val()
    var index = parseInt(localStorage.getItem("usuario_index") || "0")

    const login = {
        user: nome,
        senha: senha
    }
    localStorage.setItem(`usuario${index}`, JSON.stringify(login))
    localStorage.setItem("usuario_index", index + 1)
}
