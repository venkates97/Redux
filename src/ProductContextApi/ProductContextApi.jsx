import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
  
  const [cartList, setcartList] = useState([]);
  const [subtotal, setsubtotal] = useState([]);
  const [productName, setproductName] = useState([]);
  const [apiDataRetrun, setapiDataRetrun] = useState([]);

  useEffect(() => {
    fetch("https://66071c40be53febb857f2bb5.mockapi.io/phonekadai/products")
      .then((res) => res.json())
      .then((data) => setproductName(data));
  }, []);

  return (
    <ProductContext.Provider
      value={{
        cartList,
        setcartList,
        subtotal,
        setsubtotal,
        productName,
        setproductName,
        apiDataRetrun,
        setapiDataRetrun,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
