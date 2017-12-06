import * as types from '../action-types';
let initState = [];

/**
 * 1.增加一个todo {id:1,completed:false,text:'学习'}
 * 2.删除一个todo
 * 3.修改完成状态
 * 4.删除已完成
 * 5.修改todo内容
 */
export default function(state=initState,action){
 switch(action.type){
   case types.ADD_TODO:
     return [...state,{id:Date.now(),completed:false,text:action.text}];
   case types.DEL_TODO:
     return state.filter(item=>item.id!=action.id);
   default:
     return state;
 }
}