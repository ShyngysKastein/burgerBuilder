import React from 'react';
import './BuildControl.css';

const BuildControl = ({disabled,type,removeIngredient,addIngredient}) => {
  return (
    <div className='BuildControl'>
      <div className='Label'>{type}</div>
      <button disabled={disabled} className='Less' onClick={removeIngredient}>Less</button>
      <button className='More' onClick={addIngredient}>More</button>
    </div>
  );
}

export default BuildControl;
