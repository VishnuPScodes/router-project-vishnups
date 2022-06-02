
import "./styles/single.css"


export const Singleitem=(({name,price,img})=>{
    return (<div  id="box" >
        <div   style={{height:"250px",width:"250px",border:"1px solid black",marginRight:"30px"}} >
         <div style={{border:"1px solid black",height:"180px",width:"100%"}} >
             <img src={img} height={"100%"} width={"100%"} alt="" />
         </div>
         <span id="res" >{name}</span>
         <br />
         <span style={{marginLeft:"20px"}} >{price}</span>
        </div>
    </div>
    )
})