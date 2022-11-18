import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const baseURL ="https://www.reddit.com";

export const fetchPost = createAsyncThunk(
    'posts/fetchPost',
    async(url, thunkAPI) => {
        const resp = await axios.get(baseURL + url);
        return resp.data.data.children;
    }
)

const PostSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: {},
        status: 'idle'
    },
    reducers: {
        updatePost: (state, action) => {
            state.posts = action.payload;
        }
    },
    extraReducers: {
        [fetchPost.pending]: (state, _) => {
            state.status = 'loading';
        },
        [fetchPost.fulfilled]: (state, action) => {
            state.status = 'succeeded';
            state.posts = action.payload;
        }
    }
})

export const selectPosts = (state) => state.posts.posts;
export const selectStatus = (state) => state.posts.status;

export const { updatePost } = PostSlice.actions;
export default PostSlice.reducer;
