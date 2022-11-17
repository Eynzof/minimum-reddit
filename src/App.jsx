import './App.css';
import Cards from "./features/cards/Cards";
import {useEffect, useState} from "react";
import axios from "axios";
import Categories from "./features/categories/Categories";
import Header from "./components/Header";

import 'antd/dist/antd.css';

const baseURL = "https://www.reddit.com";

function App() {
    const [posts, setPosts] = useState();
    const [subreddits, setSubreddits] = useState();
    const [currentSubreddit, setCurrentSubreddit] = useState();

    const [isLoading, setIsLoading] = useState(false);


    // page initialize state
    useEffect(() => {
        setIsLoading(true);
        axios.get(baseURL + "/r/popular.json").then((resp) => {
            const data = resp.data.data;
            const posts = data.children;
            // console.log(posts);
            if (posts.length === 0) {
                console.log("No posts fetched")
            } else {
                setPosts(posts);
            }
        })
        axios.get(baseURL + "/subreddits.json").then((resp) => {
            setIsLoading(false);
            const data = resp.data.data;
            const subreddits = data.children
            setSubreddits(subreddits)
        })
    }, [])

    const handleClick = (e, url) => {
        setIsLoading(true)
        setCurrentSubreddit(e.currentTarget.value)
        axios.get(baseURL + url + ".json").then((resp) => {
            setIsLoading(false);
            const data = resp.data.data;
            const posts = data.children;
            // console.log(posts);
            if (posts.length === 0) {
                console.log("No posts fetched")
            } else {
                setPosts(posts);
            }
        })
    }

    const handleSearch= (keyword) => {
        // console.log(posts)
        const results = posts.filter(post => {
            return post.data.title.indexOf(keyword) >=0;
        })
        setPosts(results)
        // console.log(results)
    }



    return (
        <div className="flex flex-col items-center ">
            <Header handleSearch={handleSearch}/>
            <main id="main">
                <div className="flex-1" id="articles">
                    <Cards posts={posts} isLoading={isLoading}/>
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
