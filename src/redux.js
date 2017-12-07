//函数作用域可以保护变量
//创建仓库的时候需要传进来一个处理器
export function createStore(reducer) {
//数据源，也就是初始状态或者叫初始数据
  // redux规定，仓库每收到action之后不能修改原始的状态对象，而是一定返回一个新的状态对象
  let state;
  let listeners = [];
  //定义一个获取状态的方法,为了防止外部修改，一般把状态对象进行深度克隆
  let getState = () => JSON.parse(JSON.stringify(state));
  //action是一个动作对象，描述了想发射的动作类型,必须有一个type属性
//如果有人想改变状态，唯一的途径就是调用此方法
  //因为外部无法修改状态，所以只能放在函数里
  //接收action,返回新状态对象
  function dispatch(action) {
    //处理器接收老状态和动作，返回新状态 ，然后通知所有的监听函数执行
    state = reducer(state, action);
    //让保存起来的每个监听函数立刻执行
    listeners.forEach(listener => listener());
  }

  //在仓库内部先调用一下dispatch方法，以便让state获得默认值
  dispatch({});
  //订阅仓库中的状态变化事件,需要传入一个回调函数(监听函数),当仓库中状态发生变化的时候会调用这些监听函数

  let subscribe = (listener) => {
    //监听函数先不执行，先保存在仓库的内部
    listeners.push(listener);
    //订阅函数会返回一个取消订阅的函数
    return function () {
      //循环监听数组，保留那些不等于当前监听函数的元素
      listeners = listeners.filter(item => item != listener);
    }
  }
  return {
    getState,//获取当前的最新的状态
    dispatch,//派发动作
    subscribe//订阅
  }
}
//合并多个reducer
//因为我状态树只有一个，处理器也只有一个
//但应用非常复杂，如果所有的处理程序都写在一起的非常难以维护，所以我们选择分开写，写很多小的reducer,每个reducer只负责自己的逻辑和状态，最后由此方法进行合并，合并成一个最终唯 一的reducer
export function combineReducers(reducers) {
  //返回的是合并后的reducer
  return function (state, action) {
    let result = {};//合并后的状态对象
    //此处我们要把老状态和action传给各个小的reducer,然后由小的reducer返回新的单个状态，然后再合并到大的result状态对象上
    //[counter1,counter2]
    Object.keys(reducers).forEach(key => {
      //result['counter1'] = reducers['counter1'](state['counter1'],action);
      result[key] = reducers[key](state && state[key], action);
    });
    return result;
  }
}

export function bindActionCreators(actions, dispatch) {
  let newActions = {};
  //循环老的actioncreators的所有的key,
  for (let key in actions) {
    //dispatch({type:types.ADD1,payload:{amount:3}})
    newActions[key] = (...args) => dispatch(actions[key](...args));
  }
  return newActions;
}

export function compose(...fns) {
  return a => fns.reduceRight((val, item) => item(val), a);
}
//应用中间件 此方法返回一个也是一个仓库, 只不过这个仓库的dispatch方法是被加强过的
//中间件解决的问题核心是在派发action之后到执行reducer之间加一些自定义的逻辑
export const applyMiddleware = (...middlewares) => (createStore) => reducer => {
   //创建一个仓库
   let store = createStore(reducer);
   //先缓存老的dispatch方法
   let _dispatch = store.dispatch;
   //这一步是为了把最外层的给剥掉
   middlewares = middlewares.map(ware=>ware({
     dispatch:action=>_dispatch(action),
     getState:store.getState
   }));
   //把中间件进行组合
  _dispatch = compose(...middlewares)(_dispatch);
   return {
     ...store,
     dispatch:_dispatch
   };
}
