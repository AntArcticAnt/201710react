import React from 'react';
import ReactDOM from 'react-dom';
let formatDate = date => date.toLocaleString();
let style = {borderRadius:'50%',width:50,height:50};
/**
 * 哪些部分需要并且能够被提取成单独组件
 * 1. 可复用的
 * 2. 太复杂了
 */
function Avatar(props){
  //Cannot assign to read only property 'user' of object '#<Object>'无法给一个只读的属性赋值，属性对象是只读的
  return (
    <img style={style} className="Avatar"
         src={props.user.avatarUrl}
         alt={props.user.name}
    />
  )
}
/**
 * 1. 复用
 * 2. 易维护
 */
function UserInfo(props){
  return (
    <div className="UserInfo">
      <Avatar user={props.user}/>
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  )
}
function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author}/>
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