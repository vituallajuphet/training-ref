import React from 'react'

function BlogPost(props) {

    const {content} = props;

    const card_list = content.map( (itm) => 
        <div className="blogContent__card" key = {itm.id}> 
            <h3>{itm.title}</h3>
            <p>{itm.content}</p>
        </div>);

    return (
        <>
            {card_list}
        </>
    )
}

export default BlogPost
