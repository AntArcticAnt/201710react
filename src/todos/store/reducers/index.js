import {combineReducers} from 'redux';
import todos from './todos';
import filter from './filter';
export default combineReducers({
  todos,
  filter
})

/*
合并后的状态树
每当reducer收到新的action之后，把此action传给每个子的reducer,然后由每个子的reducer通过自己的老状态和action，返回新状态,并且覆盖同名属性
let allState = {
  todos:[],
  filter:'all'
}*/
