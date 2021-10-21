import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from "./HW9.module.css"

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(new Date())
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        clearInterval(timerId)
    }
    const start = () => {
        stop()
        const id: number = +setInterval(() => {
            setDate(new Date())
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }

    const stringTime = date.toLocaleTimeString()
        // (date.getHours() < 10 ? "0" + date.getHours() : date.getHours())
        // + ":" + (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes())
        // + ":" + (date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds())

    const stringDate = date.toLocaleDateString()
        // (date.getDate() < 10 ? "0" + date.getDate() : date.getDate())
        // + "." + ((date.getMonth() ) < 10 ? "0" + date.getMonth() : date.getMonth())
        // + "." + date.getFullYear()

    return (
        <div className={s.wrapperClock}>
            <div className={s.time}
                 onMouseEnter={onMouseEnter}
                 onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </div>
            <div className={s.date}>
                {show && (
                    <div>
                        {stringDate}
                    </div>
                )}
            </div>


            <SuperButton className={s.buttonStart} onClick={start}>start</SuperButton>
            <SuperButton className={s.buttonStop} onClick={stop}>stop</SuperButton>

        </div>
    )
}

export default Clock
