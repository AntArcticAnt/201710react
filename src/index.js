import React from 'react';
import ReactDOM from 'react-dom';
import Counter1 from "./counter/comps/Counter1";
import Counter2 from "./counter/comps/Counter2";
import {Provider} from "./react-redux";
import store from './counter/store';
//React.Children.only expected to receive a single React element child.
//React.Children.only 期待接收唯一的React子元素
//{age:2}
ReactDOM.render(<Provider store={store}>
<div>
  <Counter1 age="2"/>
  <Counter2/>
</div>
</Provider>,document.querySelector('#root'));
/**
 * 1. 导入并渲染Counter1 Counter2组件
 * 2.
 **/