import React from 'react'

const Card = (props) => {
  return (
    <div>
      <div className="price__img">
        <img src={props.img} alt="pizza" />
      </div>
          <h1 className="price__heading">{props.name}</h1>
            <p className="price__text">
              Nullam nibh sem, imperdiet ultrices commodo a, vulputate vel
              ligula. Duis venenatis at eros sed egestas. Mauris rutrum quam
              risus, vel hendrerit dui tempor in.
            </p>
          <p className="price_rs">{props.price}</p>
    </div>
        
  )
}

export default Card