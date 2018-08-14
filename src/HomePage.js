import React, { Component } from 'react';
import Sidebar from './Sidebar.js';
import Calendar from './Calendar.js';
import 'tachyons';
/*
const Primary = {
  backgroundColor: "#000000",
  height: "100vh",
  width: "100vw"
}
*/
class HomePage extends Component {
  render() {
    return (
      <div className="bg-black vh-100 cf">
        <Sidebar/>
        <div className="fl w-80 pa2">
          <h1 className='white tc'><b>Smart Calendar</b></h1>
          <Calendar />
        </div>
      </div>
    );
  }
}

export default HomePage;
