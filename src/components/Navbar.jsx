import { Link } from "react-router-dom"
import "./styles/Navbar.css"


export const Navbar=(()=>{
    return <div>
        <div id="navbar" >
            <div> <Link to={"/"} >HOME</Link></div>
            <div> <Link to={"/Clothes"} >CLOTHES</Link></div>
            <div>  <Link to={"/Electronics"} >ELECTRONICS</Link></div>
            <div> <Link to={"/Paintings"} >PAINTINGS</Link></div>
            <div id="img-div" >
                <img height={"100%"} width={"100%"} src="https://img.icons8.com/ios/344/fa314a/shopping-cart-promotion.png" alt="" />
            </div>
       
        
        </div>
    </div>
})