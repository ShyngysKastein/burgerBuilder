import { createSlice } from "@reduxjs/toolkit";
import { DELIVERY, INGREDIENT_PRICES } from "../../../constans";

const initialState = {
    ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
      },
      totalPrice: DELIVERY,
      purchasing: false,  
};



const burgerSlice = createSlice({
    name:'burger',
    initialState,
    reducers:{
        addIngredient: (state,action) =>{
            state.ingredients[action.payload] += 1
            state.totalPrice += INGREDIENT_PRICES[action.payload];
        },
        removeIngredient: (state,action) => {
            state.ingredients[action.payload] -= 1
            state.totalPrice -= INGREDIENT_PRICES[action.payload];
        },
        changePurchasing:(state,action) => {
            state.purchasing = action.payload;
        },
        initBurgerBuilder:() => {
            return initialState;
        }
    },
})

export const {addIngredient,removeIngredient,changePurchasing,initBurgerBuilder} = burgerSlice.actions;
export default burgerSlice.reducer;