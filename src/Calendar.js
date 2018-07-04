import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import style from 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
//import dateFns from "date-fns"; UNINSTALL

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
BigCalendar.momentLocalizer(moment); // or globalizeLocalizer
const myEventsList = ['hello'];
let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k]);
console.log(allViews);

const calendarStyle = {
	height: '800px',
	backgroundColor: 'white'
};

class Calendar extends Component {
	render() {
		return (
		  <div>
		    <BigCalendar style={style,calendarStyle}
				popup
		      	events={myEventsList}
		      	views={['month', 'week', 'day']}
			    step={60}
			    showMultiDayTimes
			    toobar
			    startAccessor='startDate'
      			endAccessor='endDate'
			    />
		  </div>
		);
	}
}

export default Calendar;
