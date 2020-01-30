function vogalOuConsoante(letra){
    var letr = letra.toLowerCase()
    
    if(letr=='a' || letr=='e' || letr=='i' || letr=='o' || letr==`u`){
        return "vogal"
    }else{
        return "consoante"
    }
}

