import React, { useContext } from 'react'
import { WishlistContext } from '../context/WishlistProvider'

function Wishlist() {
    const {wishlist ,addWishlist}=useContext(WishlistContext)
  return (
        <div style={{display:"flex",flexWrap:"wrap",gap:"30px"}}>
    {wishlist.map((x)=>(
        <div style={{width:"300px",display:"flex",flexDirection:"column",border:"1px solid black"}}>
    <img src={x.image} alt="" />\
    <h1>{x.name}</h1>
    <h3>{x.price}</h3>
    <button  onClick={()=>addWishlist(x)} >remove wishlist</button>
        </div>
    ))}
        </div>
  )
}

export default Wishlist