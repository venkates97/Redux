import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { ProductContext} from "../ProductContextApi/ProductContextApi";


const api ="https://66071c40be53febb857f2bb5.mockapi.io/phonekadai/products";

console.log("get Api Call");

// export function AxiosAPI() {
//         const {setapiDataRetrun} = useContext(ProductContext)


// useEffect(() => {
//      const getApiData = async () => {
//         const apiData = await axios.get(api, { method: "GET" })
//     };

//     console.log(apidata.data)
//     setapiDataRetrun(apidata.data)
// }, []);


//     return(
//         <>
        
//         </>
//     )
    
// }




export const getApiCall = async()=>{
    const {setapiDataRetrun} = useContext(ProductContext)

useEffect(() => {
    const data = axios.get(
        (api),
        {method: 'GET'},  
      ).then((data)=>setapiDataRetrun(data.data))
  

}, [])

  
}



// export const GetApidata=async()=>{
//     const {setapiDataRetrun} = useContext(ProductContext)

//     const apidata = await axios.get(
//         (api),
//         {method: 'GET'},  
//       )
//       console.log(apidata.data);
//       setapiDataRetrun(apidata.data)
      
      
// }



// console.log(getApiCall());





