import React, {useState} from 'react'
import './NavBar.css';
import DTI from '../images/DTIW.png';
import { NavLink } from 'react-router-dom';


function NavBar() {
    var closed = "≡";
    var open = "×";
    const [menu, setMenu] = useState(closed);

    return (
        <div>
            <nav className="navbar">
                <img src={DTI} alt="DTI Logo" className="Logo" id="DTILogo"></img>
                <div id = "title"></div>
                <div id="menuToggler" onClick={() => {
                        if (menu === closed) {
                            setMenu(open);
                            document.getElementById("links").classList.add("show");

                        } else {
                            setMenu(closed);
                            document.getElementById("links").classList.remove("show");
                        }
                    }
                }> {menu}
                </div>  
                <div id="links" >
                    <ul>
                        <li><a href="AccountSettings">Account Settings</a></li>
                        <li><a href="Login">Login</a></li>
                        <li><a href="Contact">Contact</a></li>
                        <li><a id ="signupbutton" href="SignUp">SignUp</a></li>
                    </ul>
                </div>
                   
                           
            </nav>
            
        </div>
    )
}

export default NavBar;
