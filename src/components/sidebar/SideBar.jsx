import React from 'react'
import imageMedia from "../../images/Media.png";

function SideBar() {
  return (
    <div className='sidebar'> 
        <div className="iconText">
            <img src={imageMedia} alt="icon media" />
            <h3>Media</h3>
        </div>

        <div className="iconText">
            <img src={imageMedia} alt="icon media" />
            <h3>Media</h3>
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