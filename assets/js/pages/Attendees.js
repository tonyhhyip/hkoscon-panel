import React from 'react';
import Container from '../components/Container';
import CheckInButton from '../components/CheckInButton';

export default class Attendees extends React.Component {
  render() {
    return (
      <Container>
        <table className="highlight">
          <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Ticket ID</th>
            <th>Ticket Type</th>
            <th />
          </tr>
          </thead>
          <tbody>
          {this.renderList()}
          </tbody>
        </table>
      </Container>
    );
  }

  renderList() {
    const rows = [];
    Object.keys(this.props.data).forEach((key) => {
      const data = this.props.data[key];
      data.id = key;
      rows.push(this.renderRow(data));
    });
    return rows;
  }

  renderRow(data) {
    return (
      <tr key={data.id}>
        <td>{data.id}</td>
        <td>{data.name}</td>
        <td>{data.ticket}</td>
        <td>{data.type}</td>
        <td>
          <CheckInButton id={data.id} name={data.name} />
        </td>
      </tr>
    )
  }
}