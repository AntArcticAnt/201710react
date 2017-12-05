//函数作用域可以保护变量
//创建仓库的时候需要传进来一个处理器
function createStore(reducer){
//数据源，也就是初始状态或者叫初始数据
  // redux规定，仓库每收到action之后不能修改原始的状态对象，而是一定返回一个新的状态对象
  let state;
  let listeners = [];
  //定义一个获取状态的方法,为了防止外部修改，一般把状态对象进行深度克隆
  let getState = ()=>JSON.parse(JSON.stringify(state));
  //action是一个动作对象，描述了想发射的动作类型,必须有一个type属性
//如果有人想改变状态，唯一的途径就是调用此方法
  //因为外部无法修改状态，所以只能放在函数里
  //接收action,返回新状态对象
  function dispatch(action){
    //处理器接收老状态和动作，返回新状态 ，然后通知所有的监听函数执行
    state = reducer(state,action);
    //让保存起来的每个监听函数立刻执行
    listeners.forEach(listener=>listener());
  }
  //在仓库内部先调用一下dispatch方法，以便让state获得默认值
  dispatch({});
  //订阅仓库中的状态变化事件,需要传入一个回调函数(监听函数),当仓库中状态发生变化的时候会调用这些监听函数

  let subscribe = (listener)=>{
    //监听函数先不执行，先保存在仓库的内部
    listeners.push(listener);
    //订阅函数会返回一个取消订阅的函数
    return function(){
      //循环监听数组，保留那些不等于当前监听函数的元素
      listeners = listeners.filter(item=>item!=listener);
    }
  }
  return {
    getState,//获取当前的最新的状态
    dispatch,//派发动作
    subscribe
  }
}
//state是老状态 上一个状态对象
//action是动作对象
//返回新的状态对象
let initState = {
  defaultColor:'blue',//默认颜色
  title:{
    text:'标题',
    color:'red'
  },
  content:{
    text:'内容',
    color:'green'
  }
};
//给state定义一个默认状态
//在仓库里第一次调用dispatch的时候，状态对象为undefined,会走默认状态对象
function reducer(state=initState,action){
  //判断动作类型
  switch(action.type){
    case 'UPDATE_TITLE_TEXT'://更新标题的内容
      //状态具有不变性，永远不要直接修改老状态对象
      return  {...state,title:{...state.title,text:action.text}};
    case 'UPDATE_CONTENT_COLOR'://更新内容的颜色
      return  {...state,content:{...state.content,color:action.color}};
    default:
      return state;
  }
}
//调用createStore方法返回一个仓库对象
let store = createStore(reducer);
//派发动作，如果有谁想改状态，必须调用方法

function renderApp(){
  renderTitle();
  renderContent();
}
function renderTitle(){
  let title = document.querySelector('#title');
  title.innerHTML = store.getState().title.text;
  title.style.color = store.getState().title.color||store.getState().defaultColor;
}
function renderContent(){
  let content = document.querySelector('#content');
  content.innerHTML = store.getState().content.text;
  content.style.color = store.getState().content.color||store.getState().defaultColor;
}
renderApp();
//当仓库中的状态变化之后执行renderApp方法
let unSubscribe = store.subscribe(renderApp);
setTimeout(function(){
  store.dispatch({type:'UPDATE_TITLE_TEXT',text:'新标题'});
  unSubscribe();
},3000);
setTimeout(function(){
  store.dispatch({type:'UPDATE_CONTENT_COLOR',color:'orange'});
},6000);
/**
 * 1.虽然我们规定只能通过dispatch来修改状态，但是我们还是无法阻止 直接修改状态 ，所以状态需要被保护起来，以防随意改变
 * 2. dispatch修改状态之后，还需要手工重新调用渲染方法，比较麻烦，所 以我们希望当状态改变之后自动重新渲染
 **/