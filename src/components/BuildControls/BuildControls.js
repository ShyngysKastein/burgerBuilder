import React from 'react';
import './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const BuildControls = (props) => {
  const {purchasable,ingredients,ingredientAdded,ingredientRemoved,price} = props;
  const disabledInfo = {...ingredients};

  for(let key in disabledInfo){
    disabledInfo[key] = disabledInfo[key] <= 0;
  }

  return (
    <div className='BuildControls'>
      <p>CurrentPrice: <strong>{price}KZT</strong></p>
        {Object.keys(ingredients).map(ingType => {
          return (<BuildControl 
            addIngredient={() =>{ingredientAdded(ingType)}}
            removeIngredient={()=>{ingredientRemoved(ingType)}} 
            key={ingType} 
            type={ingType}
            disabled={disabledInfo[ingType]}
            />  
          )
        })}
        <button 
        className="OrderButton"
        disabled={!purchasable}
        onClick={props.ordered}
        >order now</button>
    </div>
  )
}

export default BuildControls;
