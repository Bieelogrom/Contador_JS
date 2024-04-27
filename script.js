var valor = 0

function contador(operacao){
    if(operacao == "adicionar"){
        valor += 1
        document.getElementById("valor").innerHTML = valor
    }else{
        valor -= 1
        document.getElementById("valor").innerHTML = valor
    }

}