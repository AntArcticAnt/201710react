/**
 * 1. 当需要在外界配置组件的时候要用属性，属性可以在 render里调用
 * 2. 如果在组件里需要定一些变化的数据，可用状态
 * 3. 如果组件的一个数据不需要在render里使用，就不要放在状态里，可以放在其它自定义属性上
 */
class Component{
  constructor(props){
    this.props = props;
  }
  createDOMFromString(domStr){
    let div = document.createElement('div');
    div.innerHTML = domStr;
    return div.children[0];
  }
  setState(newState){
    //this.state = {...this.state,...newState};
    this.state = Object.assign({},this.state,newState);
    let oldEle = this.element; //缓存老的元素
    let newElement = this.render();//再创建一个新的DOM元素
    let parent = oldEle.parentNode;//得到旧的元素的父元素 <div id="root">
    //用新元素替换掉旧元素
    parent.replaceChild(newElement,oldEle)
  }
  handleClick(){
    this.setState({liked:!this.state.liked});
  }
}
class LikeButton extends  Component{
  constructor(props){
    super(props);
    //既不是状态，也不是属性
    this.something = 'something';
    this.state = {liked:false};//定义一个状态对象
  }
  //告诉别人我长什么样子
  render(){
    this.element  = this.createDOMFromString(`
      <button class="like-button">
        <span class="like-text" style="color:${this.props.color}">${this.state.liked?'取消':'点赞'}</span>
      </button>
    `);
    this.element.addEventListener('click',this.handleClick.bind(this))
    return this.element;
  }
}