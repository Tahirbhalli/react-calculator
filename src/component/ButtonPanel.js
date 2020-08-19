import React from 'react';
import Button from './Button';

export default function ButtonPanel() {
  return (
    <>
      <Button name="AC" color="simple" />
      <Button name="+/-" color="simple" />
      <Button name="%" color="simple" />
      <Button name="/" />
      <Button name="7" color="simple" />
      <Button name="8" color="simple" />
      <Button name="9" color="simple" />
      <Button name="X" />
      <Button name="4" color="simple" />
      <Button name="5" color="simple" />
      <Button name="6" color="simple" />
      <Button name="-" />
      <Button name="1" color="simple" />
      <Button name="2" color="simple" />
      <Button name="3" color="simple" />
      <Button name="+" />
      <Button name="0" color="simple" wide />
      <Button name="." color="simple" />
      <Button name="=" />
    </>
  );
}
