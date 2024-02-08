import React from "react";
import LinkedIn from '@mui/icons-material/LinkedIn';
import GitHub from '@mui/icons-material/GitHub';
import Email from '@mui/icons-material/Email';
import "../styles/Footer.css";

function Footer() {
    return (
        <div className="footer justify-content-center align-items-center" >
            <p> &copy; Dylan Tran | 2024</p>
            <div className="socialMedia"> 
            <a href="https://www.linkedin.com/in/dylanytran/" target="_blank" rel="noopener noreferrer">
                    <LinkedIn className ="socials"/>
                </a>
                <a href="https://github.com/dylanytran" target="_blank" rel="noopener noreferrer">
                    <GitHub className ="socials"/>
                </a>
            </div>
        </div>
    );
}

export default Footer;