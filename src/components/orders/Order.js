import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";


const Order = () => {
  const [order, setOrder] = useState({
    name: "",
    price: "",
    notes: ""
  });

 

  const { id } = useParams();
  useEffect(() => {
    const loadOrder = async () => {
      const res = await axios.get(`http://localhost:3003/orders/${id}`);
      setOrder(res.data);
    };
    
    loadOrder(id);
  }, [id]);

  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        back to Home
      </Link>
      <h1 className="display-4">Order Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">name: {order.name}</li>
        <li className="list-group-item">order name: {order.price}</li>
        <li className="list-group-item">email: {order.notes}</li>
      </ul>
    </div>
  );
};

export default Order;
