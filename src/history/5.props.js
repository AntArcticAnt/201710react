/**
 * JSX React元素的属性
 * 1. 普通属性
 * 2. 特殊属性 class=className for=htmlFor
 * 3. 如果属性名是多个单词的话，一定用驼峰命名法 tab-index=> tabIndex
 * 4. React元素有一个非常重要的属性 children
 **/
import React from 'react';
import {render} from 'react-dom';
//Invalid DOM property `class`. Did you mean `className`?
//当想给一个React元素设置类名属性的话，不能用class而要用className
//Invalid DOM property `for`. Did you mean `htmlFor`?
let className = 'bg';
let str = '<script>console.log("xx")</script>';
let str2 = '<h1>hello</h1>';
render(<div id="row" className={className}
            htmlFor="inputform">
  <span>1</span>
  <span>2</span>
  <span dangerouslySetInnerHTML={{__html:str}}></span>
</div>, document.querySelector('#root'));

//元素事实上只是构成组件的一个部分
//组件是一个更大的单位