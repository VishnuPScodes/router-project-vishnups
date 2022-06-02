import { useContext } from "react"
import { Kids } from "./CLOTHES/Kids";
import { KidsContext } from "./context/KidsContextProvider"






export const Cart=(()=>{
    const {priceCart}=useContext(KidsContext);
    const {nameCart}=useContext(KidsContext);
    const {cartImg}=useContext(KidsContext);
    const {qty}=useContext(KidsContext);

    return <div>
        <div style={{border:"1px solid black",height:"600px",width:"80%",margin:"auto",}}>

            <div style={{border:"1px solid red",height:"50px",width:"100%",textAlign:"left",marginTop:"40px",display:"flex"}} >
             <img height={"100%"} width={"50px"} src={cartImg} alt="" />
             <span style={{marginLeft:"30px"}} >{nameCart}</span>
            </div>

            <div style={{border:"1px solid red",height:"50px",width:"100%",textAlign:"left",marginTop:"40px"}} >
             <span>COST PER ITEM:{priceCart}rs</span>
            </div>


            <div style={{border:"1px solid red",height:"50px",width:"100%",textAlign:"left",marginTop:"40px"}} >
             <span>TOTAL QUANTITY:{qty}</span>
            </div>

            

        </div>
        <div>cart</div>
    </div>
})