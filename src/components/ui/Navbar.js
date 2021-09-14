import React, { useContext } from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'
import AuthContext from '../../auth/AuthContext'
import { types } from '../../types/types'

const Navbar = () => {

  const { user: { name }, dispatch } = useContext(AuthContext)

  const history = useHistory()

  console.log(history);

  const handleLogout = () => {
    history.replace('/login')

    dispatch({
      type: types.logout,
      payload: {
        logged: false
      }
    })
  }

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark pl-5">

      <Link
        className="navbar-brand pl-5 mx-5"
        to="/"
      >
        Marvel Vs DC
      </Link>
      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/marvel"
          >
            Marvel
          </NavLink>
          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/dc"
          >
            DC
          </NavLink>
          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/search"
          >
            Search
          </NavLink>
        </div>
      </div>
      <div className="nav navbar-nav navbar-right">
        <ul className="navbar-nav mx-auto ">
          <span className="nav-item nav-link text-info" >
            {name}
          </span>
          <button
            className="nav-item nav-link btn mx-5"
            onClick={handleLogout}
          >
            Logout
          </button>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar