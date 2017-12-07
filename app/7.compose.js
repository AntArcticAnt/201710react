/**
 * 这个compose的方法和逻辑在很多地方会用到
 * 比如说中间件里，比如说koa的中间件。。。。。
 * compose 就是把多个函数组合成一个函数调用
 */
function join(a,b){
  return a+b;
}
function upperCase(str){
  return str.toUpperCase();
}
function length(str){
  return str.length;
}

let str = length(upperCase(join('a','b')));
console.log(str);

function compose(...fns){

}
let len = compose(length,upperCase,join);
let result = len('a','b');
console.log(result);