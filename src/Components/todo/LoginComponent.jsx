import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import './TodoApp.css'
import { useAuth } from './security/AuthContext';

export default function LoginComponent(){

    const [username, setUsername] = useState('KB')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState(false)
    const navigate = useNavigate()
    const authContext = useAuth()

    function handleUsernameChange(event){
        setUsername(event.target.value)
    }

    function handlePasswordChange(event){
        setPassword(event.target.value)
    } 

    function handleSubmit(){
        if(authContext.login(username, password)){
            navigate(`/welcome/${username}`)
        }else{
            setErrorMessage(true)
        }
    }


    // This following line is a short way of saying : {successMessage && <div className='successMessages'>Authenticated Successfully</div>}
    // If the succeessMessage is true the show the div

    return(
        <div className="Login">
            <h1>Login to TODO</h1>
            {errorMessage && 
                <div className='errorMessage'>Authentication Failed, please check credentials</div>}
            <div className="LoginForm">
                <div>
                    <label>Username</label>
                    <input type="text" name="username" value={username} onChange={handleUsernameChange}/>
                </div>

                <div>
                    <label>Password </label>
                    <input type="password" name="password" value={password} onChange={handlePasswordChange}/>
                </div>

                <div>
                    <button type="button" name="login" onClick={handleSubmit}>Login</button>
                </div>

            </div>
        </div>
    )
}
