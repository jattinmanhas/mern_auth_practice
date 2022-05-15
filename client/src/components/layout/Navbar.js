import React, { useContext } from 'react'
import {Link} from "react-router-dom"
import AuthContext from '../../context/AuthContext'
import LogOutBtn from '../auth/LogOutBtn';

function Navbar() {
  const { loggedIn } = useContext(AuthContext);
  console.log(loggedIn);

  return (
    <div>
        <Link to="/">HOME</Link>

        {
          loggedIn === false && <>
          <Link to="/register">REGISTER</Link>
          <Link to="/login">LOGIN</Link>
          </>
        }
        
        {loggedIn === true && (
        <>
          <Link to="/customer">Customers</Link>
          <LogOutBtn />
        </>
      )}

      {/* {loggedIn ? <><Link to="/register">REGISTER</Link>
          <Link to="/login">LOGIN</Link></> :  <><Link to="/customer">Customers</Link>
          <LogOutBtn /></> } */}
    </div>
  )
}

export default Navbar