//@flow
import React from 'react';
import classNames from 'classnames';

type CardProps = {
  children?: React.Element<*>,
  className?: string
}

function Card(props: CardProps) {
  const className = classNames(props.className, 'card');
  return <div className={className} {...props}>{props.children}</div>;
}

type ContentProps = {
  children: React.Element<*>,
  className?: string,
  title?: string | React.Element<*>
}

function Content(props: ContentProps) {
  const className = classNames(props.className, 'card-content');
  return (
    <div className={className} {...props}>
      {props.title && <span className="card-title">{props.title}</span> }
      {props.children}
    </div>
  );
}

type ActionProps = {
  children: React.Element<*>,
  className?: string
}

function Action(props: ActionProps) {
  const className = classNames(props.className, 'card-action');
  return <div className={className}>{props.children}</div>;
}

type ImageProps = {
  image: string,
  title?: string,
  children: React.Element<*>,
  className?: string
}

function Image(props: ImageProps) {
  const className = classNames(props.className, 'card-image');
  return (
    <div className={className} {...props}>
      <img src={props.image} />
      {props.title && <span className="card-title">{props.title}</span> }
    </div>
  )
}

export default Card;
export {Card, Content, Action, Image};
