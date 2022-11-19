import React from "react";
import {Skeleton} from "antd";

export const SubredditSkeleton = () => {
    return (
        <div className="subreddit-card">
            <button type="button">
                <Skeleton.Avatar active size='small' shape='circle' className="subreddit-logo-skeleton h-6" />
                <Skeleton.Input active size='small' />
            </button>
        </div>
    )
}