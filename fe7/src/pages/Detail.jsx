import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Detail() {
    const {id}=useParams()
    const [detail, setDetail] = useState([])
useEffect(() => {
getProducts()
}, [])

    async function getProducts(){
        const res=await fetch("http://localhost:3000/products/"+id)
        const data=await res.json()
        setDetail(data)
    }
  return (
    <div> 
        <div style={{width:"300px",display:"flex",flexDirection:"column",border:"1px solid black"}}>
    <img src={detail.image} alt="" />
    <h1>{detail.name}</h1>
    <h3>{detail.price}</h3>
        </div>
    </div>
  )
}

export default Detail