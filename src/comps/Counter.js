import React, {Component} from 'react';
import * as types from '../store/action-types';
import store from '../store';
export default class Counter extends Component {
  render() {
    return (
      <div>
        <p>{store.getState().number}</p>
        <button onClick={()=>store.dispatch({type:types.ADD})}>+</button>
        <button>-</button>
      </div>
    )
  }
}