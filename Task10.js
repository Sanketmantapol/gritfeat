function outer(specificNumber) {
  return function inner(number) {
    return number + specificNumber;
  };
}

const addFive = outer(5);
console.log(addFive(10));  

const addTen = outer(10);
console.log(addTen(7));    
