import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const baseURL ="https://www.reddit.com/subreddits.json";

export const fetchSubreddit = createAsyncThunk(
    'subreddits/fetchSubreddit',
    async(_, thunkAPI) => {
        const resp = await axios.get(baseURL);
        return resp.data.data.children;
    }
)

const SubredditSlice = createSlice({
    name: "subreddits",
    initialState: {
        subreddits: {},
        status: 'idle'
    },
    reducers: {

    },
    extraReducers: {
        [fetchSubreddit.pending]: (state, _) => {
            state.status = 'loading';
        },
        [fetchSubreddit.fulfilled]: (state, action) => {
            state.status = 'succeeded';
            state.subreddits = action.payload;
        }
    }
})
export const selectStatus = (state) => state.subreddits.status;
export const selectSubreddits = (state) => state.subreddits.subreddits;
export default SubredditSlice.reducer;
