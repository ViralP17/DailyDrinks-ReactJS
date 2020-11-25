import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from 'react-router-dom'

const Home = () => {
  const [orders, setOrder] = useState([]);

  let history = useHistory();

  const redirect = (id) => {
    history.push(`/orders/edit/${id}`)
  }

  useEffect(() => {
    loadOrders();
  }, []);

  const loadOrders = async () => {
    const result = await axios.get("http://localhost:3003/orders");
    setOrder(result.data.reverse());
  };

  const deleteOrder = async id => {
    if(window.confirm("Are you Sure want to Delete?")) {
      await axios.delete(`http://localhost:3003/orders/${id}`);
      loadOrders();
    }
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1>Home Page</h1>
        <table className="table border shadow OrderTable">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Drink Name</th>
              <th scope="col">Price</th>
              <th scope="col">Notes</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index + 1}>
                <th scope="row" className="order-id">{index + 1}</th>
                <td className="order-name">{order.name}</td>
                <td className="order-price">{order.price}</td>
                <td className="order-notes" title={order.notes}>{order.notes}</td>
                <td className="order-action">
                <i className="fa fa-pencil-square-o" aria-hidden="true" onClick={() =>redirect(order.id)}></i>
                <i className="fa fa-trash-o" aria-hidden="true" onClick={() => deleteOrder(order.id)} ></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
