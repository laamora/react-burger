import React, { useEffect } from "react";
import OrderItem from "../../components/order-item/order-item";
import {
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_START_ALL,
} from "../../services/actions/wsAction";
import { useDispatch, useSelector } from "../../services/hooks";
import { Message } from "../../utils/interface";
import style from "./feed.module.css";

function Feed() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: WS_CONNECTION_START_ALL });
    return () => {
      dispatch({ type: WS_CONNECTION_CLOSED });
    };
  }, [dispatch]);
  const total = useSelector((store) => store.ws.total);
  const totalToday = useSelector((store) => store.ws.totalToday);
  const orders = useSelector((store) => store.ws.messages);
  const doneOrders: (Message | undefined)[] = [];
  const pendingOrders: (Message | undefined)[] = [];

  orders.forEach((elem) => {
    if (elem.status === "done") {
      doneOrders.push(elem);
    }
    if (elem.status === "pending") {
      pendingOrders.push(elem);
    }
  });

  if (doneOrders.length > 10) {
    doneOrders.splice(10);
  }
  if (pendingOrders.length > 10) {
    doneOrders.splice(10);
  }

  return (
    <div className={style.Container}>
      <div className={style.Container2}>
        <div className={style.main_container2}>
          <p className="mt-8 mb-4 text text_type_main-large">Лента заказов</p>
          <div className={style.main_container}>
            <div className={style.order_container}>
              {orders.map((item) => (
                <OrderItem key={item._id} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={style.Container3}>
        <div className={style.main_container3}>
          <div className={style.work_info}>
            <div className={style.work_info2}>
              <p
                className={`text text_type_main-medium ${style.work_info_title}`}
              >
                Готовы:
              </p>
              {doneOrders.map((el, i) => {
                return (
                  <p
                    key={i}
                    className={`${style.done} text text_type_digits-default mb-2`}
                  >
                    {el!.number}
                  </p>
                );
              })}
            </div>
            <div className={style.work_info2}>
              <p
                className={`text text_type_main-medium ${style.work_info_title}`}
              >
                В работе:
                {pendingOrders.map((el, i) => {
                  return (
                    <p key={i} className={`text text_type_digits-default mb-2`}>
                      {el!.number}
                    </p>
                  );
                })}
              </p>
            </div>
          </div>
          <div className={style.total_container}>
            <p className="text text_type_main-medium">
              Выполнено за все время:
            </p>
            <div className={`${style.total} text text_type_digits-large`}>
              {total}
            </div>
          </div>
          <div className={style.total_container}>
            <p className="text text_type_main-medium">Выполнено за сегодня:</p>
            <div className={`${style.total} text text_type_digits-large`}>
              {totalToday}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feed;
