import React from 'react'
import s from "./AlternativeMessage.module.css"

type MessageAlt = {
    textButton: string
}

const AlternativeMessage:React.FC <MessageAlt> = (props) => {
    return (
        <div className={s.button}>
        <input/>
        <button>{props.textButton}</button>
        </div>
    )
}

export default AlternativeMessage
