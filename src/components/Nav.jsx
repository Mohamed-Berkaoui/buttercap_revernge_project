import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className='navbar'>
        <h4>logo</h4>
        <div className='right'>
         <Link to={"/"}><p>Home</p></Link>   
         <Link to={"/products"}> <p>Products</p></Link>
         <Link to={"/cart"}> <p>Cart</p></Link>
         <Link to={"/login"}><p>Login</p></Link>
         <Link to={"/logout"}><p>Logout</p></Link>
         <Link to={"/profile"}><p>Profile</p></Link>
        </div>
    </div>
  )
}

export default Nav