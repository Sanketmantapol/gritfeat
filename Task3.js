function analyzeNumber(num) {
 
  if (num > 0) {
    console.log(`${num} is positive`);
  } else if (num < 0) {
    console.log(`${num} is negative`);
  } else {
    console.log(`${num} is zero`);
  }

  
  if (num % 2 === 0 && num % 3 === 0) {
    console.log(`${num} is divisible by both 2 and 3`);
  } else {
    console.log(`${num} is NOT divisible by both 2 and 3`);
  }
}

function checkMultiples(num, arr) {
  let found = false;

  arr.forEach(factor => {
    if (num % factor === 0) {
      console.log(`${num} is a multiple of ${factor}`);
      found = true;
    }
  });

  if (!found) {
    console.log(`${num} is NOT a multiple of any in [${arr.join(", ")}]`);
  }
}


let number = 10;

analyzeNumber(number);               
checkMultiples(number, [2, 3, 5]);    
