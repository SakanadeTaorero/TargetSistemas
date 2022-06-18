function isFibonacci(num, a = 0, b = 1) {
    if(num === 0 || num === 1) {
      return true;
    }
  
    let nextNumber = a+b;
  
    if(nextNumber === num) {
      return "Este numero é fibonacci";
    }
    else if(nextNumber > num) {
      return "Este numero não é fibonacci";
    }
  
   return isFibonacci(num, b, nextNumber);
  }

console.log(isFibonacci(13));