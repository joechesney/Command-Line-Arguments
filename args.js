#!/usr/bin/env node

const [,,...input] = process.argv;
//couldnt figure out how to put default value into this above statement
let sum;
if(input.length === 0){
  sum = 0;
}else{
  sum = input.map((value)=>+value).reduce((acc, curr)=>acc+=curr);
}

console.log('sum: ',sum);