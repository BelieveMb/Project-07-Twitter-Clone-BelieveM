import React from 'react'
function Header(){
    // const imageStar = require('../../images/');
    const imageStar = require('../../images/icon_star.svg');
    return (
        <div className="header">
            <h1>Header</h1>
            <img src="{imageStar}" alt="l'icon star" />
        </div>
    )
}

export default Header