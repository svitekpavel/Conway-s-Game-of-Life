import React from 'react';
import classNames from 'classnames';

const getCellClasses = (cell) => {
  return {
    'cell': true,
    'live': cell === 1,
  };
};

const GridCell = (props) => {
  const classes = getCellClasses(props.cell);
  return (
    <span
      onClick={() => props.onGridClick(props.x, props.y)} 
      className={classNames(classes)}
      />
  );
};

GridCell.propTypes = {
  cell: React.PropTypes.number.isRequired,
};

export default GridCell;
