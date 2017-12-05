import * as redux from 'redux';
//是一个纯函数 1.输入一定输出一定 2 不改变参数
import reducer from './reducer';
console.log(redux);
let store = redux.createStore(reducer);
window.store = store;
export default store;

/**
 * 1.一个应用只能一个仓库
 * 2.一个仓库只能有一个reducer 也只能一个状态树
 *
 * createStore 仓库仓库
 * combineReducers 合并多个reducer
 *
 * applyMiddleware
 * bindActionCreators
 * compose
 */