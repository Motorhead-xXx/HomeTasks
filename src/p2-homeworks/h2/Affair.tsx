import React from 'react'
import {AffairType} from "./HW2";
import s from "./Affairs.module.css"

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)}// need to fix

    return (
        <div className={s.taskDiv}>
            <div className={s.task}>
                <div>{props.affair.name}</div>
                <div>[ {props.affair.priority} ]</div>
                <button onClick={deleteCallback} className={s.but}>X</button>
            </div>


        </div>
    )
}

export default Affair
