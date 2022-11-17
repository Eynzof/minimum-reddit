import './App.css';
import Card from "./features/cards/Card";
import Cards from "./features/cards/Cards";
import {useEffect, useState} from "react";
import axios from "axios";
import Categories from "./features/categories/Categories";

const baseURL = "https://www.reddit.com/";

function App() {
    const [posts, setPosts] = useState();
    const [subreddits, setSubreddits] = useState();
    const [currentSubreddit, setCurrentSubreddit] = useState();

    useEffect(()=> {
        axios.get(baseURL + "r/popular.json").then((resp)=> {
            const data = resp.data.data;
            const posts = data.children;
            // console.log(posts);
            if(posts.length === 0) {
                console.log("No posts fetched")
            } else {
                setPosts(posts);
            }
        })
        axios.get(baseURL +"subreddits.json").then((resp)=> {
            const data = resp.data.data;
            const subreddits = data.children
            setSubreddits(subreddits)
            // console.log("subredditdata", subreddits)
            // const subreddit = data.children;
            // console.log(posts);
            // if(posts.length === 0) {
            //     console.log("No posts fetched")
            // } else {
            //     setPosts(posts);
            // }
        })
    },[])

    const handleClick = (e) => {
        console.log(e.target.value)
        setCurrentSubreddit(e.target.value)
        const url = subreddits.filter(subreddit => {
            return subreddit.data.display_name === e.target.value;
        })[0].data.url;
        axios.get(baseURL + url + ".json").then((resp)=> {
            const data = resp.data.data;
            const posts = data.children;
            // console.log(posts);
            if(posts.length === 0) {
                console.log("No posts fetched")
            } else {
                setPosts(posts);
            }
        })
        console.log(url);
    }


    return (
        <div className="flex flex-col items-center">
            <header id="header"
                    className="sticky top-0 h-16 w-full p-2 card ...">Sticky header
            </header>
            <main id="main">
                <div className="flex-1" id="articles">
                    <Cards posts={posts}/>
                </div>
                <aside className="flex-1 card" id="categories">
                    <p>Sub Reddit</p>
                    <Categories subreddits={subreddits} handleClick={handleClick} currentSubreddit={currentSubreddit} />
                </aside>
            </main>
        </div>

    );
}

export default App;
