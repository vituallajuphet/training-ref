import React from 'react'

function PageContent(props) {

    const {content}  = props;
    console.log(content)

    return (
        <div className="pageContent">
           <p>{content.content}</p>
        </div>
        
    )
}

export default PageContent
