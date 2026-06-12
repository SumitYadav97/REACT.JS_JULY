import { createSlice } from "@reduxjs/toolkit";

export const wishlistSlice = createSlice({
    name: "wishlist",
    initialState: {
        items: [],
    },
    reducers: {
        addToWishlist: (state, action) => {
            const { payload } = action;

            const newItem = {
                id: payload.id,
                title: payload.title,
                thumbnail: payload.thumbnail,
                stock: payload.stock,
                price: payload.price,
            };

            state.items.push(newItem);
        },

        removeFromWishlist: (state, action) => {
            state.items = state.items.filter(
                item => item.id !== action.payload
            );
        },
    },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;