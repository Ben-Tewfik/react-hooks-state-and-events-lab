import React from "react";

function Item({ name, category }) {
  const [incart, setInCart] = React.useState(true);
  const checkCart = incart ? "" : "in-cart";
  const checkAdd = incart ? "add" : "remove";
  const changeBtn = () => {
    setInCart(!incart);
  };
  return (
    <li className={checkCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={checkAdd} onClick={changeBtn}>
        {incart ? "Add to Cart" : "Remove From Cart"}
      </button>
    </li>
  );
}

export default Item;
