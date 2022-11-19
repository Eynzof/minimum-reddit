import './App.css';
import Posts from "../features/posts/Posts";
import {useEffect} from "react";
import Subreddits from "../features/subreddits/Subreddits";
import Header from "../components/Header";
import {useDispatch} from "react-redux";
import {fetchPost} from "../features/posts/PostSlice";

import 'antd/dist/antd.min.css'
import {fetchSubreddit} from "../features/subreddits/SubredditSlice";

function App() {

    const dispatch = useDispatch();

    // initial data load
    useEffect(() => {
        dispatch(fetchPost("/r/popular.json"))
        dispatch(fetchSubreddit())
    }, [dispatch])

    return (
        <div className="flex flex-col items-center">
            <Header/>
            <main id="main">
                <div className="flex-1" id="articles">
                    <Posts/>
                </div>
                <aside className="flex-1 card" id="categories">
                    <h2 className="subreddit-title">Subreddits</h2>
                    <Subreddits/>
                </aside>
            </main>
        </div>

    );
}

export default App;
