/**
 * JSX表达式
 * 在JSX里可以嵌套表示式
 * 表达式是一些变量和操作符的集合，一定要返回一个值
 */
import React from 'react';
import ReactDOM from 'react-dom';
const user = {
  firstName:'zhang',
  lastName:'san'
}
function formatUser(user){
  return user.firstName+user.lastName;
}
//1.如果需要换行的话，需要把JSX放在小括号里
//2.如果想在JSX显示JS变量，则需要放入大括号。里面可以放入JS表达式
//3.表达式里不能放对象,可以放字符串、数字等,还可以放函数的调用
let ele = (
  <h1>
    {formatUser(user)}
  </h1>
)
//JSX本质上就是一个JS变量，它可以作为参数，函数的返值值，也可以用在if for
function greeting(user){
  if(user){
    return <h1>hello {formatUser(user)}</h1>
  }else{
    return <h1>hello Stranger</h1>
  }
}
let ele2 = greeting();
ReactDOM.render(ele2,document.querySelector('#root'));
/**
 * Objects are not valid as a React child
 * 对象不是React合法的子元素
 **/