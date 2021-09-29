import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'
import s from "./radio.module.css"

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e)
        onChangeOption && onChangeOption(e.currentTarget.value)
    }


    const mappedOptions: any[] = options ? options.map((r, i) => ( // map options with key
        <label className={s.label} key={name + '-' + i}>
            <input
                className={s.originalRadio}
                type={'radio'}
                name={name}
                checked={r===value}
                value={r}
                onChange={onChangeCallback}
            />
            <span className={s.fake}></span>
            {r}

        </label>
    )) : []

    return (
        <div className={s.radio}>
            {mappedOptions}
        </div>
    )
}

export default SuperRadio
