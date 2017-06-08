// @flow
import React from 'react';
import moment from 'moment';
import Container from './Container';
import Row from './Row';
import CheckIn from './CheckIn';
import { database } from '../firebase';

type Props = {
	id: string,
	name: string,
	ticket: string,
	type: string,
	checkIn: boolean,
	tshirt: {
		request: string,
		provide: string,
	},
	handleLocalCheckIn: Function,
}

export default class Profile extends React.Component {
	props: Props;
	state: {
		request: string,
		provide: string,
	};
	constructor(props: Props) {
		super(props);
		this.state = Object.assign({}, this.props.tshirt);
	}

	handleUpdate() {
		database.ref(`/tshirt/${this.props.ticket}`).set({request: this.state.request, provide: this.state.provide});
	}

	render() {
		return (
			<Container>
				<Row style={{fontSize: '2em'}}>
					<div className="col s6 m4 l3">ID</div>
					<div className="col s6">{this.props.id}</div>
				</Row>
				<Row style={{fontSize: '2em'}}>
					<div className="col s6 m4 l3">Name</div>
					<div className="col s6">{this.props.name}</div>
				</Row>
				<Row style={{fontSize: '2em'}}>
					<div className="col s6 m4 l3">Ticket Type</div>
					<div className="col s6">{this.props.type}</div>
				</Row>
				<Row style={{fontSize: '2em'}}>
					<div className="col s6 m4 l3">Ticket Number</div>
					<div className="col s6">{this.props.ticket}</div>
				</Row>
				<Row>
					<div className="col s6 m4 l3" style={{fontSize: '2em'}}>Check In</div>
					<div className="col s6 m4 l3">
						{this.props.checkIn ? moment(this.props.checkIn).format('HH:mm:ss') :
							<CheckIn {...this.props} handleClick={this.props.handleLocalCheckIn}/>}
					</div>
				</Row>
				<Row>
					<div className="col s6 m4 l3" style={{fontSize: '2em'}}>T-shirt</div>
					<div className="col s3 m2 l1 input-field">
						<input type="text" maxLength={1} id="request" value={this.state.request} onChange={e => this.setState({request: e.target.value})} />
						<label htmlFor="request">Request</label>
					</div>
					<div className="col s3 m2 l1 input-field">
						<input type="text" maxLength={1} id="provide" value={this.state.provide} onChange={e => this.setState({provide: e.target.value})} />
						<label htmlFor="provide">Provide</label>
					</div>
					<div className="col s3 m2 l1">
						<button className="btn" onClick={() => this.handleUpdate()}>Update</button>
					</div>
				</Row>
			</Container>
		);
	}
}
