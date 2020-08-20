import React from 'react';
import Button from './Button';

export default function ButtonPanel(props) {
  const { handleclick } = props;
  return (
    <>
      <Button name="AC" color="simple" handleclick={handleclick} />
      <Button name="+/-" color="simple" handleclick={handleclick} />
      <Button name="%" color="simple" handleclick={handleclick} />
      <Button name="/" handleclick={handleclick} />
      <Button name="7" color="simple" handleclick={handleclick} />
      <Button name="8" color="simple" handleclick={handleclick} />
      <Button name="9" color="simple" handleclick={handleclick} />
      <Button name="X" handleclick={handleclick} />
      <Button name="4" color="simple" handleclick={handleclick} />
      <Button name="5" color="simple" handleclick={handleclick} />
      <Button name="6" color="simple" handleclick={handleclick} />
      <Button name="-" handleclick={handleclick} />
      <Button name="1" color="simple" handleclick={handleclick} />
      <Button name="2" color="simple" handleclick={handleclick} />
      <Button name="3" color="simple" handleclick={handleclick} />
      <Button name="+" handleclick={handleclick} />
      <Button name="0" color="simple" wide handleclick={handleclick} />
      <Button name="." color="simple" handleclick={handleclick} />
      <Button name="=" handleclick={handleclick} />
    </>
  );
}
