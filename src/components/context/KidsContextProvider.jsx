import React, { createContext, useContext, useState } from "react";




export const KidsContext=createContext("");



export const KidsContextProvider=(({children})=>{
    console.log(children)
    
    const [img,setImg]=useState("1");
    const [name,setName]=useState("kids");
    const [price,setPrice]=useState("none");
    const[priceCart,setPriceCart]=useState("0");
    const[nameCart,setNameCart]=useState("cart");
    const[cartImg,setCartImg]=useState("");
    const[qty,setQty]=useState(0);
   const changeCartName=(namec)=>{
       setNameCart(namec)
   }
   const changeCartPrice=(pricec)=>{
       setPriceCart(pricec)
   }
   const changeCartqty=(qtyc)=>{
       setQty(qtyc);
   }
    const changePrice=(cost)=>{
        setPrice(cost)
    }
    const changeCartImg=(imgc)=>{
        setCartImg(imgc)
    }
    const changeName=(()=>{
        setName("Daper dudes full sleeve")
    })
  const changeUrl=(url)=>{
       setImg(url)
   }
    const value={name,img,changeName,changeUrl,price,changePrice,priceCart,nameCart,qty,changeCartImg,changeCartName,changeCartPrice,changeCartqty}
    return ( <KidsContext.Provider value={value}  >
        {children}
    </KidsContext.Provider>
    )
    
})