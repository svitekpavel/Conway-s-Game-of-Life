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
  return <span className={classNames(classes)}/>;
}

export default GridCell;
