import React from 'react';
import Card from "./Card";

const Cards = (props) => {
    const posts = props.posts;
    return (<div >
        {posts ? posts.map(post => {
            return <Card key={post.id} post={post}/>
        }) : <p>No post fetched</p>}
    </div>)
}

export default Cards