import React from 'react'
import s from "./Routes.module.css"

function Error404() {
    return (
        <div className={s.Error}>
            <div>404</div>
            <div>Page not found!</div>
            <div className={s.ErrorKat}>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>
        </div>
    )
}

export default Error404
