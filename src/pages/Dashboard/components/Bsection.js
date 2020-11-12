import React from 'react'

const Bsection = (props) => {
  
    const mokData = [
        {
            id:1,
            title:"title 1",
            content:"this is test only!",
        },
        {
            id:2,
            title:"title 2",
            content:"this is test only!",
        },
        {
            id:3,
            title:"title 3",
            content:"this is test only!",
        },
  ]

  return (
    mokData.map((dta) => 
        <section className="banner--item" key ={dta.id}>
            <h2 className="bsection__h2">{dta.title}</h2>
            <p>{dta.content}</p>
            <button>Click Here</button>
        </section>
    )
  );
}

export default Bsection
