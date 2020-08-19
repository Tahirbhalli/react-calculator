/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
import React from 'react';

export default function Number(props) {
  return (
    <button className="btn col-3" onClick={() => props.triggerParent(props.number)}>{props.number}</button>
  );
}
