let lista = []

function enviar(){
    let msg = document.getElementById("mensagem")
    let nome = document.getElementById("nome").value 
    let cpf = parseInt(document.getElementById("cpf").value)
    let salario = parseInt(document.getElementById("salario").value)
    let botoes = document.getElementsByName("botao")
    let listaHTML = "<ul>"
    
    class Professor {
            
        constructor(nome, cpf, salario){
            this.nome = nome 
            this.cpf = cpf 
            this.salario = salario
        }

    }

    let prof = new Professor(nome, cpf, salario)
    
    if(botoes[0].checked){

        lista.push(prof)

        console.log(lista)
    
        document.getElementById('nome').value = ''
        document.getElementById('cpf').value = ''
        document.getElementById('salario').value = ''

        for(let i = 0; i < lista.length; i++){
            for(let j = 0; j < lista.length; j++){
                if(i == j){
                    continue;
                }
                else if(lista[i].cpf == lista[j].cpf){
                    alert("O cpf do professor "+lista[j].nome+" está duplicado.")
                    alert("Excluindo os dados do professor "+lista[j].nome+"...")
                    lista.pop(prof[i])
                }
            }

        }

        for(let i = 0; i < lista.length; i++){
            listaHTML += "<li>"+lista[i].nome+" - "+lista[i].cpf+" - "+lista[i].salario+"</li>"
        }
        listaHTML += "</ul>"
        msg.innerHTML = listaHTML
    }

    else if(botoes[1].checked){ 
        for(let i = 0; i < lista.length; i++){
            if(prof.cpf == lista[i].cpf){
                console.log(lista[i])
                return;
            }
        }

        console.log("Professor não cadastrado.")
    }

    else if(botoes[2].checked){
        for(let i = 0; i < lista.length; i++){
            if(prof.cpf == lista[i].cpf){
                console.log("Excluindo professor "+lista[i].nome+"...")
                lista.pop(prof[i])
            }
        }
    }

    else if(botoes[3].checked){
        for(let i = 0; i < lista.length; i++){
            if(prof.cpf == lista[i].cpf){
                lista.pop(prof[i])
                alert("Dados do professor alterado!")
            }
            else{
                alert("O professor não está cadastrado. Não há como alterar.")
            }
        }

        lista.push(prof)
        console.log(lista)
    }
}