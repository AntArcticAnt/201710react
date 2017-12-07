import {createStore} from '../../redux';
//是一个纯函数 1.输入一定输出一定 2 不改变参数
import reducers from './reducers';
let store = createStore(reducers);
window.store = store;
export default store;

/**
 * 1.一个应用只能一个仓库
 * 2.一个仓库只能有一个reducer 也只能一个状态树
 *
 * createStore 仓库仓库
 * combineReducers 合并多个reducer
 * bindActionCreators 绑定ActionCreators,跟dispatch方法绑定
 *
 * applyMiddleware
 * compose
 */