
function descriptografar(){
    let alfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let frase = document.getElementById("mensagem").value 
    frase.toLowerCase()
    let newfrase = frase.split("")
    let desloc = document.getElementById("desloc").value
    let msg = document.getElementById("msg")
    let aux = ""

    for(let i = 0; i < newfrase.length; i++){

        if(newfrase[i] == " "){
            aux += " "
        }

        for(let j = 0; j < alfabeto.length; j++){
            if(newfrase[i] == alfabeto[j]){
                if(alfabeto[j] > alfabeto[2]){
                    aux += alfabeto[j - desloc]
                }
                else{
                    aux += alfabeto[25 + j - desloc]  
                }
                    
            }
        }
    }

    msg.innerHTML = aux
}