// @flow
import React from 'react';
import classNames from 'classnames';
import $ from 'jquery';
import Col from './Col';
import Row from './Row';

type Props = {
  children?: React.Element<*>,
  className?: string,
  defaultValue?: string,
  handleChange?: Function,
  swipeable: boolean
}

export default class Tabs extends React.Component {
  props: Props;
  el: Element;

  componentDidMount() {
    setTimeout(() => {
      $(this.el).tabs({
        swipeable: this.props.swipeable
      });
      $('li.tab .active').trigger('click');
    }, 500);
  }

  handleSelect() {
    if (this.props.handleChange) {
      this.props.handleChange.apply(null, arguments);
    }
  }

  render () {
    const {
      children,
      className,
      defaultValue
    } = this.props;

    return (
      <Row>
        <Col s={12}>
          <ul className={classNames('react-tabs', className)} ref={(el) => (this.el = el)}>
            {
              React.Children.map(children, (child, idx) => {

                const {
                  active,
                  className,
                  disabled,
                  tabWidth,
                  title,
                  id
                } = child.props;

                const classes = {
                  [`s${tabWidth}`]: tabWidth,
                  disabled,
                };
                return (
                  <li className={classNames('tab', 'col', classes, className)} key={idx}>
                    <a href={`#${id || ('tab_' + idx)}`} className={active || defaultValue === idx ? 'active' : ''}
                      {...disabled ? {} : { onClick: e => this.handleSelect(e, id, idx) }}
                    >
                      { title }
                    </a>
                  </li>
                );
              })
            }
          </ul>
        </Col>
        {
          React.Children.map(children, (child, idx) =>
            <Col id={child.props.id || `tab_${idx}`} s={12} key={`tab${idx}`}
                 style={{'display': (child.props.active || defaultValue === idx) ? 'block' : 'none'}}>
              { child.props.children }
            </Col>
          )
        }
      </Row>
    );
  }
}