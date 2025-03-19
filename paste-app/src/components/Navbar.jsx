import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex min-w-[500px] flex-row justify-around gap-4'>
        <NavLink to={"/"}>
            Home
        </NavLink>
        <NavLink to={"/pastes"}>
            Pastes
        </NavLink>
    </div>
  )
}

export default Navbar