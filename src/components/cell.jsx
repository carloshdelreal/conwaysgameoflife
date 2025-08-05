import React from 'react';
import PropTypes from 'prop-types';

function Cell({ live, x, y, handleClick }) {
  const liveStyle = {
    backgroundColor: 'black',
    border: 0,
    padding: 0,
  };
  const deadStyle = {
    backgroundColor: '#eee',
    border: 0,
    padding: 0,
  };
  return (
    <button
      type="button"
      className="cell"
      style={live === 1 ? liveStyle : deadStyle}
      onClick={() => handleClick(x, y)}
      aria-label={`Cell at position ${x}, ${y} - ${
        live === 1 ? 'alive' : 'dead'
      }`}
    />
  );
}

Cell.propTypes = {
  live: PropTypes.number.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Cell;
