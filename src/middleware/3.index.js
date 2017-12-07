import {createStore,applyMiddleware} from 'redux';
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
let logger = ({dispatch,getState})=> next => action =>{
  console.log('before',getState());
  next(action);
  console.log('after',getState());
}
let thunk = ({dispatch,getState})=> next => action =>{

}
//创建仓库
let store = applyMiddleware(thunk,logger)(createStore)(reducer);
//Actions must be plain objects. Use custom middleware for async actions.
//动作只能是简单对象{},使用自定义的中间件来执行异步操作
store.dispatch(function(){
  setTimeout(function(){
    dispatch({type:"ADD"});
  },2000)
});