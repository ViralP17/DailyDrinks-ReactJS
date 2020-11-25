import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const EditOrder = () => {
  let history = useHistory();
  const { id } = useParams();
  const [order, setOrder] = useState({
    name: "",
    price: "",
    notes: ""
  });
  const [error, setError] = useState({
    value: ""
  });

  const { name, price, notes} = order;
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
  
  useEffect(() => {
    const loadOrder = async () => {
      const res = await axios.get(`http://localhost:3003/orders/${id}`);
      setOrder(res.data);
    };
    
    loadOrder(id);
  }, [id]);

  const onSubmit = async e => {
    e.preventDefault();
    if(order.name !== "" && order.price !== "") 
    {
      await axios.put(`http://localhost:3003/orders/${id}`, order);
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
        <h2 className="text-center mb-4">Edit A order</h2>
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
          <button className="btn btn-warning btn-block">Update Order</button>
        </form>
      </div>
    </div>
  );
};

export default EditOrder;
