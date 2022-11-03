import React from "react";
import { BsYoutube, BsInstagram, BsSkype, BsFacebook } from 'react-icons/bs';
import { FaCcMastercard, FaCcVisa  } from 'react-icons/fa';
function Footer () {
    return(
<div className="footer">
    <div className="contacts">
    <h4>Telephone:</h4>
    <p>+34 854-874-125</p>
    <p>+34 659-826-354</p>
    <p>+34 856-932-532</p>
    </div>
        <div className="block_icon">
        <BsYoutube className="icon_Bs"/>
        <BsInstagram className="icon_Bs"/>
        <BsSkype className="icon_Bs"/>
        <BsFacebook className="icon_Bs"/>
        </div>
    <div className="pay_icon">
    <FaCcMastercard className="icon_Bs"/>
    <FaCcVisa className="icon_Bs"/>
    </div>
</div>
    )
}
export default Footer;