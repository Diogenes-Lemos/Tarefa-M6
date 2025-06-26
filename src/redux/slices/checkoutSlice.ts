import { createSlice } from '@reduxjs/toolkit'

type ClientData = {
  sucess: boolean
  empty: boolean
}

type PaymentData = {
  sucess: boolean
  empty: boolean
}

type OrderData = {
  sucess: boolean
  empty: boolean
}

type CheckoutState = {
  client: ClientData
  payment: PaymentData
  order: OrderData
}

const InitialClientData: ClientData = {
  sucess: false,
  empty: true
}

const InitialPaymentData: PaymentData = {
  sucess: false,
  empty: true
}

const InitialOrderData: OrderData = {
  sucess: false,
  empty: true
}

const initialState: CheckoutState = {
  client: InitialClientData,
  payment: InitialPaymentData,
  order: InitialOrderData
}

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    clientAccepted: (state) => {
      state.client.sucess = true
      state.client.empty = false
    },
    paymentAccepted: (state) => {
      state.payment.sucess = true
      state.payment.empty = false
    },
    orderAccepted: (state) => {
      state.order.sucess = true
      state.order.empty = false
    },
    orderReset: (state) => {
      state.client.sucess = false
      state.client.empty = true
      state.payment.sucess = false
      state.payment.empty = true
      state.order.sucess = false
      state.order.empty = true
    }
  }
})

export const { clientAccepted, paymentAccepted, orderAccepted, orderReset } =
  checkoutSlice.actions
export default checkoutSlice.reducer
