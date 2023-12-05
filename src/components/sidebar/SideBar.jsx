import React from 'react'
import imageTwitter from "../../images/Twitter.svg";
import imageHome from "../../images/Home-Fill.svg";
import imageExplore from "../../images/Explore.svg";
import imageNotifications from "../../images/Notifications.svg";
import imageMessages from "../../images/Messages.svg";
import imageProfil from "../../images/profile-photo.png";

function SideBar() {
  return (
    <div className='sidebar'> 
        <div className='topMenu'>
            <div className="iconText">
                <img src={imageTwitter} alt="logo twitter" />
            </div>

            <div className="iconText">
                <img src={imageHome} alt="icon home" />
                <h3>Home</h3>
            </div>

            <div className="iconText">
                <img src={imageExplore} alt="icon media" />
                <h3>Explore</h3>
            </div>

            <div className="iconText">
                <img src={imageNotifications} alt="icon media" />
                <h3>Notification</h3>
            </div>

            <div className="iconText">
                <img src={imageMessages} alt="icon media" />
                <h3>Messages</h3>
            </div>
        </div>


        <div className="bottomProfil">
            <img src={imageProfil} alt="Image profil" />
            <div className="textContent">
                <h3>Twitter</h3>
                <h4>@username</h4>
            </div>
           

        </div>
    </div>
  )
}

export default SideBar