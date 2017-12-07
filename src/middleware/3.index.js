import {createStore,applyMiddleware} from 'redux';
let reducer = (state=0,action)=>{
 switch(action.type){
   case 'ADD':
     return action.payload+ state + 1;
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
//用来处理action是函数的情况
let thunk = ({dispatch,getState})=> next => action =>{
 typeof action == 'function'?action(dispatch):next(action);
}
let promise = ({dispatch,getState})=> next => action =>{
  console.log(action);
  if(action.then){
    //成功会派发action.失败不派发
    return action.then(dispatch);
  }else if(action.payload.then){
    //不管成功还是失败都派发action
    action.payload.then(function(payload){
      dispatch({...action,payload});
    },function(payload){
      dispatch({...action,payload});
    });
  }else{
    next(action);
  }
}
//dispatch({type:'ADD'})
//创建仓库
let store = applyMiddleware(promise,thunk,logger)(createStore)(reducer);
//Actions must be plain objects. Use custom middleware for async actions.
//动作只能是简单对象{},使用自定义的中间件来执行异步操作
/*
store.dispatch(function(dispatch){
  setTimeout(function(){
    dispatch({type:"ADD"});
  },2000)
});*/
//第一种写法dispatch一个promise
/*store.dispatch(new Promise(function(resolve,reject){
  setTimeout(function(){
    resolve({type:'ADD'});
  },2000);
}));*/
//第二种写法 action的payload是一个promise
store.dispatch({
  type:"ADD",
  //这种写法不管promise是成功还是失败都会派发action
  payload:new Promise(function(resolve,reject){
    setTimeout(function(){
      if(Math.random()>.5)
        resolve('yeah');
      else
        reject('error');
    },2000);
  })
});