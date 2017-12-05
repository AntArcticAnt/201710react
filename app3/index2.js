
//函数作用域可以保护变量
function createStore(){
//数据源，也就是初始状态或者叫初始数据
  // redux规定，仓库每收到action之后不能修改原始的状态对象，而是一定返回一个新的状态对象
  let state = {
    defaultColor:'blue',//默认颜色
    title:{
      text:'标题',
      color:'red'
    },
    content:{
      text:'内容',
      color:'green'
    }
  }
  //定义一个获取状态的方法,为了防止外部修改，一般把状态对象进行深度克隆
  let getState = ()=>JSON.parse(JSON.stringify(state));
  //action是一个动作对象，描述了想发射的动作类型,必须有一个type属性
//如果有人想改变状态，唯一的途径就是调用此方法
  //因为外部无法修改状态，所以只能放在函数里
  function dispatch(action){
    //判断动作类型
    switch(action.type){
      case 'UPDATE_TITLE_TEXT'://更新标题的内容
        //状态具有不变性，永远不要直接修改老状态对象
        state= {...state,title:{...state.title,text:action.text}};
        break;
      case 'UPDATE_CONTENT_COLOR'://更新内容的颜色
        state= {...state,content:{...state.content,color:action.color}};
        break;
      default:
        break;
    }
  }
  return {
    getState,
    dispatch
  }
}
//调用createStore方法返回一个仓库对象
let store = createStore();
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
setTimeout(function(){
  dispatch({type:'UPDATE_TITLE_TEXT',text:'新标题'});
  dispatch({type:'UPDATE_CONTENT_COLOR',color:'orange'});
  dispatch({type:'DELETE',color:'orange'});
  renderApp();
},3000);
/**
 * 1.虽然我们规定只能通过dispatch来修改状态，但是我们还是无法阻止 直接修改状态 ，所以状态需要被保护起来，以防随意改变
 * 2. dispatch修改状态之后，还需要手工重新调用渲染方法，比较麻烦，所 以我们希望当状态改变之后自动重新渲染
 **/