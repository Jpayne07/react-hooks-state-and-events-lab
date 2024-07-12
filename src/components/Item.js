import React, {useState} from "react";

function Item({ name, category }) {
  const [state, stateSetter] = useState(false)
  let className = state? 'in-cart': ""
  let buttonText = state? 'Remove from Cart': "Add to Cart"
  
  function eHandler1(){
    stateSetter((state)=>!state)
  }

  return (
    <li className={className}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick = {eHandler1}>{buttonText}</button>
    </li>
  );
}

export default Item;
