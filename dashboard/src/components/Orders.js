import React, {useState,useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Orders = () => {
  const [allOrder,setAllOrder]=useState([]);
  useEffect(()=>{
    axios.get("http://localhost:3002/allOrder").then((res)=>{
      console.log(res.data);
      setAllOrder(res.data);
    })
  },[]);
  return (
    <>
    <h3 className="title">Orders ({allOrder.length})</h3>
      <div className="order-table">
         <table className="mb-5 ">
          <tr>
            <th>Name</th>
            <th>Qty.</th>
            <th>Mode</th>
            <th>Price</th>
            
          </tr>

          {allOrder.map((stock, index) => {

            return (
              <tr key={index}>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.mode}</td>
                <td>{stock.price}</td>
              </tr>
            );
          })}
        </table>
       
    </div>
    </>
  );
};

export default Orders;
