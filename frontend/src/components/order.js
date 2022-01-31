import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Order = () => {
  const [orderData, setOrderData] = useState([]);
  const { isAuthenticated } = useAuth0();
  let navigate = useNavigate();
  useEffect(() => {
    const orders = localStorage.getItem("orderData");
    if (orders) {
      setOrderData(JSON.parse(orders));
    }
  }, []);
  const total = () => {
    let res = 0;
    for (const order of orderData) {
      res += order.quantity * order.amount;
    }
    return res;
  };

  useEffect(() => {
    console.log("Order data", orderData);
    localStorage.setItem("orderData", JSON.stringify(orderData));
  }, [orderData]);

  const handleQty = (id, qty) => {
    let orders = orderData.map((order) => {
      if (order?.id === id) {
        order.quantity = qty;
      }
      return order;
    });
    console.log("Updating orders", orders);
    setOrderData(orders);
  };

  const deleteHandler = (id) => {
    let orders = orderData.filter((order) => order?.id !== id);
    setOrderData(orders);
  };

  return (
    <div className="h-10 bg-black w-full">
      {
        <div>
          <a href="#" onClick={() => navigate(-1)} />
          <button className="btn">Back</button>
          {orderData.map((order) => {
            return (
              <div key={`order-${order.id}`}>
                <span>{order?.name}</span>
                <input
                  type="number"
                  min={1}
                  max={5}
                  value={order?.quantity}
                  onChange={(e) => handleQty(order?.id, Number(e.target.value))}
                />
                <span>
                  £
                  {order?.amount.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </span>
                <button
                  onClick={() => deleteHandler(order?.id)}
                  className="btn"
                >
                  delete
                </button>
              </div>
            );
          })}
        </div>
      }
      <span>
        Total: £
        {total().toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </span>
      {isAuthenticated ? (
        <button
          className="btn"
          onClick={() => {
            localStorage.setItem("orderData", JSON.stringify([]));
            navigate("/confirm/order");
          }}
        >
          Submit order
        </button>
      ) : (
        <button className="btn-disabled">You must login to submit</button>
      )}
    </div>
  );
};

// {orderList.map((item) => {
//     return <div>{item.orderItem}</div>;
//   })}

export default Order;
