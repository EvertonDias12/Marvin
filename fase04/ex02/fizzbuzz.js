function fizzbuzz(num1, num2){
   
    while(num1 <= num2){
        if(num1 % 3 === 0 && num1 % 5 === 0){
            console.log(num1 + " FizzBuzz")
            num1++
        }
        
        if(num1 % 5 === 0){
            console.log(num1 + " Buzz")
            num1++
        }
        
        if(num1 % 3 === 0){
            console.log(num1 + " Fizz")
            num1++
            
        }
        console.log(num1)
        num1++
    }
}

