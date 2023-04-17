import { PayloadAction, createSlice, } from "@reduxjs/toolkit";

interface IPage {
    id: number;
    counter: number;
}

const initialState: IPage = {
    id: 0,
    counter: 1,
}

export const productPageSlice = createSlice({
    name: 'productPage',
    initialState,
    reducers: {
        setProductPage(state, action: PayloadAction<number>) {
            state.id = action.payload;
        },
        increaseAmount: (state: IPage) => {
            state.counter++;
        },
        decreaseAmount: (state: IPage) => {
            state.counter--;
        },
        clearCounter: (state: IPage) => {
            state.counter = initialState.counter;
        }
    }
})

export default productPageSlice.reducer;
export const productPageActions = productPageSlice.actions;
