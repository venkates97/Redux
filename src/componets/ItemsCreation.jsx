import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../ProductContextApi/ProductContextApi";
import { getApiCall } from "../Apidatas/AxiosAPI";

function ItemsCreation() {
  const [isAddCart, setisAddCart] = useState();
  const { cartList, setcartList, productName, setproductName ,apiDataRetrun} =useContext(ProductContext);
  var dummy;


// check API Calls
// useEffect(() => {
//     GetApidata() 
// }, [])
{/* < AxiosAPI /> */}
getApiCall();

console.log(apiDataRetrun);




  function RemoveFromCart(index) {
    console.log("remove from cart");
    dummy = cartList.filter((e) => e.id != index);
    setcartList(dummy);
    productName.map((e) => {
      if (e.id == index) {
        e.isAddCart = false;
      }
    });
  }

  function AddToCart(index) {
    console.log("Add to cart");
    productName.map((e) => {
      if (e.id == index) {
        e.quantity = 1;
        e.isAddCart = true;
        setcartList([...cartList, e]);
      }
    });
  }

  return (
    <>
      {productName.map((item, index) => {
        return (
          <div key={index}>
            <div className="card" style={{ width: "18rem" }}>
              <img src={item.imgUrl} className="card-img-top" alt="..." />
              <div className="card-body">
                <div className="cardbodyTextarea">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.description}</p>
                </div>
               <div className="buttonAlign">
               <button
                  type="button"
                  className={
                    item.isAddCart ? "btn btn-danger" : "btn btn-success"
                  }
                  onClick={() => {
                    console.log(item.isAddCart);
                    item.isAddCart == true
                      ? RemoveFromCart(item.id)
                      : AddToCart(item.id);
                  }}
                >
                  {item.isAddCart ? "Remove from Cart" : "Add To Cart"}
                </button>
               </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ItemsCreation;
