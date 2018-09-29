import React, { Component } from 'react';
import MenuButton from './components/MenuButton';
import MenuContainer from './components/MenuContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='theMenu'>
          HIIII
        </div>
        <div>
          <MenuContainer/>
        </div>
      </div>
    );
  }
}

export default App;
