// @ts-nocheck
import React, {FC} from 'react';
import {useStore} from "@nanostores/react";
import {posts} from "../../store/posts.store";
import Widgets from "../../Widgets";
const {Post} = Widgets.items
const Posts:FC = () => {
    const $posts = useStore(posts)
    return (
        <div className="pt-10 px-5 h-full min-h-screen mx-auto w-[700px]">
            {$posts.map(post => (
                <Post post={post} key={post.id}/>
            ))}
        </div>
    );
};

export default Posts;