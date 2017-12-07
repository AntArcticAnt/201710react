import React from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from './redux';
/**
 * 接收store属性，并且把store放在子组件的上下文对象上
 */
export class Provider extends React.Component {
  static propTypes = {
    children: PropTypes.element
  }
  //子组件上下文类型
  static childContextTypes = {
    store: PropTypes.object,
  }
  //获取子组件上下文对象
  getChildContext() {
    return {store: this.props.store};
  }

  //没有自己的样式，子组件长什么样就就显示什么样
  //只能有一个子组件
  render() {
    return this.props.children;
  }
}
//mapStateToProps 把仓库的合并后的状态对象映射为属性对象
//mapDispatchToProps 把dispatch方法映射为属性对象
export const connect = (mapStateToProps, mapDispatchToProps) => OldComponent => {
  class NewComponent extends React.Component {
    static contextTypes = {//这表示我要从上下文对象接收store属性
      store: PropTypes.object
    }

    constructor() {
      super();
      this.state = {};//状态对象
    }

    componentDidMount() {
      //先获得初始状态
      this.setState(mapStateToProps(this.context.store.getState()));
      this.unSubscribe = this.context.store.subscribe(() => {
        //先取出仓库的状态对象，然后传入映射方法，返回值就是当前组件实例的状态对象
        this.setState(mapStateToProps(this.context.store.getState()));
      });
    }
    componentWillUnmount(){
      this.unSubscribe();
    }
    render() {
      let props = {
        ...this.props,//传给新组件的属性对象原封不动的传给老组件
        ...this.state,//添加当前新组件的状态对象作为老组件的属性对象
        ...bindActionCreators(mapDispatchToProps,this.context.store.dispatch)
      }
      return <OldComponent {...props}/>
    }
  }
  return NewComponent;

}