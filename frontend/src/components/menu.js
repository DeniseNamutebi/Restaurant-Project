import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
// import { set } from '../../../backend/app';
import makeReq from "../config/request";
import Order from "./order";
// import Booking from './booking'

const Menu = () => {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [menu, setMenu] = useState([]);
  const [selectedItem, setSelectedItem] = useState("");

  const [orderList, setOrderList] = useState([]);
  const [orderInput, setOrderInput] = useState(1);
  const [courses, setCourses] = useState([]);

  let navigate = useNavigate();

  useEffect(() => {
    async function fetchApi() {
      const _menu = await makeReq({
        endpoint: "/menu",
        requireAuth: false,
      }).then((res) => res.json());
      setMenu(_menu);
      let courseList = _menu.map((val) => val.Course);
      courseList = [...new Set(courseList)];
      setCourses(courseList);
      console.log(
        "courses",
        _menu.filter((item) => item.Course === `Starter`)
      );
      // console.log(_menu)
    }

    fetchApi();
    const orderData = localStorage.getItem("orderData");
    if (orderData) {
      setOrderList(JSON.parse(orderData));
    }
  }, []);

  useEffect(() => {
    console.log("Updated", selectedItem);
    let order = orderList.filter((item) => item.id === selectedItem);
    //order = order.length > 0 && order[0]
    console.log("Use effect order", order);
    order.length > 0
      ? setOrderInput(Number(order[0].quantity))
      : setOrderInput(1);
    //makeReq({endpoint:'/api/public', getAccessTokenSilently:getAccessTokenSilently}).then(res=>console.log("test req with auth", res))
    //makeReq({endpoint:'/api/private', getAccessTokenSilently:getAccessTokenSilently}).then(res=>console.log("test req with auth", res))
    // makeReq({endpoint:'/api/public', requireAuth:false}).then(res=>console.log("test req without auth", res))
    // makeReq({endpoint:'/api/private', requireAuth:false}).then(res=>console.log("test req without auth", res))
  }, [selectedItem]);

  useEffect(() => {
    console.log(orderList);
    localStorage.setItem("orderData", JSON.stringify(orderList));
  }, [orderList]);

  const handleAddClick = (id) => {
    let orderData = menu.filter((item) => item?._id === selectedItem);
    orderData = Array.isArray(orderData) ? orderData[0] : orderData;
    let orderCheck = orderList.filter((item) => item.id === id);
    //order = Array.isArray(order) ? order[0] : order
    console.log("Order", orderCheck);
    let orderItem;

    let order = [];
    if (orderCheck.length > 0) {
      for (let item of orderList) {
        if (item?.id === id) {
          item = { ...item, ...{ quantity: Number(orderInput) } };
        }
        order.push(item);
      }
    } else {
      orderItem = {
        id: id,
        name: orderData.Name,
        quantity: Number(orderInput),
        amount: Number(orderData.Price),
      };
      order = [...orderList, ...[orderItem]];
    }
    setOrderList(order);
    //setOrderInput(1)
    console.log(orderList);
  };

  const Cart = () => {
    let total = 0;
    let noItems = 0;
    for (const order of orderList) {
      total += order.quantity * order.amount;
      noItems += order.quantity;
    }
    return (
      <div className="fixed bottom-4 right-4 flex flex-col">
        {noItems > 0 ? (
          <div>
            <span> {noItems} Items </span>
            <span> {total} Total </span>
            <button className="btn" onClick={() => navigate("/order")}>
              View order
            </button>
          </div>
        ) : (
          <div>No items</div>
        )}
      </div>
    );
  };

  const SideBar = () => {
    let sideData = menu.filter((item) => item._id === selectedItem);
    sideData = Array.isArray(sideData) ? sideData[0] : sideData;
    console.log("Side data", sideData);
    return (
      <div className="w-full bg-red-100">
        {sideData && (
          <div>
            <div>{sideData?.Name}</div>
            <div>{sideData?.Description}</div>
            <div>£{sideData?.Price}</div>
            <img src={sideData?.Img} />

            <div>
              <input
                type="number"
                min={1}
                max={5}
                value={orderInput}
                onChange={(e) => setOrderInput(e.target.value)}
              />
            </div>
            {Number(sideData?.InStock) !== orderInput ? (
              <button
                type="button"
                value="add"
                onClick={() => handleAddClick(sideData?._id)}
                className="btn"
              >
                ADD
              </button>
            ) : (
              <button type="button" value="add" className="btn-disabled">
                Out of stock
              </button>
            )}
          </div>
        )}

        <div className="bg-white h-10">
          {orderList.map((item) => {
            return <div>{item.orderItem}</div>;
          })}
          <div>
            <Cart />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full container flex flex-col ">
      <div>
        {/* <Booking/> */}

        <div className="flex flex-row text-2xl p- space-x-4  w-full">
          {courses.map((course) => {
            return (
              <div className="ml-8 bg-red text-white py-2 px-4 rounded-md">
                <a href={`#${course}`}>{course}</a>
              </div>
            );
          })}
        </div>
        <div className="flex flex-row">
          <div className=" p-16 flex flex-cols w-full items-center ">
            <div className="w-1/2 flex flex-col">
              {courses.map((course) => {
                return (
                  <div className="mt-5 p-2" key={`${course}`}>
                    <span className="text-lg font-bold">{course}</span>
                    <a name={course} />
                    {menu
                      .filter((item) => item.Course === course)
                      .map((menu) => {
                        return (
                          <div className="" key={`${course}-${menu._id}`}>
                            <a
                              href="#"
                              onClick={() => setSelectedItem(String(menu._id))}
                            >
                              {menu.Starter} - {menu.Name} - {menu.Price}
                              <br />
                            </a>
                          </div>
                        );
                      })}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="w-1/2 bg-green-200">
            <SideBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
