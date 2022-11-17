import React from 'react';
import Card from "./Card";
import CardSkeleton from "./CardSkeleton";

const Cards = ({posts, isLoading}) => {
    if (isLoading) {
        return (<div className="flex flex-col">
            {/*TODO: skeleton*/}
            <CardSkeleton/>
            <CardSkeleton/>
            <CardSkeleton/>
            <CardSkeleton/>
            <CardSkeleton/>
            <CardSkeleton/>
            <CardSkeleton/>
            <CardSkeleton/>
        </div>)
    }
    if (posts) {
        return (
            <div className="flex flex-col">
                {posts.map(post => {
                    return <Card key={post.data.id} post={post}/>
                })}
            </div>
        );
    }
    return <p>No post fetched</p>
}

export default Cards