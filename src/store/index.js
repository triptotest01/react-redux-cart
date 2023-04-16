import {configureStore}from '@reduxjs/toolkit'

const store= configureStore({
  reducer: {ui: uiSlice.reducer, cart: createSlice.reducer},
})

export default store;