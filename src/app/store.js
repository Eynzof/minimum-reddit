import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../features/posts/PostSlice";
import subredditReducer from "../features/subreddits/SubredditSlice";
import commentReducer from "../features/posts/comments/CommentSlice"

export default configureStore({
    reducer: {
        posts: postReducer,
        subreddits: subredditReducer,
        comments: commentReducer
    },
});