import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFilter } from '../models/Ifilter';

export const initialState: IFilter = {
  brands: [],
  manufacturers: [],
  minPrice: null,
  maxPrice: null,
  isClearFilter: true
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    addFilter: (state:IFilter, action: PayloadAction<{type: string, value: string}>) => {
        state[action.payload.type === 'brand' ? 'brands' : 'manufacturers'].push(action.payload.value);
        state.isClearFilter = false
    },
    removeFilter: (state: IFilter, action: PayloadAction<{type: string, value: string}>) => {
        const filterKey = action.payload.type === 'brand' ? 'brands' : 'manufacturers';
        state[filterKey] = state[filterKey].filter((filterValue) => filterValue !== action.payload.value);
    },
    setMinPrice: (state:IFilter, action: PayloadAction<number>) => {
      state.minPrice = action.payload === 0 ? null : action.payload;
      state.isClearFilter = false
    },
    setMaxPrice: (state:IFilter, action: PayloadAction<number>) => {
      state.maxPrice = action.payload === 999999 ? null : action.payload;
      state.isClearFilter = false
    },
    clearFilter: (state: IFilter) => {
        state.brands = []
        state.manufacturers = []
        state.minPrice = null
        state.maxPrice = null
        state.isClearFilter = true
    },
  },
});

export const filterReducer = filtersSlice.reducer;
export const filterActions = filtersSlice.actions;