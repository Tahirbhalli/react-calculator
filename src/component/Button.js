/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';

export default function Button(props) {
  if (props.wide) {
    return (
      <button className={'double ' + `${props.color}`}>{props.name}</button>
    );
  }
  return (
    <button className={`${props.color}`}>{props.name}</button>
  );
}
Button.prototype = {
  name: PropTypes.string,
  wide: PropTypes.bool,
  color: PropTypes.string,
};

Button.defaultProps = {
  color: 'orange',
};
