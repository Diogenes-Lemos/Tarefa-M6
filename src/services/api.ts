import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { restaurantInput } from '../types/types'

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
    })
  })
})

export const { useGetRestaurantsQuery, useGetRestaurantByIdQuery } = api
export default api
