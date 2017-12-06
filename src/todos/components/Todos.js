import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import TodoHeader from "./TodoHeader";
import TodoItems from "./TodoItems";
import TodoFooter from "./TodoFooter";
export default class Todos extends Component {
  render() {
    return (
      <div className="container" style={{marginTop:30}}>
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="panel panel-default">
              <div className="panel-heading">
                <TodoHeader/>
              </div>
              <div className="panel-body">
                <TodoItems/>
              </div>
              <div className="panel-footer">
                <TodoFooter/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}