/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

export default function Operator(props) {
  return (
    <button className="btn col-3" onClick={() => props.triggerParent(props.operator)}>{props.operator}</button>
  );
}
