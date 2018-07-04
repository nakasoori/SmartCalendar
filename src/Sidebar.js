import React, { Component } from 'react';
import 'tachyons';

class Sidebar extends Component {
  render() {
    return (
      <div className="bg-red vh-100 fl w-20 pa2 flex-column">
        <h1 className="tc">Side bar</h1><br></br> {/*TODO: Increase bottom margin to size better*/}
        <h2 className="tc">List of things to do</h2>
      </div>
    );
  }
}

export default Sidebar;
