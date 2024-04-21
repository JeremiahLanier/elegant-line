// src/components/BlogPosts.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../features/blog/blogSlice';

const BlogPosts = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.blog.posts);
    const postStatus = useSelector((state) => state.blog.status);
    const error = useSelector((state) => state.blog.error);

    useEffect(() => {
        if (postStatus === 'idle') {
            dispatch(fetchPosts());
        }
    }, [postStatus, dispatch]);

    let content;

    if (postStatus === 'loading') {
        content = <div>Loading...</div>;
    } else if (postStatus === 'succeeded') {
        content = (
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        );
    } else if (postStatus === 'failed') {
        content = <div>{error}</div>;
    }

    return (
        <section>
            <h2>Blog Posts</h2>
            {content}
        </section>
    );
};

export default BlogPosts;
