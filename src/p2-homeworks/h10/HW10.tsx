import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC} from "./bll/loadingReducer";
import s from './bll/HW10.module.css'

function HW10() {
    // useSelector, useDispatch
    const dispatch = useDispatch()
    const loading = useSelector<AppStoreType, boolean>(state=> state.loading.isLoading)

    const setLoading = () => {
        let loading = true
        dispatch(loadingAC(loading))
        setTimeout( () => {
            dispatch(loadingAC(!loading))
            console.log('loading...')
        }, 1500)
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {loading
                ? (
                    <div className={s.cssloadContainer}>
                        <div className={s.cssloadWhirlpool}></div>
                    </div>
                ) : (
                    <div>
                        <SuperButton style={{height:"40px", width:"100px", marginLeft:"10px", marginTop:"40px"} } onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
