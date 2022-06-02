import { useEffect, useState } from "react";




export const Home=(()=>{
    const [num,setNum]=useState(0)
    let data=[
        "https://morecustomersapp.com/wp-content/uploads/2020/08/banner-and-eCommerce.jpg",
        "https://img.freepik.com/free-psd/horizontal-banner-template-online-fashion-sale_23-2148585405.jpg?w=2000",
        "https://img.freepik.com/free-psd/fashion-store-template-banner_23-2148707242.jpg?w=2000"
    ]
    useEffect(()=>{
     const id=setInterval(()=>{
        if(num==3){
            num=0;
        }
            setNum(num+1)
      
     },2000)
    },[])

    return <div>
        <h1>HOME</h1>
        <div style={{border:"1px solid black",height:"500px",width:"99%",margin:"auto"}} >
          <img src={data[num]} height={"100%"}  width={"100%"}  alt="" />
        </div>

    </div>
})