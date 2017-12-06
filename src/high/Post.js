import React,{Component} from 'react';
class Post extends Component {
  render () {
    return (
      <div>
        <p>{this.props.content}</p>
        <button onClick={this.props.refresh}>刷新</button>
      </div>
    )
  }
}
Post = loadAndRefresh('http://localhost:8080/post')(Post)
export default Post;

function loadAndRefresh(url){
  return function(CommonComponent){
    class HighOrder extends Component{
      constructor(){
        super();
        this.state ={content:''};
      }
      componentDidMount(){
       this.loadData();
      }
      async loadData(){
        this.setState({content:'数据加载中...'});
        let data = await getData(url);
        this.setState(data);
      }
      render(){
        return <CommonComponent
          content={this.state.content}
          refresh={this.loadData.bind(this)}
        />
      }
    }
    return HighOrder;
  }
}
function getData(url){
  return fetch(url,{
    method:'GET',
    headers:{//请求头
      "Accept":"application/json"//告诉 服务器我需要什么样的数据格式
    }
  }).then(res=>res.json());//得到JSON格式的响应体
}