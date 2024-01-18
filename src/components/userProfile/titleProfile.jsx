import React from 'react'
import { NavLink } from 'react-router-dom';



function TitleProfile({AllData}) {
  const userProfil = AllData;

  if(!userProfil){
    return <h2>Désolé, Aucun Profil trouvé  </h2>
  }
  
  return (
    <>
            <div className="titleProfile">
                <NavLink to="/">
                   <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5 12H19M5 12L11 6M5 12L11 18" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                </NavLink>              
                <div className="flex flex-col">
                    <h2 className='flex flex-row items-center gap-1'>
                        {userProfil.name}
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" fill="currentColor" class="bi bi-patch-check-fill" viewBox="0 0 16 16">
                          <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"/>
                        </svg>
                    </h2>
                    <span>{userProfil.numberPost} posts</span>
                </div>
            </div>
    </>
  )
}

export default TitleProfile