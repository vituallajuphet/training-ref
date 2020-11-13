import React from 'react'
import cn from 'classnames'

function SlideTitle(props) {

    const {page_title} = props;

    return (
        <div className="pageTitle">
            <h1 >{page_title}</h1>
        </div>
    )
}

export default SlideTitle
