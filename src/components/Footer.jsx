import { Link } from "react-router-dom"
import "./styles/footer.css"



export const Footer=(()=>{
    return <div>
        <div id="navbar" >
            <img id="icon" src="https://img.icons8.com/ios-glyphs/344/fa314a/facebook-new.png" alt="" /><img id="icon" src="https://img.icons8.com/ios-glyphs/344/fa314a/instagram-new.png" alt="" /><img id="icon" src="https://img.icons8.com/ios-glyphs/344/fa314a/twitter-squared.png" alt="" /><img id="icon" src="https://img.icons8.com/ios-glyphs/344/fa314a/youtube-play.png" alt="" />
            <div>  <Link to={"/FAQ"} >FAQ</Link></div>
            <div>    <Link to={"/Contact"} >CONTACT US</Link></div>
            <div>   <Link to={"/About"} >ABOUT US</Link>
</div>
          
        
         
        </div>
    </div>
})