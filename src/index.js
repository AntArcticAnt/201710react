/**
 * 高阶组件
 * 高阶组件是一个函数，传入一个组件，返回一个新组件
 **/
import React from 'react';
import ReactDOM from 'react-dom';
import Username from "./high/Username";
import Password from "./high/Password";
import Post from "./high/Post";
ReactDOM.render(<form>
  <Post/>
</form>,document.querySelector('#root'));