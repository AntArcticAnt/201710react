let arr = [1,2,3];
let sum =  (a,b,c)=>a+b+c;
let r = sum.call(null,1,2,3);
//let r = sum.apply(null,arr);
console.log(r);