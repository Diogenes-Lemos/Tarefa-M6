import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type ProductType = {
  id: string | number | null
  imagePath: string | null
  title: string | null
  price: number | null
}

type CartState = {
  items: ProductType[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<ProductType>) => {
      state.items.push(action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    remove: (state, action: PayloadAction<string | number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    clearCart: (state) => {
      state.items = []
    }
  }
})

export const { add, open, close, remove, clearCart } = cartSlice.actions
export default cartSlice.reducer
