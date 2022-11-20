import React from "react";
import {Skeleton} from "antd";

export const CommentSkeleton = () => {
    return (<div className="post-comments mt-2">
        <div className="post-comment card" style={{
            padding: "1rem",
            marginBottom: '1rem',
            boxShadow: 'none',
            border: '1px solid var(--color-border)'
        }}>
            <div className="comment-meta flex flex-row justify-between">
                <Skeleton/>
            </div>
            <div className="comment" style={{wordWrap: 'break-word'}}><Skeleton/></div>
        </div>
        <div className="post-comment card" style={{
            padding: "1rem",
            marginBottom: '1rem',
            boxShadow: 'none',
            border: '1px solid var(--color-border)'
        }}>
            <div className="comment-meta flex flex-row justify-between">
                <Skeleton/>
            </div>
            <div className="comment" style={{wordWrap: 'break-word'}}><Skeleton/></div>
        </div>
        <div className="post-comment card" style={{
            padding: "1rem",
            marginBottom: '1rem',
            boxShadow: 'none',
            border: '1px solid var(--color-border)'
        }}>
            <div className="comment-meta flex flex-row justify-between">
                <Skeleton/>
            </div>
            <div className="comment" style={{wordWrap: 'break-word'}}><Skeleton/></div>
        </div>
    </div>)
}