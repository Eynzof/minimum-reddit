import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const baseURL ="https://www.reddit.com";

export const fetchPost = createAsyncThunk(
    'posts/fetchPost',
    async(url, thunkAPI) => {
        const resp = await axios.get(baseURL + url);
        return resp.data.data.children;
    }
)
//
// const fetchPosts = (url) => {
//     axios.get(baseURL + url).then((resp) => {
//         const data = resp.data.data;
//         const posts = data.children;
//
//         if (posts.length === 0) {
//             console.log("No posts fetched")
//         } else {
//             setPosts(posts);
//         }
//     })
// }