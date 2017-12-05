//数据源，也就是初始状态或者叫初始数据
let state = {
  title:{
    text:'标题',
    color:'red'
  },
  content:{
    text:'内容',
    color:'green'
  }
}
function renderApp(state){
  renderTitle(state);
  renderContent(state);
}
function renderTitle(state){
  let title = document.querySelector('#title');
  title.innerHTML = state.title.text;
  title.style.color = state.title.color;
}
function renderContent(state){
  let content = document.querySelector('#content');
  content.innerHTML = state.content.text;
  content.style.color = state.content.color;
}
renderApp(state);