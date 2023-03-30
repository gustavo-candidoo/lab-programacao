let lista_nome = []
let lista_opiniao = []
let total_sim = 0
let total_nao = 0
let por_sim
let por_nao

function enviar () {
    let nome = document.getElementById("nome").value
    let botao = document.getElementById("sim").checked

    lista_nome.push(nome)
    if(botao == true) {
        total_sim++
        lista_opiniao.push("sim")
    }
    else {
        total_nao++
        lista_opiniao.push("não")
    }

    calcularPorcentagem ()
    listarAluno()
}

function calcularPorcentagem () {
    por_sim = total_sim / lista_nome.length * 100
    por_nao = total_nao / lista_nome.length * 100

    document.getElementById("por_sim").innerHTML = "<h3>" + por_sim.toFixed(2) + "%</h3>"
    document.getElementById("por_nao").innerHTML = "<h3>" + por_nao.toFixed(2) + "%</h3>"
}

function listarAluno () {
    let lista_sim = ""
    let lista_nao = ""

    for(let i = 0; i < lista_opiniao.length; i++){
        if(lista_opiniao[i] == "sim"){
            lista_sim += "<h2>" + lista_nome[i] + "</h2><br>"
        }
        else{
            lista_nao += "<h2>" + lista_nome[i] + "</h2><br>"
        }
    }

    document.getElementById("lista_favor").innerHTML = lista_sim
    document.getElementById("lista_contra").innerHTML = lista_nao
}