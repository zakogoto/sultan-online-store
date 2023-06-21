import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ICatalog } from "../models/ICatalog";
import { IProduct } from "../models/IProduct";
import { IFilter } from "../models/Ifilter";

export const initialState: ICatalog = {
    page: 1,
    limit: 15,
    filters: {
        minPrice: null,
        maxPrice: null,
        manufacturers: [],
        brands: []
    },
    sort: {
        name: 'name',
        order: 'asc'
    }
}

export const catalogSlice = createSlice({
    name: 'catalog',
    initialState,
    reducers: {
        applyFilters: (state: ICatalog, action: PayloadAction<IFilter>) => {
            state.filters = action.payload;
            // console.log(state.filters)
          },
        setSort: (state: ICatalog, action: PayloadAction<{name: string, order: string}>) => {
            state.sort.name = action.payload.name;
            state.sort.order = action.payload.order;
        },
        setPage: (state: ICatalog, action: PayloadAction<number>) => {
            state.page = action.payload
        }
    }
})

export const catalogReducer = catalogSlice.reducer;
export const catalogActions = catalogSlice.actions;