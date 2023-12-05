import React from 'react'
import imageTwitter from "../../images/Twitter.svg";
import imageHome from "../../images/home-fill.svg";

function SideBar() {
  return (
    <div className='sidebar'> 
        <div className="iconText">
            <img src={imageTwitter} alt="logo twitter" />
            <h3></h3>
        </div>

        <div className="iconText">
            <img src={imageHome} alt="icon home" />
            <h3>Home</h3>
        </div>

        <div className="iconText">
            <img src={imageMedia} alt="icon media" />
            <h3>Media</h3>
        </div>

        <div className="iconText">
            <img src={imageMedia} alt="icon media" />
            <h3>Media</h3>
        </div>
    </div>
  )
}

export default SideBar