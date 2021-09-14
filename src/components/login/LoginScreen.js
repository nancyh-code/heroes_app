import React, { useContext } from 'react'
import AuthContext from '../../auth/AuthContext'
import { types } from '../../types/types'



const LoginScreen = ({ history }) => {

  const { dispatch } = useContext(AuthContext)

  const handleLogin = () => {
    //history.push('/');
    // history.replace('/')

    const lastPath = localStorage.getItem('lastPath') || '/';

    dispatch({
      type: types.login,
      payload: {
        name: 'Nancy',
        logged: true
      }
    })
    history.replace(lastPath)
  }

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />
      <button
        className="btn btn-primary"
        onClick={handleLogin} >
        Login
      </button>
    </div>
  )
}

export default LoginScreen
