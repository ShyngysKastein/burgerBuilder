import React, { useEffect } from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { addIngredient, changePurchasing, initBurgerBuilder, removeIngredient } from "../../store/services/Burger/BurgerSlice";

// import { INGREDIENT_PRICES, DELIVERY } from "../../constans";

// const initialState = {
//   ingredients: {
//     salad: 0,
//     bacon: 0,
//     cheese: 0,
//     meat: 0,
//   },
//   totalPrice: DELIVERY,
//   purchasing: false
// }

// const ADD_INGREDIENT = 'ADD_INGREDIENT';
// const REMOVE_INGREDIENT = 'REMOVE_INGREDIENT';
// const SET_PURCHASING = 'SET_PURCHASING';

// const reducer = (state, action) => {
//   switch (action.type) {
//     case ADD_INGREDIENT:
//       return {
//         ...state,
//         ingredients: {
//           ...state.ingredients,
//           [action.ingName]: state.ingredients[action.ingName] + 1
//         },
//         totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingName]
//       };

//     case REMOVE_INGREDIENT:
//       return {
//         ...state,
//         ingredients: {
//           ...state.ingredients,
//           [action.ingName]: state.ingredients[action.ingName] - 1
//         },
//         totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingName]
//       };

//     case SET_PURCHASING:
//       return {
//         ...state,
//         purchasing: action.purchasing
//       };
//     default:
//       return state;
//   }
// }

const BurgerBuilder = () => {
  // const [state,dispatch]  = useReducer(reducer, initialState);
  // const {ingredients,totalPrice,purchasing} = state;
  const { ingredients, totalPrice, purchasing } = useSelector(state => state.burger, shallowEqual);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const addIngredientHandler = (type) => {
    dispatch(addIngredient(type));
  };

  const isPurchasable = () => {
    const sum = Object.keys(ingredients)
      .reduce((acc, value) => acc + value, 0)
    return sum > 0;
  };

  const removeIngredientHandler = (type) => {
    dispatch(removeIngredient(type));
  };

  const purchaseHandler = () => {
    dispatch(changePurchasing(true));
  };

  const purchaseCancelHandler = () => {
    dispatch(changePurchasing(false));
  };

  const purchaseContinueHandler = () => {
    navigate('/checkout')
  };

  useEffect(() => {
    dispatch(initBurgerBuilder());
  },[dispatch])

  return (
    <>
      <Modal show={purchasing} closed={purchaseCancelHandler}>
        <OrderSummary
          ingredients={ingredients}
          price={totalPrice}
          purchaseCancelled={purchaseCancelHandler}
          purchaseContinued={purchaseContinueHandler}
        />
      </Modal>
      <Burger ingredients={ingredients} />
      <BuildControls
        purchasable={isPurchasable}
        ingredients={ingredients}
        price={totalPrice}
        ingredientAdded={addIngredientHandler}
        ingredientRemoved={removeIngredientHandler}
        ordered={purchaseHandler}
      />
    </>
  );
};

export default BurgerBuilder;
