import {createStore} from '../redux';
let reducer = (state=0,action)=>{
 switch(action.type){
   case 'ADD':
     return state + 1;
   default:
     return state;
 }
}
let store = createStore(reducer);
//备份一下老的dispatch方法
let next = store.dispatch;
store.dispatch = (action)=>{
  console.log('before ',store.getState());
  next({type:'ADD'});
  console.log('after ',store.getState());
}

store.dispatch({type:'ADD'});
store.dispatch({type:'ADD'});