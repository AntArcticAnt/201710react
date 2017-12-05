/**
 * 如何构建一个redux应用
 **/
let initState = {number: 0};
let reducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD':
      return {number: state.number + 1};
    case 'SUB':
      return {number: state.number - 1};
    default:
      return state;
  }
}
let store = createStore(reducer);
// getState subscribe dispatch
//render核心在于拿到仓库里的状态并且渲染页面
function render(){
  document.querySelector('#number').innerText = store.getState().number;
}
render();