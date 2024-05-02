import { useState } from "react";

const Dropdown = (props) => {

    const [view, setview] = useState("none")

    function handleClick(){
        // var menu = document.getElementById("menu")
        // menu.style.display == "none" ? menu.style.display ="block" : menu.style.display = "none";
        view=="menu"? setview("none"): setview("menu");
    }
    return ( 
        <>
            
            <button class="btn btn-primary" type="button" onClick = {handleClick}>
                Click Me
            <span class="caret"></span></button>

            {view == "menu" && 
            <ul id="menu">
                <li onClick={()=>{setview("b1")}}>option 1</li>
                <li onClick={()=>{setview("b2")}}>option 2</li>
                <li onClick={()=>{setview("b3")}}>option 3</li>
                <li onClick={()=>{setview("b4")}}>option 4</li>
            </ul>
            }
            {
                view=="b1" &&
                <h1>Viewing Option 1 Page</h1>
            }
            {
                view=="b2" &&
                <h1>Viewing Option 2 Page</h1>
            }
            {
                view=="b3" &&
                <h1>Viewing Option 3 Page</h1>
            }
            {
                view=="b4" &&
                <h1>Viewing Option 4 Page</h1>
            }
        
        </>
     );
}
 
export default Dropdown;