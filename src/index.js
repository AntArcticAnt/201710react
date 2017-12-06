/**
 * 高阶组件
 * 高阶组件是一个函数，传入一个组件，返回一个新组件
 **/
import React from 'react';
import ReactDOM from 'react-dom';
import Username from "./high/Username";
import Password from "./high/Password";
ReactDOM.render(<form>
  <Username/>
  <Password/>
</form>,document.querySelector('#root'));