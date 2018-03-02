#!/usr/bin/env node

const [,,...input] = process.argv;
//couldnt figure out how to put default value into this above statement
if(input === undefined){
  input = 0;
}
// console.log('input',input);
// const nums = input.map((value, index )=>+value);
// const sum = nums.reduce((acc, curr)=>{
//   return acc+=curr;
// })
const sum = input.map((value)=>+value).reduce((acc, curr)=>acc+=curr);
// console.log('nums',nums);
console.log('sum: ',sum);