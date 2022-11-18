import { createSlice } from "@reduxjs/toolkit";

const CardSlice = createSlice({
    name: 'card',
    initialState: {
        posts: {}
    },
    reducers: {
        updateCard: (state, action) => {
            const newPosts = action.payload;
            state.posts = newPosts;
        }
    }
})

export const selectPosts = (state) => state.posts;

export const { updateCard } = CardSlice.actions;
export default CardSlice.reducer;
