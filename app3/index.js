//数据源，也就是初始状态或者叫初始数据
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
//派发动作，如果有谁想改状态，必须调用方法
//action是一个动作对象，描述了想发射的动作类型,必须有一个type属性
//如果有人想改变状态，唯一的途径就是调用此方法
function dispatch(action){
  //判断动作类型
  switch(action.type){
    case 'UPDATE_TITLE_TEXT'://更新标题的内容
      state.title.text = action.text;//还要传过来新的标题
      break;
    case 'UPDATE_CONTENT_COLOR'://更新内容的颜色
     state.content.color = action.color;
     break;
    default:
      break;
  }
}
function renderApp(){
  renderTitle();
  renderContent();
}
function renderTitle(){
  let title = document.querySelector('#title');
  title.innerHTML = state.title.text;
  title.style.color = state.title.color||state.defaultColor;
}
function renderContent(){
  let content = document.querySelector('#content');
  content.innerHTML = state.content.text;
  content.style.color = state.content.color||state.defaultColor;
}
renderApp();
setTimeout(function(){
  dispatch({type:'UPDATE_TITLE_TEXT',text:'新标题'});
  dispatch({type:'UPDATE_CONTENT_COLOR',color:'orange'});
  dispatch({type:'DELETE',color:'orange'});
  renderApp();
},3000);