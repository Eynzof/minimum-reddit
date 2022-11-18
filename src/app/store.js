import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../features/posts/PostSlice";

export default configureStore({
    reducer: {
        posts: postReducer
    },
});