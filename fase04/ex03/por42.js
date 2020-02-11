function por42(num1, num2){
	var mult = 42
  var cont = 2
  var flag = 0
  var result = null;
  while (mult < num2){
  	if(mult > num1){
      
      if (flag == 1) {
					result = mult
      } else {
				flag = 1
      } 
  	} 
    mult = 42 * cont
    cont++ 
  }
  if (!result) {
  	console.log('Não Encontrado');
    return false;
  } 
  return result;
}

