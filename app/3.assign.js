let state = {name:'zfpx',age:9};
function setState(newState){
  //state = Object.assign({},state,newState);
  state = {...state,...newState};
}
setState({age:10,city:'北京'});
console.log(state);//{name:'zfpx',age:10,city:'北京'}