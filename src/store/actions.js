import * as types from './action-types';
export default {
  //因为这个函数返回一个Action,那么这个函数为Action Creator
  add(amount){
    return {type:types.ADD,amount};
  },
  sub(amount){
    return {type:types.SUB,amount};
  }
}