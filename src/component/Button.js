/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';

export default function Button(props) {
  const { handleclick } = props;
  if (props.wide) {
    return (
      // eslint-disable-next-line no-useless-concat
      <button className={'double ' + `${props.color}`} onClick={() => handleclick(props.name)}>{props.name}</button>
    );
  }
  return (
    <button className={`${props.color}`} onClick={() => handleclick(props.name)}>{props.name}</button>
  );
}
Button.prototype = {
  name: PropTypes.string,
  wide: PropTypes.bool,
};

Button.defaultProps = {
  color: 'orange',
};
