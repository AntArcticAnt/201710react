import React from 'react';
import ReactDOM from 'react-dom';
ReactDOM.render(
  React.createElement('div',{className:'container'},[
    React.createElement('span',null,'hello'),
    React.createElement('span',null,'world')
  ]),document.querySelector('#root')
);