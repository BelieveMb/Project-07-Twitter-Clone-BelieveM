import React, { useContext } from 'react';
import imageTwitter from "../../images/Twitter.svg";
import imageHome from "../../images/Home-Fill.svg";
import imageExplore from "../../images/Explore.svg";
import imageNotifications from "../../images/Notifications.svg";
import imageMessages from "../../images/Messages.svg";
import imageBookmarks from "../../images/Bookmarks.svg";
import imageProfile from "../../images/Profile.svg";
import imageMore from "../../images/more.svg";
import imageProfil from "../../images/profile-photo.png";
import NavMenu from './NavMenu';
import {  NavLink } from "react-router-dom";
import UserConnexion from '../context/UserConnexion';
import { UsersList } from '../data/Tweets';


function SideBar() {

    const userDataOnline = useContext(UserConnexion);

    return (

    <div className='sidebar'> 
        <div className='topMenu'>
            

            <div className="iconText">
                <img src={imageTwitter} alt="icon media" />
            </div>

            <NavLink to='/' >
                <NavMenu titleMenu="Home" iconMenu={imageHome}  />
            </NavLink>

            <NavLink to='*' >
                <NavMenu titleMenu="Explore" iconMenu={imageExplore} />
            </NavLink>

            <NavLink to='*' >
                <NavMenu titleMenu="Notifications" iconMenu={imageNotifications} />
            </NavLink>

            <NavLink to='*' >
               <NavMenu titleMenu="Messages" iconMenu={imageMessages} />
            </NavLink>

            <NavLink to='*' >
                <NavMenu titleMenu="Bookmarks" iconMenu={imageBookmarks} />
            </NavLink>

            <NavLink to='/username/2'  >
                <NavMenu titleMenu="Profile" iconMenu={imageProfile} />
            </NavLink>

            <NavLink to='*' >
                <NavMenu titleMenu="More" iconMenu={imageMore} /> 
            </NavLink>

          <button className="button">Tweet</button>



        </div>

        <div className="bottomProfil">
            <img src={userDataOnline.avatar} alt="Image profil" className='avatarBottom' />
        
            <div className="textContent">
                <h3>{userDataOnline.name}  
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#11111"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 14.5V16.5M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C15.9474 10 16.5286 10 17 10.0288M7 10.0288C6.41168 10.0647 5.99429 10.1455 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C18.0057 10.1455 17.5883 10.0647 17 10.0288M7 10.0288V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V10.0288" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                </h3>
                <b>{userDataOnline.hastag}  </b>
            </div>
            <svg version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-51.2 -51.2 614.40 614.40" xml:space="preserve" fill="#fff" stroke="#fff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css"> </style> <g> <circle class="st0" cx="55.091" cy="256" r="55.091"></circle> <circle class="st0" cx="256" cy="256" r="55.091"></circle> <circle class="st0" cx="456.909" cy="256" r="55.091"></circle> </g> </g></svg>
            
        

        </div>
    </div>
        
        
    
 
  )
}

export default SideBar