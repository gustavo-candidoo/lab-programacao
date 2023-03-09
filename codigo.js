function converter(){
    let resultado, escala
    let temperatura = document.getElementById("temperatura").value
    let radio = document.getElementsByName("conversao")

    for(let i = 0; i < radio.length; i++){
        if(radio[i].checked){
            escala = radio[i].value
            break
        }
    }

    if(escala == "celsius"){
        resultado = converterParaCelsius(temperatura)
    }
    else{
        resultado = converterParaFahrenheit(temperatura)
    }

    document.getElementById("msg").innerHTML = resultado
}

function converterParaCelsius(temperatura){
    return (temperatura - 32) * 5 / 9
}

function converterParaFahrenheit(temperatura){
    return temperatura * 1.8 + 32
}

function calcular(lista){
    let lista = []
    valor = document.getElementById("valor").value
    lista.push(valor)
    let soma = calcularSoma(lista)
    let media = calcularMedia(lista)
    document.getElementById("soma").innerHTML = soma
    document.getElementById("media").innerHTML = media
}

function calcularSoma(lista){
    let soma = 0
    for(let i = 0; i < lista.length; i++){
        soma += lista[i]
    }
    return soma
}

function calcularMedia(lista){
    let media = calcularSoma(lista) / lista.length 
    return media
}