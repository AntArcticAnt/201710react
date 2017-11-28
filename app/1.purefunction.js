/**
 * 1. 绝对不能修改输入的参数
 * 2. 输入的参数一定，输出的结果也是永远一定的
 */
let sum = (a,b)=>a+b;
//不是绝函数，因为它修改了它的参数
let increase = obj => {
  obj.age +=1;
  return obj;
}
let decrease = ()=> Math.random();