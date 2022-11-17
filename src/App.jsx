import './App.css';
import Cards from "./features/cards/Cards";
import {useEffect, useState} from "react";
import axios from "axios";
import Categories from "./features/categories/Categories";

const baseURL = "https://www.reddit.com/";

function App() {
    const [posts, setPosts] = useState();
    const [subreddits, setSubreddits] = useState();
    const [currentSubreddit, setCurrentSubreddit] = useState();

    useEffect(() => {
        axios.get(baseURL + "r/popular.json").then((resp) => {
            const data = resp.data.data;
            const posts = data.children;
            // console.log(posts);
            if (posts.length === 0) {
                console.log("No posts fetched")
            } else {
                setPosts(posts);
            }
        })
        axios.get(baseURL + "subreddits.json").then((resp) => {
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
            // console.log(posts);
            if (posts.length === 0) {
                console.log("No posts fetched")
            } else {
                setPosts(posts);
            }
        })
    }


    return (
        <div className="flex flex-col items-center ">
            <header id="header"
                    className="sticky top-0 h-16 w-full card ...">
                <div id="header-logo" className="flex flex-row items-center">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512"
                         className="logo-icon mr-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" >
                        <path
                            d="M201.5 305.5c-13.8 0-24.9-11.1-24.9-24.6 0-13.8 11.1-24.9 24.9-24.9 13.6 0 24.6 11.1 24.6 24.9 0 13.6-11.1 24.6-24.6 24.6zM504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-132.3-41.2c-9.4 0-17.7 3.9-23.8 10-22.4-15.5-52.6-25.5-86.1-26.6l17.4-78.3 55.4 12.5c0 13.6 11.1 24.6 24.6 24.6 13.8 0 24.9-11.3 24.9-24.9s-11.1-24.9-24.9-24.9c-9.7 0-18 5.8-22.1 13.8l-61.2-13.6c-3-.8-6.1 1.4-6.9 4.4l-19.1 86.4c-33.2 1.4-63.1 11.3-85.5 26.8-6.1-6.4-14.7-10.2-24.1-10.2-34.9 0-46.3 46.9-14.4 62.8-1.1 5-1.7 10.2-1.7 15.5 0 52.6 59.2 95.2 132 95.2 73.1 0 132.3-42.6 132.3-95.2 0-5.3-.6-10.8-1.9-15.8 31.3-16 19.8-62.5-14.9-62.5zM302.8 331c-18.2 18.2-76.1 17.9-93.6 0-2.2-2.2-6.1-2.2-8.3 0-2.5 2.5-2.5 6.4 0 8.6 22.8 22.8 87.3 22.8 110.2 0 2.5-2.2 2.5-6.1 0-8.6-2.2-2.2-6.1-2.2-8.3 0zm7.7-75c-13.6 0-24.6 11.1-24.6 24.9 0 13.6 11.1 24.6 24.6 24.6 13.8 0 24.9-11.1 24.9-24.6 0-13.8-11-24.9-24.9-24.9z"></path>
                    </svg>
                    <span style={{fontSize: "1rem"}}>Reddit<span style={{color: "var(--color-text-header)"}}>Minimum</span></span>
                </div>
                <form></form>
            </header>
            <main id="main">
                <div className="flex-1" id="articles">
                    <Cards posts={posts}/>
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
