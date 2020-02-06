function fizzbuzz(num1, num2){
    var i = num1
    while(i <= num2){
        if(i % 3 === 0 && i % 5 === 0){
            console.log(i + " FizzBuzz")
            i++
            
        }
        
        if(i % 5 === 0){
            console.log(i + "Buzz")
            i++
        }
        
        if(i % 3 === 0){
            console.log(i + "Fizz")
            i++
        }
        
    }
}

