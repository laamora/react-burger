import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import {
  deleteIngredient,
  moveIngredients,
} from "../../../services/actions/burger-constructor";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./constructor-ingredient.module.css";
import { useDrag, useDrop } from "react-dnd";

interface ElType {
  _id: string;
  name: string;
  type: string;
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  price: number;
  image: string;
  image_mobile: string;
  image_large: string;
  __v: number;
  key: any;
}

interface ItemType {
  index: any;
  id: any;
}

interface ConstructorIngredientProps {
  id: string;
  index: number;
  el: ElType;
}

const ConstructorIngredient = ({
  id,
  el,
  index,
}: ConstructorIngredientProps) => {
  const dispatch = useDispatch();

  const ref = useRef<any>(null);
  const [, drop] = useDrop({
    accept: "item",
    hover: (item: ItemType, monitor: any) => {
      if (!ref.current) return;
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) return;
      const hoverBoundingRect = ref.current.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) return;
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) return;
      dispatch(moveIngredients(dragIndex, hoverIndex));
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: "item",
    item: () => {
      return { id, index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const opacity = isDragging ? 0 : 1;

  drag(drop(ref));

  return (
    <div ref={ref} className={style.container} style={{ ...style, opacity }}>
      <DragIcon type="primary" />
      <ConstructorElement
        text={el.name}
        price={el.price}
        thumbnail={el.image}
        handleClose={() => {
          dispatch(deleteIngredient(el.key));
        }}
      />
    </div>
  );
};

export default ConstructorIngredient;
