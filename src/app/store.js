import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../features/cards/PostSlice";

export default configureStore({
    reducer: {
        posts: postReducer
    },
});