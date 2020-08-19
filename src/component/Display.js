/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

export default function Display(props) {
  return (
    <div>
      <input placeholder="enter the number" value={props.value} />
    </div>
  );
}
