import React from 'react';
import Tabs from './Tabs';
import Tab from './Tab';

export default class Timetable extends React.Component {
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
      </Tab>
    )
  }

}

Timetable.contextTypes = {
  router: React.PropTypes.object
};