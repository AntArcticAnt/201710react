/**
 * 高阶组件
 * 高阶组件是一个函数，传入一个组件，返回一个新组件
 **/
import React from 'react';
import ReactDOM from 'react-dom';
import Counter1 from "./comps/Counter1";
import Counter2 from "./comps/Counter2";

ReactDOM.render(<div>
  <Counter1/>
  <Counter2/>
</div>,document.querySelector('#root'));