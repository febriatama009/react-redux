import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./iceCreamSlice";

const IceCreamView = () => {
  const [value, setValue] = useState(1);
  const numOfIceCream = useSelector((state) => state.icecream.numOfIceCream);
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <h2>Number of Ice Creams - {numOfIceCream}</h2>
        <button onClick={() => dispatch(ordered())}>
          Order Ice Cream
        </button>{" "}
        <br />
        <br />
        <span>
          <input
            type="number"
            value={value}
            onChange={(e) => setValue(parseInt(e.target.value))}
          />{" "}
          <button onClick={() => dispatch(restocked(value))}>
            Restock Ice Cream
          </button>
        </span>
      </div>
    </div>
  );
};

export default IceCreamView;
