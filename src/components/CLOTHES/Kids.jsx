import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { Link, Navigate } from "react-router-dom"
import { KidsContext } from "../context/KidsContextProvider.jsx"
import { Singleitem } from "../Singleitem"
import "../styles/single.css"



export const Kids=(()=>{
    const [data,setData]=useState([])
    useEffect(()=>{
       axios.get("http://localhost:8080/kids").then((res)=>{
           setData(res.data);
       })
    },[])
    console.log("data kids",data)
  
    const {img}=useContext(KidsContext)
    const {changeName}=useContext(KidsContext);
    const {changeUrl}=useContext(KidsContext);
    const {changePrice}=useContext(KidsContext);
    const {changeCartImg}=useContext(KidsContext);
    const {changeCartQty}=useContext(KidsContext);
    const {changeCartName}=useContext(KidsContext);
    const {changeCartPrice}=useContext(KidsContext);
    console.log("value is name",changeName);
    const handle=(()=>{
      const url='https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/26735.webp';
      const cost=3441;
      console.log("clicked");
      let name="Daper dudes full sleev"
      changeName();
      changeUrl(url);
      changePrice(cost);
      changeCartImg(url);
      changeCartName(name);
      changeCartQty(1);
      changeCartPrice(cost);
      
    })
    const {qty}=useContext(KidsContext);
    console.log("quanity",qty)
   return <div>
       <h2>KIDS</h2>


         {/* {data.map((res)=>{
           return <div style={{display:"flex",flexWrap:"wrap"}} >
             <Singleitem  name={res.name} price={res.cost} img={res.img} key={res.id}/>
           </div>
         })} */}
          
              <div id="main" >
                  
                <Link onClick={handle}  to={"/ProductDetails/id"} >
                <div  >
                    <img src={'https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/26735.webp'} width={"100%"} height={"60%"}  alt="" />
                    <span>Daper dudes full sleev</span> <br />
                    <span>3441</span>
                  </div>
                </Link>
                 
                  
                <Link onClick={handle} to={"/ProductDetails/id"} >
                <div  >
                    <img src={'https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/26735.webp'} width={"100%"} height={"60%"}  alt="" />
                    <span>Daper dudes full sleev</span> <br />
                    <span>3441</span>
                  </div>
                </Link>
                <Link onClick={handle} to={"/ProductDetails/id"} >
                <div  >
                    <img src={'https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/26735.webp'} width={"100%"} height={"60%"}  alt="" />
                    <span>Daper dudes full sleev</span> <br />
                    <span>3441</span>
                  </div>
                </Link>
                <Link onClick={handle} to={"/ProductDetails/id"} >
                <div  >
                    <img src={'https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/26735.webp'} width={"100%"} height={"60%"}  alt="" />
                    <span>Daper dudes full sleev</span> <br />
                    <span>3441</span>
                  </div>
                </Link>
                <Link onClick={handle} to={"/ProductDetails/id"} >
                <div  >
                    <img src={'https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/26735.webp'} width={"100%"} height={"60%"}  alt="" />
                    <span>Daper dudes full sleev</span> <br />
                    <span>3441</span>
                  </div>
                </Link>
              </div>
           
     
   </div>
})  