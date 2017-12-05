import * as types from './action-types';
export default {
  //因为这个函数返回一个Action,那么这个函数为Action Creator
  add(amount){
    //payload就是携带的数据
    return {type:types.ADD,payload:{amount}};
  },
  sub(amount){
    return {type:types.SUB,payload:{amount}};
  }
}