import React from 'react';
import ReactDOM from 'react-dom';
//1.处理视图，只是渲染页面
//2.这是React发明的特殊的语法JSX=JavaScript+XML 就是JS和html混合写法,这并不是JS引擎原生支持的，所以要想在浏览器里执行，需要先转成ES5代码
//3.React元素，它的写法很像html标签
render(
  <h1 id="msg">hello</h1>,
  document.querySelector('#root')
);

//转译之后会转成
//1参数是元素的类型 2参数是属性对象 3.子元素

function createElement(type,props,children){
   return  {type,props:{...props,children}};
}
//createElement方法执行完成后会返回一个虚拟DOM对象
//它其实就是一个普通的JS对象，只不过它可以用来描述DOM对象样子
console.log(ele);
// {type:'h1',props:{id:'msg',children:'hello'}}
//把一个虚拟DOM变成真实DOM并插入容器内部
function render(virtualDOM,container){
  let element = document.createElement(virtualDOM.type);
  for(let attr in virtualDOM.props){
     if(attr == 'children'){
       element.innerHTML = virtualDOM.props[attr];
     }else{
       element.setAttribute(attr,virtualDOM.props[attr])
     }
  }
  container.appendChild(element);
}
/**
 * ReactDOM渲染过程
 * 1. 把JSX元素转成React.createElement方法的调用
 * 2. createElement会返回一个虚拟DOM对象
 * 3. render方法负责把虚拟DOM对象转成真实DOM并插入到容器内部
 */
