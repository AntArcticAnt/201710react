import * as types from '../action-types';
//all(全部) active(活动) completed(已完成的)
let initState = 'all';
/**
 * 1. 更改筛选符的类型
 */
export default function(state=initState,action){
   switch(action.type){//判断动作的类型
     case types.UPDATE_FILTER:
       return action.filter;
     default:
       return state;
   }
}