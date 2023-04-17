import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../models/IProduct";
import { ICartItem } from "../models/ICartItem";
import ItemCard from "../../components/item/card/ItemCard";

interface CartState {
    cartItems: ICartItem[];
    totalPrice: number;
    isLoading: boolean;
    error: string;
}

const initialState: CartState = {
    cartItems: [],
    totalPrice: 0,
    isLoading: false,
    error: 'string',

};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<ICartItem>) => {
            state.cartItems.push(action.payload)
            state.totalPrice += action.payload.price;
        },
        removeItem: (state, action: PayloadAction<{id: number}>) => {
            // state.cartItems.filter(product => product.id !== action.payload.id)
            const index = state.cartItems.findIndex((item => item.id === action.payload.id));
            state.totalPrice = state.totalPrice - state.cartItems[index].amount * state.cartItems[index].price
            state.cartItems.splice(index, 1);
        },
        increaseCartItemAmount: (state: CartState, action: PayloadAction<{ id: number, amount: number }>) => {
            const item = state.cartItems.find(item => item.id === action.payload.id);
            if (item) {
                item.amount += action.payload.amount;
                state.totalPrice += item.price * action.payload.amount;
            }
        },
        decreaseCartItemAmount: (state: CartState, action: PayloadAction<{ id: number }>) => {
            const item = state.cartItems.find(item => item.id === action.payload.id);
            if (item) {
                if (item.amount === 1) {
                    const index = state.cartItems.findIndex((item => item.id === action.payload.id));
                    state.totalPrice = state.totalPrice - state.cartItems[index].amount * state.cartItems[index].price;
                    state.cartItems.filter(product => product.id !== action.payload.id)
                    return;
                }
                item.amount--;
                state.totalPrice -= item.price;
            }
        },
        clearCart: (state: CartState) => {
            state.cartItems.length = 0;
            state.totalPrice = 0;
        }
    },
})

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;