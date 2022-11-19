import './App.css';
import Posts from "../features/posts/Posts";
import {useEffect} from "react";
import Subreddits from "../features/subreddits/Subreddits";
import Header from "../components/Header";
import {useDispatch, useSelector} from "react-redux";
import { fetchPost } from "../features/posts/PostSlice";

import 'antd/dist/antd.css';
import {selectPosts} from "../features/posts/PostSlice";
import { updatePost } from "../features/posts/PostSlice";
import {fetchSubreddit, updateCurrent} from "../features/subreddits/SubredditSlice";

function App() {

    const dispatch = useDispatch();

    // card slice
    const posts = useSelector(selectPosts);

    // initial data load
    useEffect(()=>{
        dispatch(fetchPost("/r/popular.json"))
        dispatch(fetchSubreddit())
    },[])

    const handleClick = (e, url) => {
        dispatch(updateCurrent(e.currentTarget.value))
        dispatch(fetchPost(url + ".json"))
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
                    <Subreddits handleClick={handleClick}/>
                </aside>
            </main>
        </div>

    );
}

export default App;
