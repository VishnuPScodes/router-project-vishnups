import { useContext } from "react"
import { useNavigate } from "react-router-dom";

import { KidsContext } from "./context/KidsContextProvider"



export const ProductDetails=(()=>{
    const {name}=useContext(KidsContext);
    const {img}=useContext(KidsContext);
    const {price}=useContext(KidsContext);
     console.log("updated name is ",name);
    const navigate=useNavigate(); 
     const add=(()=>{
         console.log("working")
       navigate("/Cart")
     })
    return <div>
        <h2>PRODUCT DETAILS</h2>
        <div style={{border:"1px solid red",height:"750px",width:"95%",fontSize:"40px"}} >
            <p>{name}</p>
            <p>{price}</p>
            <img height={"500px"} src={img} alt="" />
            
        </div>
        <button onClick={add}  style={{marginBottom:"40px",height:"60px",width:"200px",fontWeight:"600",backgroundColor:"pink",color:"red",border:"1px solid red"}} >ADD TO CART</button>
    </div>
})