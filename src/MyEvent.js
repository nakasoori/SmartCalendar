import React, { Component } from 'react';
import { Popover, OverlayTrigger, Button, Modal, Tooltip } from 'react-bootstrap';


class MyEvent extends Component {
	constructor(props){
		super(props);

		this.state = {
			show: false
		};
	};

	render(){
		console.log('in myevent class')
      	console.log(this.props);

	    const popover = (
      <Popover id="modal-popover" title="popover">
        very popover. such engagement
      </Popover>
    );
    const tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>;

    return (
    	<div>
	        <p>Click to get the full Modal experience!</p>

	        <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>
	          Launch demo modal
	        </Button>

	        <Modal show={this.state.show} onHide={this.handleClose}>
	          <Modal.Header closeButton>
	            <Modal.Title>Modal heading</Modal.Title>
	          </Modal.Header>
	          <Modal.Body>
	            <h4>Text in a modal</h4>
	            <p>
	              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
	            </p>

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
}

export default MyEvent