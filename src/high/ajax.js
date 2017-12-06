import React from 'react';
//高阶组件是一个函数
//参数是普通组件,返回值是一个新组件
export default function(CommComponent,url){
   class HighOrderComponent extends React.Component{
     constructor(){
       super();
       this.state = {value:''};
     }
     componentDidMount(){//组件挂载完成后
       fetch(url).then(function(value){
         this.setState({value});
       });
     }
     render(){
        return <CommComponent value={this.state.value}/>
     }
   }
   return HighOrderComponent;
}