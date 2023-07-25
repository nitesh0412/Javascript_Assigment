
let primeTest = (num) =>
{
    if (num === 0 || num === 1)
    {
        return console.log("Number is not prime");
    }else {
    for(i=2;i<num;i++)
    {
        if(num%i === 0)
        {
            console.log("Not Prime number" , num[i])
            return 
        }
    }
         console.log("Prime number")
    
}
}
// primeTest(45);


let fibonacciTest = (num) => {
    let x = 0; 
    let y = 1; 
    let sum = 1;
  
    for (let i = 2; i <= num; i++) {
      let z = x + y;
      sum = sum + z;
      x = y;
      y = z;
    }
  
    return sum;
  }
        

// console.log(fibonacciTest(5))

let countTest= (...num) =>
{     let zero_count = 0
      let odd_count = 0
      let even_count = 0

      for(i=0;i<num.length;i++){
      if(num[i] == 0){
        zero_count ++
      }
      else if(num[i]%2 == 0)
      {
        even_count++
      }
      else
      {
        odd_count++;
      }
    }
      return console.log("Zeros = ", zero_count,"Even_count", even_count,"odd_count",odd_count)
}


//countTest(10,20,30,3,71,43,0,0)
// console.log(fibonacciTest(5))
// primeTest(45);

