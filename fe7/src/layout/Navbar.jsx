import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.scss"
function Navbar() {
  return (
    <div className='navbar'>
      <div>
  <img src="https://preview.colorlib.com/theme/shop/img/logo.png.webp" alt="" />
  </div>
        <ul className='navUl'>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/admin"}>Admin</Link></li>
            <li><Link to={"/add"}>Add</Link></li>
            <li><Link to={"/basket"}>Basket</Link></li>
            <li><Link to={"/wishlist"}>Wishlist</Link></li>
        </ul>
        <div className='navIcon'><i className="fa-solid fa-bars"></i></div>
    </div>
  )
}

export default Navbar