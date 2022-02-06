import React, { useEffect } from "react";
import OrderItem from "../../../components/order-item/order-item";
import {
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_START,
} from "../../../services/actions/wsAction";
import { useDispatch, useSelector } from "../../../services/hooks";
import style from "./orders.module.css";

const Orders = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: WS_CONNECTION_START });
    return () => {
      dispatch({ type: WS_CONNECTION_CLOSED });
    };
  }, [dispatch]);
  const orders = useSelector((store) => store.ws.messages);

  return (
    <div className={style.order_container}>
      <div className={style.container}>
        {orders.map((item) => (
          <OrderItem key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Orders;
