import { useState } from "react"
import { Link } from "react-router-dom"
import { Kids } from "./CLOTHES/Kids"
import { Men } from "./CLOTHES/Men"
import { Women } from "./CLOTHES/Women"

import "./styles/clothes.css"

export const Clothes=(()=>{
    const [kids,setKids]=useState(true)
    const [men,setMen]=useState(false)
    const [women,setWomen]=useState(false);
    const handlekids=(()=>{
       setKids(true)
       setMen(false)
       setWomen(false);
    })
    const handlemen=(()=>{
        setMen(true);
        setKids(false)
        setWomen(false)
    })
    const handlewomen=(()=>{
        setWomen(true);
        setKids(false);
        setMen(false)
    })
    return <div>
        <h1>CLOTHES</h1>
        <div id="clothes" style={{display:'flex',color:"black",border:"1px solid black",height:"60px",width:"99%",margin:"auto"}} >
            <div>
                <Link onClick={handlekids} to={"/Clothes"} >KIDS</Link>
            </div>
            <div>
                <Link onClick={handlemen} to={"/Clothes"} >MEN  </Link>
            </div>
            <div>
                <Link onClick={handlewomen} to={"/Clothes"} >WOMEN  </Link>
            </div>

        </div>
        <div style={{border:'1px solid black',height:"800px",width:"99%",margin:"auto"}} >
            {kids &&<Kids/>}
            {men && <Men/>}
            {women && <Women/>}

        </div>
    </div>
})