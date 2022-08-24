import { createContext, useState } from "react";
const CartContext = createContext();
export const CartProvider = ({ children }) => {
  const [item, setItem] = useState([]);
  const [selectValue, setSelectValue] = useState();
  const InputValue = (value) => {
    setItem(value);
  };
  const SelectedValue = (value) => {
    setSelectValue(value);
  };
  return (
    <CartContext.Provider
      value={{ InputValue, item, SelectedValue, selectValue }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartContext;
