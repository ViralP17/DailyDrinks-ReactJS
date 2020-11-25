import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";

const AddOrder = () => {
  let history = useHistory();
  const [order, setOrder] = useState({
    name: "",
    price: "",
    notes: ""
  });
  const [error, setError] = useState({
    value: ""
  });

  const { name, price, notes } = order;
  const onInputChange = e => {
    const re = /^[0-9\b]+$/;
    if(e.target.name === "price" && (e.target.value === '' || re.test(e.target.value)))
    {
      setOrder({ ...order, [e.target.name]: e.target.value  });
    }
    else if (e.target.name === "name" || e.target.name === "notes" )
    {
      setOrder({ ...order, [e.target.name]: e.target.value });

    }
    if(order.name !== "" && order.price !=="")
    {
      setError({ value : "" });
    }
    
  };

  const onSubmit = async e => {
    e.preventDefault();
    if(order.name !== "" && order.price !== "") 
    {
      await axios.post("http://localhost:3003/orders", order);
      history.push("/");
    }
    else
    {
      setError({ value : "Please Enter Drink Name and Price" });
    }
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add an Order</h2>
        <p>{error.value}</p>
        <form onSubmit={e => onSubmit(e)}>
        <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter drink Name"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Price"
              name="price"
              value={price}
              pattern="[0-9]*"
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <textarea
              type="textarea"
              className="form-control form-control-lg"
              placeholder="Enter Notes"
              name="notes"
              value={notes}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-primary btn-block">Add Order</button>
        </form>
      </div>
    </div>
  );
};

export default AddOrder;
