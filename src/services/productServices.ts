import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react'
import { IProduct } from '../store/models/IProduct';

// ?_sort=price,name&_order=desc,asc

const API_URL = 'http://localhost:5000'
interface FilterCriteria {
    minPrice?: number | null;
    maxPrice?: number | null;
    manufacturers?: string[];
    brands?: string[];
}

interface Parameters {
    page?: number;
    limit?: number;
    sortKey?: string;
    sortOrder?: string;
}

interface FilteredProductsParams extends Parameters, FilterCriteria {}

export const productAPI = createApi({
    reducerPath: 'productAPI',
    baseQuery: fetchBaseQuery({baseUrl: API_URL}),
    tagTypes: ['Product', 'FilteredProducts'],
    endpoints: (build) => ({

        fetchProducts: build.query<IProduct[], Parameters>({
            query: ({page = 1, limit = 0, sortKey = 'name', sortOrder = 'asc'}) => ({
                url: '/products',
                params:{
                    _limit: limit,
                    _page: page,
                    _sort: sortKey,
                    _order: sortOrder
                }
            }),
            providesTags: (result, error, arg) => [
                'Product'
            ],
        }),

        fetchAllProduct: build.query<IProduct[], FilterCriteria>({
            query: ({brands, manufacturers, minPrice = null, maxPrice = null}) => {
                const params = new URLSearchParams();
                if (minPrice !== null) {
                    params.set('price_gte', minPrice.toString());
                  }
                  if (maxPrice !== null) {
                    params.set('price_lte', maxPrice.toString());
                  }
                  if (manufacturers !== undefined && manufacturers?.length > 0) {
                      manufacturers.map(item => {
                          params.append('manufacturer', item)
                      })
                  }
                  if (brands !== undefined && brands?.length > 0) {
                      brands.map(item => {
                          params.append('brand', item)
                      })
                  }
                  return `/products?${params.toString()}`;
            },
            providesTags: (result, error, arg) => ['Product']
        }),

        fetchProduct: build.query<IProduct, number>({
            query: (id) => ({
                url: `/products/${id}`,
            }),
            providesTags: result => ['Product']
        }),

        fetchFilteredProducts: build.query<IProduct[], FilteredProductsParams>({
            query: ({minPrice = null, maxPrice = null, manufacturers, brands, page = 1, limit = 0, sortKey = 'name', sortOrder = 'asc'}: FilteredProductsParams) => {
                const params = new URLSearchParams();
                params.set('_page', page.toString());
                params.set('_limit', limit.toString());
                params.set('_sort', sortKey);
                params.set('_order', sortOrder);
                if (minPrice !== null) {
                  params.set('price_gte', minPrice.toString());
                }
                if (maxPrice !== null) {
                  params.set('price_lte', maxPrice.toString());
                }
                if (manufacturers !== undefined && manufacturers?.length > 0) {
                    manufacturers.map(item => {
                        params.append('manufacturer', item)
                    })
                }
                if (brands !== undefined && brands?.length > 0) {
                    brands.map(item => {
                        params.append('brand', item)
                    })
                }
                return `/products?${params.toString()}`;
              },
              providesTags: (result, error, arg) => ['Product'],
            //   invalidatesTags: ['FilteredProducts']
        }),
    })
})