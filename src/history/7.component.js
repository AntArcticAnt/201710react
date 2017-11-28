import React from 'react';
import ReactDOM from 'react-dom';
/**
 * 1. 我们可以把一个页划分为若干上独立的组件
 * 2. 组件就像一个纯函数，接收任意的参数，返回一个并且只有一个React元素
 * 3. 声明组件有两种方式 函数式
 **/
//这就是一个合法的组件,函数式组件接收一个props的参数，是一个对象
/**
 * 1.组件的名称必须首字母大写
 *   因为组件和元素的使用方式完全相同，但渲染和使用方式不同。元素是直接渲染，组件是渲染返回值。那么render只能通过首字母来判断这个标签是元素还是组件
 * 2. 组件函数要返回并且只能返回一个顶级React元素
 *
 */
// function Welcome(props){//{username:"zfpx",age:"9}
//    if(props.username){
//      return <h1>hello {props.username}</h1>;
//    }else{
//      return <h1>hello stranger</h1>;
//    }
// }
//可以使用类来定义组件，但必须继承自React.Component
//函数组件没有实例，也没有this
//类组件是有实例的，也有this,所以要通过this来调用属性
class Welcome extends React.Component{
  //render用来指定这个组件长什么样子
  render(){
    if(this.props.username){
      return <h1>hello {this.props.username}</h1>;
    }else{
      return <h1>hello stranger</h1>;
    }
  }
}

//传给Welcome组件的属性会全部封装到对象里作为实参传给组件函数
ReactDOM.render(<Welcome username="zfpx" age="9" />,document.querySelector('#root'));
