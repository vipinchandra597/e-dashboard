import React from "react"
import {useState} from "react"
const AddProduct = () => {
    const[name,setName]=useState("")
    const[price,setPrice]=useState("")
    const[category,setCategory]=useState("")
    const[company,setCompany]=useState("")
    const [error,setError]=useState(false)

    const addProduct= async()=>{
      if(!name || !price || !category || !company)
      {
        setError(true);
        return false;
      }
        // console.log(name,price,category,company);
        const userId=JSON.parse(localStorage.getItem('user'))
   let result=await fetch("http://localhost:5000/add-product",{
    method:"post",
    body:JSON.stringify({name,price,category,company,userId}),
    headers:{
      "Content-Type":"application/json"
    }
   }) 
   
   result = await result.json();
   console.log(result);
  }

    return (
    <div className="product">
      <h1>Add Product Here</h1>
      <input type="text" placeholder="Enter product name"     value={name} className="inputBox"  onChange={(event)=>{setName(event.target.value)}}/>
{ error && !name &&   <span>Enter valid name</span>
}      <input type="text" placeholder="Enter product price"    value={price} className="inputBox"  onChange={(event)=>{setPrice(event.target.value)}}/>
{ error && !price &&   <span>Enter valid price</span>}

      <input type="text" placeholder="Enter product category" value={category} className="inputBox"  onChange={(event)=>{setCategory(event.target.value)}}/>
      { error && !category &&   <span>Enter valid category</span>}

      <input type="text" placeholder="Enter product company"  value={company} className="inputBox"  onChange={(event)=>{setCompany(event.target.value)}}/>
      { error && !company &&   <span>Enter valid company name</span>}

      <button className="button" onClick={addProduct}>Add Product</button>

    </div>
  )
}

export default AddProduct
