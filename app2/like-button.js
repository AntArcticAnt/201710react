class LikeButton {
  constructor(){
    this.liked = false;
  }
  createDOMFromString(domStr){
    let div = document.createElement('div');
    div.innerHTML = domStr;
    return div.children[0];
  }
  handleClick(){
    let likeText = document.querySelector('.like-text');
    this.liked = !this.liked;
    likeText.innerHTML = this.liked?'取消':'点赞';
  }
  //告诉别人我长什么样子
  render(){
    this.element  = this.createDOMFromString(`
      <button class="like-button">
        <span class="like-text">点赞</span>
      </button>
    `);
    this.element.addEventListener('click',this.handleClick)
    return this.element;
  }
}