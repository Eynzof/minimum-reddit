import React from 'react';
import Card from "./Card";
import CardSkeleton from "./CardSkeleton";
import {selectStatus} from "./PostSlice";
import {useSelector} from "react-redux";

const Cards = ({posts, _}) => {
    const isLoading = useSelector(selectStatus);
    console.log('isLoading', isLoading)
    if (isLoading === 'loading') {
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
    if (isLoading === 'succeeded') {
        return (
            <div className="flex flex-col">
                {posts.map(post => {
                    return <Card key={post.data.id} post={post}/>
                })}
            </div>
        );
    }
    if (isLoading === 'idle') {
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
    return <p>Error</p>
}

export default Cards