import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import cartReducer from './cartSlice'
import { productApi } from './APISlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
    [productApi.reducerPath]: productApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
})
