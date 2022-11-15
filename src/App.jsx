import './App.css';
import Card from "./features/cards/Card";
import Cards from "./features/cards/Cards";
import {useEffect} from "react";
import axios from "axios";

const baseURL = "https://www.reddit.com/r/popular.json";

function App() {


    useEffect(()=> {
        axios.get(baseURL).then((resp)=> {
            const data = resp.data.data;
            const posts = data.children;
            console.log(posts);
            if(posts.length === 0) {
                console.log("No posts fetched")
            }
        })
    },[])

    return (
        <div className="flex flex-col items-center">
            <header id="header"
                    className="sticky top-0 h-16 w-full p-2 card ...">Sticky header
            </header>
            <main id="main">
                <div className="flex-1 p-2" id="articles">
                    <Cards />
                    <Cards />
                    <Cards />
                    <Cards />
                    <Cards />
                    <Cards />
                    <Cards />
                    <Cards />
                </div>
                <aside className="flex-1 p-2 card" id="categories">
                    <p>Sub Reddit</p>
                    <ul>
                        <li>1</li>
                        <li>1</li>
                        <li>1</li>
                        <li>1</li>
                        <li>1</li>
                        <li>1</li>
                    </ul>
                </aside>
            </main>
        </div>

    );
}

export default App;
