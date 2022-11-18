import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../features/cards/CardSlice";

export default configureStore({
    reducer: {
        posts: postReducer
    },
});
