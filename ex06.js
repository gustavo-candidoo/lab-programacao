let lista = []

function calcular() {
    let desvio, variancia 
    let altura = document.getElementById("altura").value 

    lista.push(altura)

    variancia = calcularVariancia()
    desvio = calcularDesvio()

    document.getElementById("variancia").innerHTML = variancia.toFixed(2)
    document.getElementById("desvio").innerHTML = desvio.toFixed(2)
}

function calcularVariancia() {
    let media = 0, variancia = 0

    // calcular a média das aultas
    for(let i = 0; i < lista.length; i++) {
        media += lista[i]
    }
    media = media / lista.length

    // calcular a variância
    for(let i = 0; i < lista.length; i++) {
        variancia += Math.pow(lista[i] - media, 2)
    }
    variancia = variancia / (lista.length)

    return variancia
}

function calcularDesvio() {
    return Math.sqrt(calcularVariancia())
}