import React, { useContext } from 'react'
import PublishContext from '../../context/PublishContext';

function Header(){
    const titlePage = "Home";

    return (
        <div className="header">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css" />
            <h1>{titlePage} </h1>
            <h3><i class="bi bi-stars"></i></h3>
        </div>
    )
}

export default Header