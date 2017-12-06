import {createStore} from 'redux';
import reducers from './reducers';
let store = createStore(reducers);
//导入合并后的reducer，创建仓库并导出
//为了方便调试，把store变成了全局变量
window.store = store;
export default store;
