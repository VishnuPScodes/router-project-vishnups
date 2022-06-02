
import { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom"
import { KidsContext } from "../context/KidsContextProvider";
// import { MensContext } from "../context/MensContextProvider";

import "../styles/single.css"

export const Men=(()=>{
  const navigate=useNavigate();
  const[change,setChange]=useState(1)
//  const [menImg]=useContext(MensContext) 
//  const [menName]=useContext(MensContext)
//  const {changeName}=useContext(MensContext)
//  console.log("name is ",changeName)
//  console.log("image is",menImg)
  const nav=(()=>{
    
  //  navigate("/ProductDetails/");
    
   
  })
  // console.log("name 2",menName)

    return <div>
        <h1>men</h1>
        <div id="main" >
                  
                  
                  <div onClick={nav} >
                    <img src={'https://imgs.search.brave.com/upm-sFbID05rfPalO5SDgORD-XayRQpfBAv3dVJzCRw/rs:fit:352:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5f/LWtXNkJlWnRHTkdy/dFV5OEMxLTV3SGFK/LSZwaWQ9QXBp'} width={"100%"} height={"60%"}  alt="" />
                    <span>Daper dudes full sleev</span> <br />
                    <span>3443</span>
                  </div>
                  
                  <div>
                  <img src={'https://imgs.search.brave.com/upm-sFbID05rfPalO5SDgORD-XayRQpfBAv3dVJzCRw/rs:fit:352:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5f/LWtXNkJlWnRHTkdy/dFV5OEMxLTV3SGFK/LSZwaWQ9QXBp'} width={"100%"} height={"60%"}  alt="" />
                    <span>Daper dudes full sleev</span> <br />
                    <span>344</span>
                  </div>
                  <div>
                  <img src={'https://imgs.search.brave.com/upm-sFbID05rfPalO5SDgORD-XayRQpfBAv3dVJzCRw/rs:fit:352:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5f/LWtXNkJlWnRHTkdy/dFV5OEMxLTV3SGFK/LSZwaWQ9QXBp'} width={"100%"} height={"60%"}  alt="" />
                    <span>Daper dudes full sleev</span> <br />
                    <span>344</span>
                  </div>
                  <div>
                  <img src={'https://imgs.search.brave.com/upm-sFbID05rfPalO5SDgORD-XayRQpfBAv3dVJzCRw/rs:fit:352:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5f/LWtXNkJlWnRHTkdy/dFV5OEMxLTV3SGFK/LSZwaWQ9QXBp'} width={"100%"} height={"60%"}  alt="" />
                    <span>Daper dudes full sleev</span> <br />
                    <span>344</span>
                  </div>
                  <div>
                  <img src={'https://imgs.search.brave.com/upm-sFbID05rfPalO5SDgORD-XayRQpfBAv3dVJzCRw/rs:fit:352:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5f/LWtXNkJlWnRHTkdy/dFV5OEMxLTV3SGFK/LSZwaWQ9QXBp'} width={"100%"} height={"60%"}  alt="" />
                    <span>Daper dudes full sleev</span> <br />
                    <span>344</span>
                  </div>

                  <div>
                  <img src={'https://imgs.search.brave.com/upm-sFbID05rfPalO5SDgORD-XayRQpfBAv3dVJzCRw/rs:fit:352:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5f/LWtXNkJlWnRHTkdy/dFV5OEMxLTV3SGFK/LSZwaWQ9QXBp'} width={"100%"} height={"60%"}  alt="" />
                    <span>Daper dudes full sleev</span> <br />
                    <span>344</span>
                  </div>
              </div>
           

    </div>
})