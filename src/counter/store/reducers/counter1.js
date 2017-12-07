import * as types from '../action-types';
let initState = {number:0};
export default function (state=initState,action={}){
  console.log(action);
  switch(action.type){
    case types.ADD1:
      return {number:state.number+action.payload.amount};
    case types.SUB1:
      return {number:state.number-action.payload.amount};
    default:
      return state;
  }
}