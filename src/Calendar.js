import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import style from 'react-big-calendar/lib/css/react-big-calendar.css';
//import Popup from 'reactjs-popup';
//import MyEvent from './MyEvent.js';
import moment from 'moment';
import { Popover, OverlayTrigger, Button, Modal, Tooltip } from 'react-bootstrap';
//import dateFns from "date-fns"; UNINSTALL

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
BigCalendar.momentLocalizer(moment); // or globalizeLocalizer
var myEventsList = [
	{
    	'title': 'Class Conference',
    	'start': new Date(2018, 7, 11, 9, 0, 0, 0),
    	'end': new Date(2018, 7, 12, 12, 0, 0 ,0),
    	desc: 'Big conference for important people'
	},
    {
        'title': 'Project Meeting',
        'start': new Date(2018, 7, 12, 10, 30, 0, 0),
        'end': new Date(2018, 7, 12, 12, 30, 0, 0),
        desc: 'Pre-meeting meeting, to prepare for the meeting'
    },
    {
        'title': 'Programming Work',
        'start':new Date(2018, 7, 12, 12, 0, 0, 0),
        'end': new Date(2018, 7, 12, 13, 0, 0, 0),
        desc: 'Work on Program'
    },
    {
        'title': 'Test Event',
        'start':new Date(2018, 6, 12, 12, 0, 0, 0),
        'end': new Date(2018, 6, 12, 13, 0, 0, 0),
        desc: 'Testing calendar'
    },
    {
        'title': 'Woop',
        'start':new Date(2018, 7, 12, 12, 0, 0, 0),
        'end': new Date(2018, 7, 12, 13, 0, 0, 0),
        desc: 'Testing more'
    },
    {
        'title': 'Relaxing Lunch',
        'start':new Date(2018, 7, 12, 12, 0, 0, 0),
        'end': new Date(2018, 7, 12, 13, 0, 0, 0),
        desc: 'Power lunch'
    }]
let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k]);
console.log(allViews);

const calendarStyle = {
	minHeight: '800px',
	backgroundColor: 'white'
};

function EventAgenda({ event }) {
    return <span>
    <em style={{ color: 'magenta'}}>{event.title}</em>   <p>{ event.desc }</p>
  </span>
}

class Calendar extends Component {
	constructor(props){
		super(props);
		this.state = {
			currentView: 'month',
			show: false,
			eventTitle: ''
		}
	}

	handleClose = () => {
    	this.setState({ show: false });
	};

	handleShow = () => {
	  this.setState({ show: true });
	}

	/* When you choose a particular slot on the calendar */
	onSlotChange(slotInfo) {
	    //var startDate = moment(slotInfo.start.toLocaleString()).format("YYYY-MM-DDm:ss");
	    //var endDate = moment(slotInfo.end.toLocaleString()).format("YYYY-MM-DDm:ss");
	    console.log('startTimetartDate'); //shows the start time chosen');
	    console.log('endTimendDate'); //shows the end time chosen');
	}

	/* When you click on an already booked slot */
	onEventClick(event) {
	    console.log('EVENT CLICK') //Shows the event details provided while booking
	    this.setState({eventTitle: event.title})
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
	   			break;
	   		default:
	   			console.err('ERROR');
	   			break;

		}
	    
	    return {
	        style: style
	    };
	}

	agendaEvent = (event) => {
		return (
			<span>
			    <em style={{ color: 'magenta'}}>{event.title}</em>   <p>{ event.desc }</p>
			</span>
		);
	}

	monthEvent = (event) => {
		const popover = (
	      <Popover id="modal-popover" title="popover">
	        very popover. such engagement
	      </Popover>
	    );
    	const tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>;
		return(
			<div >
		        <Button bsStyle="primary" 
		        	bsSize="small" 
		        	onClick={this.handleShow} 
		        	style={{textOverflow: 'ellipsis', 
		        	whiteSpace: 'nowrap', 
		        	padding: '0',
		        	overflow: 'hidden',
		        	outline: 'none',
		        	backgroundColor: 'Transparent',
		        	border: 'none',
		        	width: '100%',
		        	textAlign: 'left'
		        	}} 
		        	className='mw-100 '>
		          <strong>{moment(event.start).format('ha')}</strong>	{event.title} 
		        </Button>

		        <Modal show={this.state.show} onHide={this.handleClose} 
		        	style={{position: 'absolute',
							top: '25%'
					}}>
		          <Modal.Header closeButton>
		            <Modal.Title>{this.state.eventTitle}</Modal.Title>
		          </Modal.Header>
		          <Modal.Body>
		            <h4>Popover in a modal</h4>
		            <p>
		              there is a{' '}
		              <OverlayTrigger overlay={popover}>
		                <a href="#popover">popover</a>
		              </OverlayTrigger>{' '}
		              here
		            </p>

		            <h4>Tooltips in a modal</h4>
		            <p>
		              there is a{' '}
		              <OverlayTrigger overlay={tooltip}>
		                <a href="#tooltip">tooltip</a>
		              </OverlayTrigger>{' '}
		              here
	            	</p>
		          </Modal.Body>
		          <Modal.Footer>
		            <Button onClick={this.handleClose}>Close</Button>
		          </Modal.Footer>
	        	</Modal>
	    	</div>
		);
	}

	customToolbar = (toolbar) => {
		const goToBack = () => {
	    	toolbar.date.setMonth(toolbar.date.getMonth() - 1);
	    	toolbar.onNavigate('prev');
	  	}

		const goToNext = () => {
			toolbar.date.setMonth(toolbar.date.getMonth() + 1);
			toolbar.onNavigate('next');
		}

		const goToCurrent = () => {
			const now = new Date();
			toolbar.date.setMonth(now.getMonth());
			toolbar.date.setYear(now.getFullYear());
			toolbar.onNavigate('current');
		}

		const goToView = (view) => {
			toolbar.onViewChange(view);
		}

		const label = () => {
			const date = moment(toolbar.date);
			return (
				<span><b>{date.format('MMMM')}</b><span> {date.format('YYYY')}</span></span>
			);
		};

		return (
				<span>
					<span>
						<button onClick={goToBack}>&#8249;</button>
						<button onClick={goToCurrent}>today</button>
						<button onClick={goToNext}>&#8250;</button>
					</span>
		
					<label>{label()}</label>
		
					<button onClick={view => goToView('month')}>Month</button>
					<button onClick={view => goToView('week')}>Week</button>
					<button onClick={view => goToView('day')}>Day</button>
					<button onClick={view => goToView('agenda')}>Agenda</button>
				</span>
		);
	};


	render() {
		return (
		  <div>
		    <BigCalendar style={style,calendarStyle}
				popup
		      	events={myEventsList}
		      	onSelectEvent={event => this.onEventClick(event)}
				onSelectSlot={(slotInfo) => this.onSlotChange(slotInfo) }
		      	views={['month', 'week', 'day', 'agenda']}
			    step={30}
			    onView={view => this.onViewChange(view)}
			    showMultiDayTimes
			    toobar
			    eventPropGetter={this.eventStyleGetter}
			    components={{
			    	toolbar: this.customToolbar,
                	month: {
                		event: this.monthEvent,
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
//onSelectEvent={event => this.onEventClick(event)}
export default Calendar;
