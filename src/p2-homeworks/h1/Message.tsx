import React from 'react'
import s from "./Message.module.css"

type MessageType = {
    avatar: string
    name: string
    message:string
    time:string
}

const Message: React.FC<MessageType> = (props) => {
    return (
        <div className={s.message}>
            <div className={s.img}>
                <img src={props.avatar}/>
            </div>
            <div className={s.dialog_style}> </div>
            <div className={s.dialog}>
                <div className={s.name}>{props.name}</div>
                <div className={s.mes}>{props.message}</div>
                <div className={s.time}>{props.time}</div>
            </div>
        </div>
    )
}

export default Message
