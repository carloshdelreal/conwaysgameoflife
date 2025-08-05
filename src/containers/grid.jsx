import React from 'react';
import PropTypes from 'prop-types';
import Cell from '../components/cell';

function Grid({ grid, handleCellClick }) {
  return (
    <div>
      {grid.map((row, rowIndex) => {
        const rowKey = `row-${rowIndex}-${row.length}`;
        return (
          <div key={rowKey} className="row">
            {row.map((live, colIndex) => {
              const cellKey = `cell-${rowIndex}-${colIndex}-${live}`;
              return (
                <Cell
                  key={cellKey}
                  live={live}
                  x={rowIndex}
                  y={colIndex}
                  handleClick={handleCellClick}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

Grid.propTypes = {
  grid: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
  handleCellClick: PropTypes.func.isRequired,
};

export default Grid;
