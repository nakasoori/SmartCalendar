import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import style from 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
//import dateFns from "date-fns"; UNINSTALL

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
BigCalendar.momentLocalizer(moment); // or globalizeLocalizer
var myEventsList = [
	{
    	'title': 'Class Conference',
    	'start': new Date(2018, 6, 11),
    	'end': new Date(2018, 6, 13),
    	desc: 'Big conference for important people'
	},
    {
        'title': 'Project Meeting',
        'start': new Date(2018, 6, 12, 10, 30, 0, 0),
        'end': new Date(2018, 6, 12, 12, 30, 0, 0),
        desc: 'Pre-meeting meeting, to prepare for the meeting'
    },
    {
        'title': 'Relaxing Lunch',
        'start':new Date(2018, 6, 12, 12, 0, 0, 0),
        'end': new Date(2018, 6, 12, 13, 0, 0, 0),
        desc: 'Power lunch'
    }]
let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k]);
console.log(allViews);

const calendarStyle = {
	height: '800px',
	backgroundColor: 'white'
};

/*Agenda Rendering*/
//Outside the class
function Event({ event }) {
    return (
        <span>
      		<strong>{event.title}</strong>
            {event.desc && (':  ' + event.desc)}
    	</span>
    )
}

function EventAgenda({ event }) {
	console.log(event.start)
    return (
    	<span>
    		<em className="green">{event.title}</em>   
    		<p>{ event.desc }</p>
  		</span>
  	);
}

function EventMonth({ event }) { //Add time(hours) after title
    return (
    	<div className='mw-100'>
    		<b style={{color: 'red'}}>{event.title}</b>
    		{/*<text>{event.start.getHours()+':'+event.start.getMinutes()+'-'
    	+event.end.getHours()+':'+event.end.getMinutes()}</text> */}  
  		</div>
  	);
}

class Calendar extends Component {
	constructor(props){
		super(props);
		this.state = {
			currentView: 'month'
		}
	}
	/* When you choose a particular slot on the calendar */
onSlotChange(slotInfo) {
    var startDate = moment(slotInfo.start.toLocaleString()).format("YYYY-MM-DDm:ss");
    var endDate = moment(slotInfo.end.toLocaleString()).format("YYYY-MM-DDm:ss");
    console.log('startTimetartDate); //shows the start time chosen');
    console.log('endTimendDate); //shows the end time chosen');
}

/* When you click on an already booked slot */
onEventClick(event) {
    console.log(event) //Shows the event details provided while booking
    console.log(event.start.getHours())
}

onViewChange = (view) => {
    console.log('onView');
    console.log('view = ', view);
    this.setState({currentView: view});
}

eventStyleGetter = (event, start, end, isSelected) => {
	var style
	const view = this.state.currentView
	switch(view){
		case 'month':
		console.log('monthsss');
	    	style = {
		        backgroundColor: 'darkblue',
		        borderRadius: '5px',
		        opacity: 0.8,
		        color: 'red',
		        border: '0px',
		        display: 'block'
   			};
   			break;
   		case 'agenda':
   			console.log('agenda')
   			style = {
   				backgroundColor: 'white',
   				color: 'purple'
   			}

	}
    
    return {
        style: style
    };
}

	render() {
		return (
		  <div>
		    <BigCalendar style={style,calendarStyle}
				popup
		      	events={myEventsList}
		      	selectable
				onSelectEvent={event => this.onEventClick(event)}
				onSelectSlot={(slotInfo) => this.onSlotChange(slotInfo) }
		      	views={['month', 'week', 'day', 'agenda']}
			    step={30}
			    onView={view => this.onViewChange(view)}
			    showMultiDayTimes
			    toobar
			    eventPropGetter={this.eventStyleGetter}
			    components={{
                 event: Event,
                 month: {
                 	event: EventMonth
                 },
                 agenda: {
                         event: EventAgenda
                 }
    }}
			    />
		  </div>
		);
	}
}

export default Calendar;
