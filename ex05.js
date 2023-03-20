let listaProduto = []
let listaPreco = []
let listaEstoque = []
let aux = ""
let total = 0

function calcular () {
    let produto = document.getElementById("produto").value
    let preco = document.getElementById("preco").value 
    let estoque = document.getElementById("estoque").value 
    let lucro

    listaProduto.push(produto)
    listaEstoque.push(preco)
    lucro = calcularLucro(preco)
    listaPreco.push(lucro)

    total += estoque * lucro
    aux += produto + " --> R$ " + lucro.toFixed(2) + "<br>"

    document.getElementById("listaProduto").innerHTML = aux
    document.getElementById("total").innerHTML = total.toFixed(2)
}

function calcularLucro (preco) {
    if (preco <= 40) {
        return preco * 1.15
    }
    else if (preco <= 80) {
        return preco * 1.30
    }
    return preco * 1.50
}