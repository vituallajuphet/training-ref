import React from 'react'

const Bheader = (props) => {

  const { data } = props;

  console.log(data)

  return (
    <>
        <div className="bannerHeader">
            <h2>{data.title}</h2>
            <p>{data.content}</p>
        </div>
    </>
  );
}

export default Bheader
