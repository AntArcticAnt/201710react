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
//下一个的意思是下一个中间件或者真正的dispatch方法
let logger1 = ({dispatch,getState})=> next => action =>{
  console.log('before1',getState());
  next(action);
  console.log('after1',getState());
}
let logger2 = ({dispatch,getState})=> next => action =>{
  console.log('before2',getState());
  next(action);
  console.log('after2',getState());
}
//创建仓库
let store = applyMiddleware(logger2,logger1)(createStore)(reducer);

store.dispatch({type:'ADD'});