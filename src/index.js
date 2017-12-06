import React from 'react';
import ReactDOM from 'react-dom';
import Todos from "./todos/components/Todos";
//让react组件和仓库关联起来
//Provider是向子组件提供store的,会把属性中的store放在子上下文对象中,让下层组件可以获得这个仓库
import {Provider} from 'react-redux';
import store from './store';
ReactDOM.render((
  <Provider store={store}>
    <Todos/>
  </Provider>
), document.querySelector('#root'));