import React, { useEffect, useState } from 'react'
import "./admin.scss"
function Admin() {
    const [products, setProducts] = useState([])
  const [inp, setInp] = useState("")
    useEffect(() => {
        getAllProducts()
    }, [])
     
    async function getAllProducts(){
        const res=await fetch("http://localhost:3000/products/")
        const data=await res.json()
        setProducts(data)
    }
    async function deleteProducts(id){
        const res=await fetch("http://localhost:3000/products/"+id,{method:"delete"})
        const data=await res.json()
      await getAllProducts()
    }

    function asc(value){
        setProducts(products.toSorted((a,b) => (a[value] > b[value]) ? 1 : ((b[value] > a[value]) ? -1 : 0)))
    }

    
    function dsc(value){
        setProducts(products.toSorted((a,b) => (a[value] < b[value]) ? 1 : ((b[value] < a[value]) ? -1 : 0)))
    }
  return (
    <div>
        <button onClick={()=>asc("price")}>asc</button>
        <button onClick={()=>dsc("price")}>dsc</button>
        <input type="text" 
        placeholder='search..'
        value={inp}
        onChange={(e)=>{setInp(e.target.value)}}

        />
        <table>
            <thead>
  <tr>
    <th>Image</th>
    <th>Name</th>
    <th>Price</th>
    <th>Options</th>
  </tr>
  </thead>
  <tbody>
{products
.filter((x)=>x.name.toLowerCase().includes(inp.toLowerCase()))
.map((x)=>(
      <tr key={x._id}>
      <td ><img style={{width:"100px"}} src={x.image} alt="" /></td>
      <td>{x.name}</td>
      <td>{x.price}</td>
      <td><button onClick={()=>deleteProducts(x._id)}>Delete</button></td>
    </tr>
))}
  </tbody>
 </table>
    </div>
  )
}

export default Admin