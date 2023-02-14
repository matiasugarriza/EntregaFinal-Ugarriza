import React from 'react'

const ItemListContainer = ({greeting}) => {
  return (
    <div>
       <p className='greeting' style={{
      textAlign:'center',
      margin:'10vw'
    }}>{greeting}</p>
    </div>
  )
}

export default ItemListContainer