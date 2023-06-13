import React from 'react'
import Navbar from '../components/Navbar'
import Login from '../pages/Login'
import { Navigate } from 'react-router-dom'

function Control(props: {
  component: JSX.Element
}
) {
  const user = localStorage.getItem("user")
  return (
    <>
      {user == null ? <Navigate to={"/"}/>
        : <>
          <Navbar />
          {props.component}
        </>
      }

    </>
  )
}

export default Control