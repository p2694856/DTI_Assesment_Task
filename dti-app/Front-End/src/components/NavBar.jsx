import React, {useState} from 'react'
import './Components.css';
import DTI from '../images/DTIW.png';


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
                        <li><a href="/AccountSettings">Account Settings</a></li>
                        <li><a href="/login">Login</a></li>
                        <li><a href="/">Home</a></li>
                        <li><a href="/register">Register</a></li>
                    </ul>
                </div>
                   
                           
            </nav>
            
        </div>
    )
}

export default NavBar;
