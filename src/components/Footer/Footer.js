import React from 'react';
import "./Footer.scss";

const Footer = () => {
    return ( 
        <div className="bg-dark text-center">
            <a href="https://www.linkedin.com/in/chakshu-sharad-44aa19226/" target='_blank' className="fa fa-linkedin"> <img src="https://img.freepik.com/premium-vector/square-linkedin-logo-isolated-white-background_469489-892.jpg" widht='40' height={40}/></a>
            <a href="https://github.com/chakshu71/PathFinding-Algorithm-Path-visualizer.git" target='_blank' className="fa fa-github"><img src="data:image/png;base64,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" width='40'/></a>
            
        </div>
     );
}
 
export default Footer;
