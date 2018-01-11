import React, { Component } from 'react';
import Aside from "./container/Asider/Aside"
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*侧边栏组件*/}
        <Aside></Aside>
      </div>
    );
  }
}

export default App;
