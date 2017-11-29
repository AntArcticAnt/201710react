class LikeButton {
  constructor(){
    this.state = {liked:false};//定义一个状态对象
  }
  createDOMFromString(domStr){
    let div = document.createElement('div');
    div.innerHTML = domStr;
    return div.children[0];
  }
  setState(newState){
    this.state = {...this.state,...newState};
    let oldEle = this.element; //缓存老的元素
    let newElement = this.render();//再创建一个新的DOM元素
    let parent = oldEle.parentNode;//得到旧的元素的父元素 <div id="root">
    //用新元素替换掉旧元素
    parent.replaceChild(newElement,oldEle)
  }
  handleClick(){
    this.setState({liked:!this.state.liked});
  }
  //告诉别人我长什么样子
  render(){
    this.element  = this.createDOMFromString(`
      <button class="like-button">
        <span class="like-text">${this.state.liked?'取消':'点赞'}</span>
      </button>
    `);
    this.element.addEventListener('click',this.handleClick.bind(this))
    return this.element;
  }
}