import React, { useContext } from 'react'
import { ProductContext } from './ProductContextApi/ProductContextApi';
import ItemsCreation from './componets/ItemsCreation';

function ShopApp() {
  const { productName } = useContext(ProductContext);

  return (
    <>
      <h1>Mobile Phones</h1>
    {
      productName.map((e)=>{
        if(e.isAddCart === undefined)
        {
          e.isAddCart = false;
        }
      })
    }
      <div className="itemsList">
        <ItemsCreation />
        
      </div>

    </>
  )
}

export default ShopApp