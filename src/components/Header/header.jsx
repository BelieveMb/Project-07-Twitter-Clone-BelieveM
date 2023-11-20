import React from 'react'
function Header(){
    // const imageStar = require('../../images/');
    const imageStar = require('../../images/icon_star.svg');
    const titlePage = "Home";
    return (
        <div className="header">
            <h1>{titlePage}</h1>
            {/* <img src={imageStar} alt="l'icon star" /> */}
        </div>
    )
}

export default Header