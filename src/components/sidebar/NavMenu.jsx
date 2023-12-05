import React from 'react'

function NavMenu({titleMenu, iconMenu}) {
  return (
    <div className="iconText">
        <img src={iconMenu} alt="logo twitter" />
        <h3>{titleMenu}</h3>

    </div>
  )
}

export default NavMenu