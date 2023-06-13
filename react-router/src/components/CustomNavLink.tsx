import React from 'react'
import { NavLink } from 'react-router-dom'

function CustomNavLink( props: {
    to: string,
    title: string
}) {
    function getClassName(isActive : boolean){
       return isActive ? "nav-link active" : "nav-link"
    }
  return (
    <NavLink to={props.to} className={({isActive}) => getClassName(isActive)} aria-current="page">{props.title}</NavLink>

  )
}

export default CustomNavLink