import React from 'react'
import {Link} from "react-router-dom"
export default function Sidebar() {
    return (
        <div className="sidebar">
            <li className='brand'>cookMe</li>
            <Link to="/" className='sidebar_menu'>
                <i className="fa-solid fa-burger"></i>
                <h6>For you</h6>
            </Link>
            <Link to="/explore" className='sidebar_menu'>
                <i className="fa-brands fa-bandcamp"></i>
                <h6>Explore</h6>
            </Link>
            <Link to="/favourites" className='sidebar_menu'>
                <i className="fa-solid fa-heart"></i>
                <h6>Favourites</h6>
            </Link>
        </div>
    )
}
