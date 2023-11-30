'use client'

import fetchMethod from "../../../../api/axios/axiosInstance"
import {useRef, useState} from 'react';
import {LOGIN_URL_END_POINT} from "../../consts/endPoints"

export function LoginForm(submitAction) {
    
    const userNameRef = useRef(null);
    const passWordRef = useRef(null);
    const [error , setError] = useState()

    async function submitAction() {

        var loginResult = fetchMethod({
            action: 'login',
            url: LOGIN_URL_END_POINT , 
            method:"POST",
            data: {
                username: userNameRef.current.value,
                password: passWordRef.current.value
            }
        })
        var loginResult = await loginResult
        setError(loginResult?.error ? loginResult.error : "")
    }
    return (
    <div>
        <input ref={userNameRef} placeholder='user name' type="text" name="username"/>
        <input ref={passWordRef} placeholder='password' type="password" name="password"/>
        <button onClick={() => submitAction()}>login</button>
        
        <span>{error}</span>
    </div>
    )
}
