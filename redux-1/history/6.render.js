import React from 'react';
import ReactDOM from 'react-dom';
//元素具有不变性，一旦创建就不能修改
function tick(){
  let element = (
    <div>
      <h3>欢迎光临</h3>
      <h4>现在时间是{new Date().toLocaleString()}</h4>
    </div>
  )
  ReactDOM.render(element,document.querySelector('#root'));
}
setInterval(tick,1000);