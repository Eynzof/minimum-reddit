import React from 'react';
import Post from "./Post";
import PostSkeleton from "./PostSkeleton";
import {selectStatus, selectPosts} from "./PostSlice";
import {useSelector} from "react-redux";

const Posts = () => {
    const isLoading = useSelector(selectStatus);
    const posts = useSelector(selectPosts)
    if (isLoading === 'succeeded' && posts.length > 0) {
        return (
            <div className="flex flex-col">
                {posts.map(post => {
                    return <Post key={post.data.id} post={post}/>
                })}
            </div>
        );
    }
    return <div className="flex flex-col">
        <PostSkeleton/>
        <PostSkeleton/>
        <PostSkeleton/>
        <PostSkeleton/>
        <PostSkeleton/>
        <PostSkeleton/>
        <PostSkeleton/>
        <PostSkeleton/>
    </div>
}

export default Posts