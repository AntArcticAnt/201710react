import * as types from '../action-types';
export default  {
  //因为这个函数返回一个Action,那么这个函数为Action Creator
  add(amount){
    //payload就是携带的数据
    //这个对象就是action,
    return {type:types.ADD1,payload:{amount}};
  },
  sub(amount){
    return {type:types.SUB1,payload:{amount}};
  }
};
/*export default bindActionCreators(actions,store.dispatch);*/
/*

let bindEd =
{
  add(amount){
     dispatch({type:types.ADD1,payload:{amount}});
  },
  sub(amount){
    dispatch({type:types.SUB1,payload:{amount}})
  }
}*/
