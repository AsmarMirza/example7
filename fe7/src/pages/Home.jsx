import React, { useContext, useEffect, useState } from 'react'
import "./home.scss"
import { BasketContext } from '../context/BasketProvider'
import { Link } from 'react-router-dom'
import { WishlistContext } from '../context/WishlistProvider'

function Home() {
    const [products, setProducts] = useState([])
    const {addBasket}=useContext(BasketContext)
    const {addWishlist,isExist}=useContext(WishlistContext)
    useEffect(() => {
        getAllProducts()
    }, [])
     
    async function getAllProducts(){
        const res=await fetch("http://localhost:3000/products/")
        const data=await res.json()
        setProducts(data)
    }
  return (
    <div>
        <section className='hero'>
<div  className='heroBox'>

<div className='heroImg'>
    <img style={{width:"100%"}} src="https://preview.colorlib.com/theme/shop/img/header-img.png.webp" alt="" />
</div>
<div className='heroRight'>
    <p className='heroText' >< span className='heroDif'>Flat</span> 75%Off</p>
    <h1 className='heroFooter' >IT’S HAPPENING
THIS SEASON!</h1>
<button className='heroBtn'>Purchase Now</button>
</div>
</div>
        </section>

<section className='shop'>
 
    <div className='shopwomen'>
{products.map((x)=>(
    <div style={{maxWidth:"250px",width:"100%", border:"1px solid black"}}>
        {isExist(x)?<i onClick={()=>addWishlist(x)} className="fa-solid fa-heart"></i>:<i onClick={()=>addWishlist(x)} className="fa-regular fa-heart"></i>}
<img style={{width:"100%"}} src={x.image} alt="" />
<h1>{x.name}</h1>
<h3>{x.price}</h3>
<button onClick={()=>addBasket(x)}>add basket</button>
<Link to={`/detail/${x._id}`}>go to detail</Link>
    </div>
))}
    </div>
    
</section>
    </div>
  )
}

export default Home