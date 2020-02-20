function meuNome(obj){
    var nome = obj.nome
    var primeiraLetra = nome.toUpperCase().substring(1,0)
    var resto = nome.substring(1).toLowerCase()
    
    return primeiraLetra + resto
    
    
}


