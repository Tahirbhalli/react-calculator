import React from 'react';
import Button from './Button';

export default function ButtonPanel() {
  return (
    <>
      <Button name="AC" />
      <Button name="+/-" />
      <Button name="%" />
      <Button name="/" color="orange" />
      <Button name="7" />
      <Button name="8" />
      <Button name="9" />
      <Button name="X" color="orange" />
      <Button name="4" />
      <Button name="5" />
      <Button name="6" />
      <Button name="-" color="orange" />
      <Button name="1" />
      <Button name="2" />
      <Button name="3" />
      <Button name="+" color="orange" />
      <Button name="0" wide="double" />
      <Button name="." />
      <Button name="=" color="orange" />
    </>
  );
}
