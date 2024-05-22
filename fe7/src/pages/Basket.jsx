import React, { useContext } from 'react'
import { BasketContext } from '../context/BasketProvider'

function Basket() {
    const {basket,addBasket,removeBasket,decreaseBasket}=useContext(BasketContext)
  return (
    <div style={{display:"flex",flexWrap:"wrap",gap:"30px"}}>
    {basket.map((x)=>(
        <div style={{width:"300px",display:"flex",flexDirection:"column",border:"1px solid black"}}>
    <img src={x.image} alt="" />\
    <h1>{x.name}</h1>
    <h3>{x.price}</h3>
    <p>{x.count}</p>
    <button onClick={()=>addBasket(x)}>+ </button>
    <button onClick={()=>decreaseBasket(x)}>- </button>
    <button  onClick={()=>removeBasket(x)} >remove basket</button>
        </div>
    ))}
        </div>
  )
}

export default Basket