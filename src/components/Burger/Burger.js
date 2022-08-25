import React from 'react';
import './Burger.css';
import Ingredient from './Ingredient/Ingredient';

const Burger = ({ingredients}) => {
  const ingredientKeys = Object.keys(ingredients);
  let ingList = [];
  ingredientKeys.forEach(igKey => {
    let amount = ingredients[igKey];
    for(let i = 0; i < amount; i++){
      ingList.push(<Ingredient key={igKey + i} type={igKey}/>)
    }
  })
  return (
    <div className='Burger'>
      <Ingredient type='bread-top'/>
      {ingList}
      <Ingredient type='bread-bottom'/>
    </div>
  )
}

export default Burger;
