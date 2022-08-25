import React from "react";
import './OrderItem.css';

const OrderItem = ({ingredients,price}) => {
    const ingredientsArr = Object.keys(ingredients).map(igKey => {
        return {
          name: igKey,
          amount: ingredients[igKey]
        };
      });

      return (
        <div className="OrderItem">
          <p>
            Ingredients: 
            {" "}
            {ingredientsArr.map(ingredient => (
                <span key={ingredient.name}>{ingredient.name} {ingredient.amount}</span>
            ))}
            </p>
          <p>Price: <strong>{price} KZT</strong></p>
        </div>
      );
    
}

export default OrderItem;