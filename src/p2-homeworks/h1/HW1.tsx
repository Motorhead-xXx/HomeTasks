import React from 'react'
import Message from "./Message";
import AlternativeMessage from "./AlternativeMessage";



const messageData= {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Aleksandr',
    message: 'Are they learning Javascript?',
    time: '04:20',
}


function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1



            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            <AlternativeMessage textButton={"Ignat"}/>
            <hr/>
        </div>
    )
}

export default HW1
