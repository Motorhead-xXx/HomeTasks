import React from 'react'
import {NavLink} from "react-router-dom";
import s from "./pages/Routes.module.css"

function Header() {
    return (
        <div className={s.link}>
            <NavLink to={'/'} className={s.preJunior}>pre-Junior</NavLink>

            <NavLink to={'/junior'} >Junior</NavLink>

            <NavLink to={'/plus-junior'}>Junior+</NavLink>

            <div className={s.bord}></div>

        </div>
    )
}

export default Header
