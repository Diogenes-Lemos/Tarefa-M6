import { configureStore } from '@reduxjs/toolkit'
import api from '../services/api'
import cartReducer from './slices/cartSlice'
import checkoutReducer from './slices/checkoutSlice'

const store = configureStore({
  reducer: {
    cart: cartReducer,
    checkout: checkoutReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
