import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Product = {
    id: number
    price: number
}

export type OrderInfo = {
    products: Product[],
    delivery: {
        receiver: string
        address: {
            description: string
            city: string
            zipCode: string
            number: number
            complement: string
        }
    }
    payment: {
        card: {
            name: string
            number: string
            code: number
            expires: {
                month: number
                year: number
            }
        }
    }
}

type OrderState = {
    information: OrderInfo
    orderId: string
}

const initialState: OrderState = {
    information: {
        products: [],
        delivery: {
            receiver: '',
            address: {
                description: '',
                city: '',
                zipCode: '',
                number: 0,
                complement: ''
            }
        },
        payment: {
            card: {
                name: '',
                number: '',
                code: 0,
                expires: {
                    month: 1,
                    year: new Date().getFullYear()
                }
            }
        }
    },
    orderId: ''
}

const OrderSlice = createSlice({
    name: 'orderInformations',
    initialState,
    reducers: {
        setProducts: (state, action: PayloadAction<Product[]>) => {
            state.information.products = action.payload
        },
        setRecipientData: (state, action: PayloadAction<{
            receiver: string
            description: string
            city: string
            zipCode: string
            number: number
            complement: string
        }>) => {
            state.information.delivery = {
                receiver: action.payload.receiver,
                address: {
                    description: action.payload.description,
                    city: action.payload.city,
                    zipCode: action.payload.zipCode,
                    number: action.payload.number,
                    complement: action.payload.complement
                }
            }
        },
        setPaymentData: (state, action: PayloadAction<{
            name: string
            number: string
            code: number
            month: number
            year: number
        }>) => {
            state.information.payment.card = {
                name: action.payload.name,
                number: action.payload.number,
                code: action.payload.code,
                expires: {
                    month: action.payload.month,
                    year: action.payload.year
                }
            }
        },
        resetOrderInformations: (state) => {
            state.information = initialState.information
        },
        setOrderId: (state, action: PayloadAction<string>) => {
            state.orderId = action.payload
        }
    }
})

export const {
    setProducts,
    setRecipientData,
    setPaymentData,
    setOrderId,
    resetOrderInformations
} = OrderSlice.actions

export default OrderSlice.reducer
