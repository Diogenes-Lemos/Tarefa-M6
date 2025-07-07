import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { restaurantInput } from '../types/types'
import type { OrderInfo } from '../redux/slices/orderSlice'

const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood/'
  }),
  endpoints: (builder) => ({
    getRestaurants: builder.query<restaurantInput[], void>({
      query: () => 'restaurantes'
    }),
    getRestaurantById: builder.query<restaurantInput, string>({
      query: (id) => `restaurantes/${id}`
    }),
    checkoutOrder: builder.mutation<{ orderId: string }, OrderInfo>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
})

export const {
  useGetRestaurantsQuery,
  useGetRestaurantByIdQuery,
  useCheckoutOrderMutation
} = api
export default api
