import React from 'react';
import PropTypes from 'prop-types';

export default function Display(props) {
  const { result } = props;
  return (
    <input placeholder="enter the number" value={result === '' ? '0' : result} />
  );
}
Display.propTypes = {
  result: PropTypes.string,
};
Display.defaultProps = {
  result: '0',
};
