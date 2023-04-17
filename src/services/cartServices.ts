// import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react'
// import { IProduct } from '../store/models/IProduct';
// import { ListResponse } from '../store/models/IList';

// export const cartAPI = createApi({
//     reducerPath: 'cartAPI',
//     baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000'}),
//     tagTypes: ['Item', 'Cart', 'Product'],
//     endpoints: (build) => ({
//         fetchCartItems: build.query<IProduct[], number>({
//             query: () => ({
//                 url: '/cart',
//             }),
//             providesTags: result => ['Cart']
//         }),
//         addItemToCart: build.mutation<IProduct, IProduct>({
//             query: (item) => ({
//                 url: '/cart',
//                 method: 'POST',
//                 body: item
//             }),
//             invalidatesTags: ['Cart']
//         }),
//         removeFromCart: build.mutation<IProduct, IProduct>({
//             query: (item) => ({
//                 url: `/cart/${item.id}`,
//                 method: "DELETE"
//             }),
//             invalidatesTags: ['Cart']
//         }),
//     })
// })
export {}