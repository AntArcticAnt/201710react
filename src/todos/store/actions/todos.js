import * as types from '../action-types';
export default {
  addTodo(text){
    return {type: types.ADD_TODO, text};
  }
}

/*
let bind =
  {
    addTodo(text){
      dispatch({type: types.ADD_TODO, text});
    }
  }*/
