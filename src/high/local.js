import React from 'react';
//高阶组件是一个函数
//参数是普通组件,返回值是一个新组件
/**
 * 1.代码和逻辑复用
 * 2.方便重构和修改
 */
export default function(CommComponent,key){
   class HighOrderComponent extends React.Component{
     constructor(){
       super();
       this.state = {value:''};
     }
     componentDidMount(){//组件挂载完成后
       //先获取到local里key对应的值
       let value = localStorage.getItem(key);
       this.setState({value});
     }
     render(){
        return <CommComponent value={this.state.value}/>
     }
   }
   return HighOrderComponent;
}