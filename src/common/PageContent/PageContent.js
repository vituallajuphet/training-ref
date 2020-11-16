import React from 'react'
import BlogContent from './BlogContent';

function PageContent(props) {

    const {content}  = props;

    return (
        <div className="pageContent">
           <p>{content.content}</p>
           <BlogContent />
        </div>

    )
}

export default PageContent
