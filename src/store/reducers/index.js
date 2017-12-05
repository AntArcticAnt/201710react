import {combineReducers} from '../../redux';
//{number:0}
import counter1 from './counter1';
//{number:0}
import counter2 from './counter2';
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