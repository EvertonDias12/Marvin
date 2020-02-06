function tempo(data1, data2, unidade){
    var dataIni = new Date(data1)
    var dataFim = new Date(data2)
    
    switch(unidade){
    case "dia":
        var periodo = Math.abs(dataIni.getTime() - dataFim.getTime())/1000/60/60/24
        return Math.round(periodo)
        break;
        
    case "mês":
        var perido = Math.abs(dataIni.getTime() - dataFim.getTime())/1000/60/60/24/30
        return Math.round(perido)
        break;
    
    case "ano":
        var perido = Math.abs(dataIni.getTime() - dataFim.getTime())/1000/60/60/24/30/12
        return Math.round(perido)
        break;
        
    
    }
}


