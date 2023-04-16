import {createSlice} from '@reduxjs/toolkit';

createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    replaceCart(state, action){
     state.totalQuantity = action.payload.totalQuantity;
     state.items = action.payload.items;
      
    },
    addItemToCart(state,action){
      const newItem = action.payload;
      const existingItem = state.items.find((item)=>item.id=== newItem.id);
      state.totalQuantity++;
      if(!existingItem){
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        })
      } else{
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice+ newItem.price;
      }
    },
    removeItemFromCart(state, action){

    }

  }

})