import React, {Component} from 'react';
import loadDataFromLocal from './local';
import loadDataFromAjax from './ajax';
/**
 * 现在有一个需要求，当此组件加载的时候要从localStorage通过username这个key获取一个值并显示在input里
 */
class Username extends Component {
  render() {
    return (
      <input type="text" value={this.props.value}/>
    )
  }
}

export default loadDataFromLocal('username')(Username);