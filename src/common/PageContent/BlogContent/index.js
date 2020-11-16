import React from 'react'
import BlogPost from './BlogPost'
import blogMachine from '../BlogStore';

function BlogContent() {
    return (
        <div className="blogContent">
            <BlogPost content = {blogMachine} />
        </div>
    )
}

export default BlogContent;
