import React from 'react'

function Box({prod}) {
  return (
    <div className='box-Container'>
            <img src={prod.image} alt="" />
        <p>{prod.title.slice(0,10)}...</p>
  
        {/* <p>{prod.description}</p> */}
        <p>{prod.category}</p>
        <p>{prod.price} TND</p>
        {/* <p>{prod.rating}</p> */}
        <button className='btnShow'>Show More</button>
    </div>
  )
}

export default Box