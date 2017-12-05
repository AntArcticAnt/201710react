import {createStore} from '../redux';
//是一个纯函数 1.输入一定输出一定 2 不改变参数
import reducer from './reducer';
let store = createStore(reducer);
window.store = store;
export default store;