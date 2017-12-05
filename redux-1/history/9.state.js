import React from 'react';
import ReactDOM from 'react-dom';
/**
 * 1.组件的状态用来描述组件内部可以变化的数据
 * 2.组件的状态是类组件所特有的
 * 3. 当类实例化的时候，会自动调用构造函数，我们可以在构造函数里初始化状态对象
 * 渲染组件的过程
 * 1. 初始化属性对象,然后调用类的构造函数，并把属性对象传进去,得到组件的实例。
 * 2. 会调用实例的render方法得到返回React元素
 * 3. render方法会把此React元素转成真实的DOM元素并挂载到容器内部
 *
 **/
class Clock extends React.Component{
  constructor(props){
    super(props);//super就指向父类的构造函数 this.props = props;是调用父类的代码，用来把props属性对象赋给this实例的props
    //当一个类继承另一个类的时候，需要先调用父类的构造函数
    this.state = {age:8,time:new Date()};
    console.log(1,this.state);
  }
  //组件挂载完成后,因为只有在这个生命周期函里才有真实的DOM对象
  /**
   * 1.setState方法用来修改状态,传入一个增量状态，会附带同名属性或者增加新属性，而不是删除掉老的状态。
   * 2. 除了构造函数外，永远不要直接操作this.state
   */
  componentDidMount(){
    //把定时器的引用地址赋给当前组件timerID属性
    this.timerID = setInterval(()=>{
      //this.state = {age:8,time:new Date()};
      console.log(this);
      this.setState({time:new Date()});
     //调用setState不但会修改状态，还会重新调用render方法进行渲染
      console.log(2,this.state);
    },1000);
  }
  //组件将要卸载
  componentWillUnmount(){
    //在组件将要卸载之前清除定时器
    clearInterval(this.timerID);
  }
  //使用箭头函数的话this才会等于当前组件的实例
  handleClick = ()=>{
    //在某个DOM节点上卸载掉对应的react组件
     ReactDOM.unmountComponentAtNode(document.querySelector('#root'));
  }
  render(){
    return (
      <div>
        <h3>当前时间 {this.state.age}</h3>
        <h4>{this.state.time.toLocaleString()}</h4>
        <button onClick={this.handleClick}>自杀</button>
      </div>
    )
  }
}
ReactDOM.render(<Clock name="zfpx"/>,document.querySelector('#root'));