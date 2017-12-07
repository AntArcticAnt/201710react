import {createStore,applyMiddleware} from '../redux';
let reducer = (state=0,action)=>{
 switch(action.type){
   case 'ADD':
     return state + 1;
   default:
     return state;
 }
}
//日志中间件
let logger = ({dispatch,getState})=> next => action =>{
  console.log('before',getState());
  next(action);
  console.log('after',getState());
}
//创建仓库
let store = applyMiddleware(logger)(createStore)(reducer);

store.dispatch({type:'ADD'});
store.dispatch({type:'ADD'});