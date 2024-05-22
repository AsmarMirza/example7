import React, { useState } from 'react'
import { createContext } from 'react'
import  { useLocalStorage } from '../hooks/useLocalStorage'


export const WishlistContext=createContext()
function WishlistProvider({children}) {

    const [wishlist, setWishlist] = useLocalStorage("wishlist",[])
    function addWishlist(item){
        const index = wishlist.findIndex((x)=>x._id===item._id)
        if (index!==-1) {
           
            setWishlist(wishlist.filter((x)=>x._id!==item._id))
        }
        else{
            setWishlist([...wishlist,item])
        }
    }
    function isExist(item){
        console.log(wishlist);
        return wishlist.findIndex((x)=>x._id===item._id)!==-1 
    }
  return (
    <WishlistContext.Provider value={{isExist,wishlist,addWishlist}}>
    {children}
   </WishlistContext.Provider>
  )
}

export default WishlistProvider