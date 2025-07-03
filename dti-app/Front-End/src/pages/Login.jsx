import React from 'react'
import './Login.css'

export const Login = () => {
  return (
    <div id= 'login'>
        <h1>Login Page</h1>
        <form  >
            <div id ='LoginForm'>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" required />
            </div>
            <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
            </div>
            <button type="submit">Login</button>
        </form>
    </div>
  )
}

export default Login;