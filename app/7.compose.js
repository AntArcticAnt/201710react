/**
 * 这个compose的方法和逻辑在很多地方会用到
 * 比如说中间件里，比如说koa的中间件。。。。。
 * compose 就是把多个函数组合成一个函数调用
 */
function join(a) {
  return a + 1;
}
function upperCase(str) {
  return str.toUpperCase();
}
function length(str) {
  return str.length;
}

//let str = length(upperCase(join('a','b')));
//console.log(str);
// [length,upperCase,join]
/*function compose(...fns){
 if(fns.length<=0){
 return;
 }else if(fns.length==1){
 return function(...args){
 return fns[0](...args);
 }
 }else{
 let last = fns.pop();//last=join
 return function(...args){//[a,b]
 return fns.reduceRight((val,item)=>{
 return item(val);
 },last(...args))
 }
 }
 }*/
//参数只能有一个
function compose(...fns) {
  return a => fns.reduceRight((val, item) => item(val), a);
}
let len = compose(length, upperCase, join);
let result = len('a');
console.log(result);