import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../features/posts/PostSlice";
import subredditReducer from "../features/subreddits/SubredditSlice";

export default configureStore({
    reducer: {
        posts: postReducer,
        subreddits: subredditReducer
    },
});