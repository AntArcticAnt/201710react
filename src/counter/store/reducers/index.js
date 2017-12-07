import {combineReducers} from '../../../redux';
//{number:0}
import counter1 from './counter1';
//{number:0}
import counter2 from './counter2';
//因为一个应用只能有一仓库，而一个仓库只能有一个状态树，但是我们的应用非常复杂，把所有的状态全放在一起非常难以维护，所以对状态进行拆分。然后每个状态由自己的reducer处理
//返回一个合并后的reducer
let reducer = combineReducers({
  counter1,
  counter2
});
/**
 * 合并之后的唯一的状态树
 * {
 *  counter1:{number:0},
 *  counter2:{number:0}
 * }
 */
export default reducer;