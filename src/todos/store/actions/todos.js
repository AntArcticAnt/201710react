import * as types from '../action-types';
export default {
  addTodo(text){
    return {type: types.ADD_TODO, text};
  },
  delTodo(id){
    return {type:types.DEL_TODO,id}
  }
}

/*
let bind =
  {
    addTodo(text){
      dispatch({type: types.ADD_TODO, text});
    }
  }*/
