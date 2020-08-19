/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';

export default function Display(props) {
  return (
    <input placeholder="enter the number" value={props.result} />
  );
}
Display.prototype = {
  result: PropTypes.string,
};
Display.defaultProps = {
  result: '0',
};
