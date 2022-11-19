import './App.css';
import Posts from "../features/posts/Posts";
import {useEffect, useState} from "react";
import axios from "axios";
import Categories from "../features/categories/Categories";
import Header from "../components/Header";
import {useDispatch, useSelector} from "react-redux";
import { fetchPost } from "../features/posts/PostSlice";

import 'antd/dist/antd.css';
import store from "./store";
import {selectPosts} from "../features/posts/PostSlice";
import { updatePost } from "../features/posts/PostSlice";

const baseURL = "https://www.reddit.com";

function App() {

    const dispatch = useDispatch();

    // card slice
    const posts = useSelector(selectPosts);

    // subreddit slice
    const [subreddits, setSubreddits] = useState();
    const [currentSubreddit, setCurrentSubreddit] = useState();

    // initial data load
    useEffect(()=>{
        store.dispatch(fetchPost("/r/popular.json"))
    },[])

    // page initialize state
    useEffect(() => {
        axios.get(baseURL + "/subreddits.json").then((resp) => {
            const data = resp.data.data;
            const subreddits = data.children
            setSubreddits(subreddits)
        })
    }, [])

    const handleClick = (e, url) => {
        setCurrentSubreddit(e.currentTarget.value)
        axios.get(baseURL + url + ".json").then((resp) => {
            const data = resp.data.data;
            const posts = data.children;
            if (posts.length === 0) {
                console.log("No posts fetched")
            } else {
                dispatch(updatePost(posts))
            }
        })
    }

    const handleSearch= (keyword) => {
        const results = posts.filter(post => {
            return post.data.title.indexOf(keyword) >=0;
        })
        dispatch(updatePost(results));
    }

    return (
        <div className="flex flex-col items-center">
            <Header handleSearch={handleSearch}/>
            <main id="main">
                <div className="flex-1" id="articles">
                    <Posts />
                </div>
                <aside className="flex-1 card" id="categories" >
                    <h2 className="subreddit-title">Subreddits</h2>
                    <Categories subreddits={subreddits} handleClick={handleClick} currentSubreddit={currentSubreddit}/>
                </aside>
            </main>
        </div>

    );
}

export default App;
