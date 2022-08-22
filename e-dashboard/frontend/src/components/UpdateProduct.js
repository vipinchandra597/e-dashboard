import React, { useEffect } from "react";
import { useState } from "react";
import { useParams,useNavigate} from "react-router-dom";

const UpdateProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  // const [error,setError]=useState(false)

  const params = useParams();
  const navigate=useNavigate();

  useEffect(() => {
    getProductDetails();
  }, []);

  const getProductDetails = async () => {
    // console.log(params);
    let result = await fetch(`http://localhost:5000/product/${params.id}`);
    result = await result.json();
    console.log(result);
    setName(result.name);
    setPrice(result.price);
    setCategory(result.category);
    setCompany(result.company);
  };

  const updateProduct = async () => {
    let result = await fetch(`http://localhost:5000/product/${params.id}`, {
      method: "Put",
      body: JSON.stringify({ name, price, category, company }),
      headers: {
        "Content-Type": "Application/json",
      },
    });
    result= await result.json();
    // console.log(result);
if(result){
  navigate('/')
}
  };

  return (
    <div className="product">
      <h1>Update Product Here</h1>
      <input
        type="text"
        placeholder="Enter product name"
        value={name}
        className="inputBox"
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      {/* { error && !name &&   <span>Enter valid name</span>} */}
      <input
        type="text"
        placeholder="Enter product price"
        value={price}
        className="inputBox"
        onChange={(event) => {
          setPrice(event.target.value);
        }}
      />
      {/* { error && !price &&   <span>Enter valid price</span>} */}

      <input
        type="text"
        placeholder="Enter product category"
        value={category}
        className="inputBox"
        onChange={(event) => {
          setCategory(event.target.value);
        }}
      />
      {/* { error && !category &&   <span>Enter valid category</span>} */}

      <input
        type="text"
        placeholder="Enter product company"
        value={company}
        className="inputBox"
        onChange={(event) => {
          setCompany(event.target.value);
        }}
      />
      {/* { error && !company &&   <span>Enter valid company name</span>} */}

      <button className="button" onClick={updateProduct}>
        Update Product
      </button>
    </div>
  );
};

export default UpdateProduct;
