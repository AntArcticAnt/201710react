import * as types from './action-types';
export default {
  //因为这个函数返回一个Action,那么这个函数为Action Creator
  add(){
    return {type:types.ADD};
  },
  sub(){
    return {type:types.SUB};
  }
}