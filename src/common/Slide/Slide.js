import React from 'react'
import imgs from "../../images/banner.jpg"


export default function Slide(props) {

    return (
        <div className="slide"> 
            <figure className="slide__figure">
                <img className="slide__figure--img" src = {imgs}/>
            </figure>
        </div>
    )
}
