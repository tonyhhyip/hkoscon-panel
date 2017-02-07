import React from 'react';
import Tabs from './Tabs';
import Tab from './Tab';

export default class Timetable extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = mapPropToState(props);
  }

  render() {
    return (
      <div>
        {this.props.schedule && this.renderTabs()}
      </div>
    );
  }

  renderTabs() {
    return (
      <Tabs className="tabs-fixed-width" swipeable>
        {this.props.schedule.map((data, day) => this.renderTab(day + 1, data))}
      </Tabs>
    );
  }

  renderTab(day, data) {
    const {location} = this.context.router;
    const active = location.hash ? parseInt(location.hash.replace('#day', '')) : 1;
    return (
      <Tab title={`Day ${day}`} id={`day${day}`} active={day === active}>
        <h4>{data.name}</h4>
        {!this.props.venues && renderProgressBar()}
        {this.props.venues && this.renderTable()}
      </Tab>
    );
  }

  renderTable() {
    const {venues} = this.props;
    return (
      <table className="responsive-table centered bordered">
        <thead>
          <tr>
            <th>Time</th>
            {this.state.venues.map(key => (
              <th className="tooltipped" data-position="top" data-delay="50" data-tooltip={venues[key].name}>
                {venues[key].short}
                </th>
              )
            )}
          </tr>
        </thead>
      </table>
    );

  }

  componentWillReceiveProps(nextProps) {
    this.setState(mapPropToState(nextProps));
  }

  componentDidMount() {
    $('.tooltipped').tooltip();
  }

  componentDidUpdate() {
    $('.tooltipped').tooltip();
  }
}

function mapPropToState(props) {
  return {
    venues: Object.keys(props.venues)
  }
}

function renderProgressBar() {
  return (
    <div className="progress">
      <div className="indeterminate" />
    </div>
  )
}

Timetable.contextTypes = {
  router: React.PropTypes.object
};