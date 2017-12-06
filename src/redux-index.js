import React from 'react';
import ReactDOM from 'react-dom';
import Counter1 from "./comps/Counter1";
import Counter2 from "./comps/Counter2";

ReactDOM.render(<div>
  <Counter1/>
  <Counter2/>
</div>,document.querySelector('#root'));