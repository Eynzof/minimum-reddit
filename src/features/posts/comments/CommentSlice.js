import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import axios from "axios";

const baseURL ="https://www.reddit.com";

export const fetchComment = createAsyncThunk(
    'posts/fetchComment',
    async({url, id}, ThunkAPI) => {
        const resp = await axios.get(baseURL + url + '.json');

        return {id, data: resp.data[1].data.children};
    }
)

const CommentSlice = createSlice({
    name: 'comments',
    initialState: {
        comments: [],
        status: 'idle'
    },
    reducers: {
    },
    extraReducers: {
        [fetchComment.pending]: (state, _) => {
            state.status = 'loading';
        },
        [fetchComment.fulfilled]: (state, action) => {
            state.status = 'succeeded';
            state.comments.push(action.payload);
        }
    }
})

export const selectCommentsById = id => store => {
    return store.comments.comments.filter(comment => comment.id === id);
}
export const selectLoaded = (state) => state.comments.status === 'succeeded';
export const selectCommentsInStore = id => store => {
    return store.comments.comments.filter(comment => comment.id === id).length > 0
}

export default CommentSlice.reducer;

