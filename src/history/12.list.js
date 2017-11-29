import React,{Component} from 'react';
import ReactDOM from 'react-dom';
const lessons = [
  {title: 'Lesson 1: title', description: 'Lesson 1: description'},
  {title: 'Lesson 2: title', description: 'Lesson 2: description'},
  {title: 'Lesson 3: title', description: 'Lesson 3: description'},
  {title: 'Lesson 4: title', description: 'Lesson 4: description'}
]

class Lesson extends Component {
  render(){
    return (
      <div>
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
             <Lesson lesson={item}/>
           ))
         }
       </div>
     )
   }
}
ReactDOM.render(<LessonsList lessons={lessons}/>,document.querySelector('#root'));
