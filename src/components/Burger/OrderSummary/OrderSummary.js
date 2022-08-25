import React from 'react';
import Button from '../../UI/Button/Button';

const OrderSummary = ({ingredients,price,purchaseCancelled,purchaseContinued}) => {
  const ingredientSummary = Object.keys(ingredients)
    .map(igKey => {
      return (
        <li key={igKey}>
          <span style={{textTransform: 'capitalize'}}>
            {igKey}
          </span>: {ingredients[igKey]}
        </li>
      );
    });

  return (
    <>
      <h3>Your order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p><strong>Total Price: {price} KZT</strong></p>
      <p>Continue to checkout?</p>
      <Button btnType="Danger" onClick={purchaseCancelled}>cancel</Button>
      <Button btnType="Success" onClick={purchaseContinued}>continue</Button>
    </>
  )
};

export default OrderSummary;
