import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Products.css";
const Products = () => {
  const [products, setProducts] = useState([]);
  const [isDelete, setIsDelete] = useState(null);
  useEffect(() => {
    fetch("https://fast-earth-57411.herokuapp.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, [isDelete]);

  const handleDeleteProduct = (id) => {
    console.log(id);

    fetch(`https://fast-earth-57411.herokuapp.com/deleteProduct/${id}`, {
      method: "DELETE",
      headers: { "Content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.deletedCount) {
          setIsDelete(true);
        } else {
          setIsDelete(false);
        }
      });
  };

  const handleAddToCart = (index) => {
    const data = products[index];
    data.email = "ami@gmail.com";
    fetch(`https://fast-earth-57411.herokuapp.com/addOrders`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.insertedId) {
          alert("add hoise broooo ");
        } else {
          alert("add korte pari nai");
        }
      });
  };

  return (
    <div>
      <h1>all Users {products.length}</h1>
      <div className="all-products">
        <div className="row container text-center">
          {products.map((pd, index) => (
            <div className="col-md-4">
              <div className="product border p-2 m-2">
                <h5 className="pd-text">{pd?.name}</h5>
                <h6>{pd?.description}</h6>
                <button
                  onClick={() => handleDeleteProduct(pd._id)}
                  className="btn btn-danger m-2"
                >
                  delete
                </button>
                <Link to={`/update/${pd._id}`}>
                  <button className="btn btn-success m-2">update</button>
                </Link>
                <button
                  onClick={() => handleAddToCart(index)}
                  className="btn btn-warning m-2"
                >
                  Read More...
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
