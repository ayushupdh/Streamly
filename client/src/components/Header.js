import React from 'react'
import {Link} from 'react-router-dom'
import GoogleAuth from './GoogleAuth'
const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/" className="item"> Streamly</Link>
            <div className="right menu"></div>
            <Link to="/streams/show" className="item">All Streams</Link>
            <GoogleAuth/> 

        </div>
    )
}

export default Header
