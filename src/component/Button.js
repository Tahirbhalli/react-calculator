import React from 'react';
import PropTypes from 'prop-types';

export default function Button(props) {
  const {
    handleclick, wide, color, name,
  } = props;
  if (wide) {
    return (
      <button type="button" className={`double ${color}`} onClick={() => handleclick(name)}>{props.name}</button>
    );
  }
  return (
    <button type="button" className={`${color}`} onClick={() => handleclick(props.name)}>{name}</button>
  );
}
Button.propTypes = {
  name: PropTypes.string,
  wide: PropTypes.bool,
  color: PropTypes.string,
  handleclick: PropTypes.func,
};

Button.defaultProps = {
  name: '',
  color: 'orange',
  wide: false,
  handleclick: null,
};
