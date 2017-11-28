import React from 'react';
import ReactDOM from 'react-dom';
let formatDate = date => date.toLocaleString();
function Avatar(props){
  return (
    <img className="Avatar"
         src={props.user.avatarUrl}
         alt={props.user.name}
    />
  )
}
function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <Avatar user={props.author}/>
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}
let comment = {
  author:{
    name:'张三',
    avatarUrl:'http://img.qqu.cc/uploads/allimg/140922/2-140922160504.jpg'
  },
  text:'今天天气很不错',
  date:new Date()
}
//把属性对象展示传入Comment组件
ReactDOM.render(<Comment {...comment}/>,document.querySelector('#root'));