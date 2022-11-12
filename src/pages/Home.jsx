import React from 'react'
// components
import Login from "../components/Login"
// styles
import "../styles/home.scss"

function Home() {
  return (
    <div className='container-login'>
      <h1>Ninetify</h1>
      <Login />
    </div>
  )
}

export default Home