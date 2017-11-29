import React,{Component} from 'react';
import ReactDOM from 'react-dom';
const lessons = [
  {title: 'Lesson 1: title', description: 'Lesson 1: description'},
  {title: 'Lesson 2: title', description: 'Lesson 2: description'},
  {title: 'Lesson 3: title', description: 'Lesson 3: description'},
  {title: 'Lesson 4: title', description: 'Lesson 4: description'}
]
//Each child in an array or iterator should have a unique "key" prop.
//数组或迭代器中的每一个子元素都应该有一个唯一的key属性
class Lesson extends Component {
  handleClick = ()=>{
    console.log(this.props.index+' - '+this.props.lesson.title);
  }
  render(){
    return (
      <div onClick={this.handleClick}>
        <h1>{this.props.lesson.title}</h1>
        <p>{this.props.lesson.description}</p>
      </div>
    )
  }
}

class LessonsList extends Component {
   render(){
     return (
       <div>
         {
           this.props.lessons.map((item,index)=>(
             <Lesson key={0} lesson={item} index={index}/>
           ))
         }
       </div>
     )
   }
}
ReactDOM.render(<LessonsList lessons={lessons}/>,document.querySelector('#root'));
