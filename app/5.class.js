'use strict';

var _createClass = function () {
  //定义属性
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];//属性描述符
      descriptor.enumerable = descriptor.enumerable || false;//是否可枚举
      descriptor.configurable = true;//是否可配置
      if ("value" in descriptor) descriptor.writable = true;//是否可修改
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  //构造函数 原型属性  静态属性
  return function (Constructor, protoProps, staticProps) {
    //构造函数原型增加属性，它会成为实例的公有属性
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    //给构造函数增属性，也就是类的属性
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/*function _classCallCheck(instance, Constructor) {
  //当这个实例不是构造函数类型的时候抛出一个异常，不能作为函数调用一个类
  //instance通过__proto__向上找
  //Constructor通过prototype向上找如果能够找到相同对象就是true
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}*/

var Parent = function () {
  function Parent() {
    //类的实例 类(构造函数)本身
    //_classCallCheck(this, Parent);
    this.name = 'zfpx';
  }

  _createClass(Parent, [{
    key: 'getName',
    value: function getName() {
      console.log(this.name);
    }
  }]);

  return Parent;
}();