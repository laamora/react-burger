import React, { useState } from "react";
import {
  ConstructorElement,
  DragIcon,
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./burger-constructor.module.css";
import Details from "./details/details";
import PropTypes from "prop-types";

const BurgerConstructor = (props) => {
  const [details, showDetails] = useState(false);
  const { items } = props;
  const topandbutton = items.find((el) => el.type === "bun");
  const sumTotal = items.reduce((sum, { price }) => sum + price, 0);
  const fullPrice = topandbutton.price + sumTotal;
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          height: "560px",
          alignItems: "end",
          marginTop: "100px",
          width: "588px",
        }}
      >
        <div className="pr-4">
          <ConstructorElement
            type="top"
            isLocked={true}
            text={`${topandbutton.name} (верх)`}
            price={topandbutton.price}
            thumbnail={topandbutton.image}
          />
        </div>
        <div className={style.container2}>
          <div className={style.container1}>
            {items
              .filter((el) => el.type !== "bun")
              .map((el) => {
                return (
                  <div className={style.container}>
                    <DragIcon type="primary" />
                    <ConstructorElement
                      text={el.name}
                      price={el.price}
                      thumbnail={el.image}
                    />
                  </div>
                );
              })}
          </div>
        </div>
        <div className="pr-4">
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={`${topandbutton.name} (низ)`}
            price={topandbutton.price}
            thumbnail={topandbutton.image}
          />
        </div>
        <div className={style.button_and_price_container}>
          <div className={style.full_price_container}>
            <p className="text text_type_digits-medium mr-3">{fullPrice}</p>
            <CurrencyIcon type="primary" />
          </div>
          <Button
            type="primary"
            size="medium"
            onClick={() => showDetails(true)}
          >
            Оформить заказ
          </Button>
        </div>
      </div>
      {details && <Details showDetails={showDetails} />}
    </>
  );
};

export default BurgerConstructor;

BurgerConstructor.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      proteins: PropTypes.number.isRequired,
      fat: PropTypes.number.isRequired,
      carbohydrates: PropTypes.number.isRequired,
      calories: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      image_mobile: PropTypes.string.isRequired,
      image_large: PropTypes.string.isRequired,
      __v: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
