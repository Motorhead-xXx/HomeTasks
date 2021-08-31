import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string// need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    let onKeypressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            addUser()
        }
    }

    const inputClass = name === "" ? s.error : s.input // need to fix with (?:)
    const divError = name === "" ? s.errorDiv: s.doneDiv

    return (
        <div className={s.wrapper}>
            <input value={name} onChange={setNameCallback} className={inputClass} onKeyPress={onKeypressHandler} required/>
            <button className={s.button} onClick={addUser}>add</button>
            <span className={s.total}>{totalUsers}</span>
            <div className={divError}>{error}</div>

        </div>
    )
}

export default Greeting
