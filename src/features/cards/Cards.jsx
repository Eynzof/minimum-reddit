import React from 'react';
import Card from "./Card";
import CardSkeleton from "./CardSkeleton";
import {selectStatus, selectPosts} from "./PostSlice";
import {useSelector} from "react-redux";

const Cards = () => {
    const isLoading = useSelector(selectStatus);
    const posts = useSelector(selectPosts)
    if (isLoading === 'succeeded' && posts) {
        return (
            <div className="flex flex-col">
                {posts.map(post => {
                    return <Card key={post.data.id} post={post}/>
                })}
            </div>
        );
    }
    return <div className="flex flex-col">
        <CardSkeleton/>
        <CardSkeleton/>
        <CardSkeleton/>
        <CardSkeleton/>
        <CardSkeleton/>
        <CardSkeleton/>
        <CardSkeleton/>
        <CardSkeleton/>
    </div>
}

export default Cards