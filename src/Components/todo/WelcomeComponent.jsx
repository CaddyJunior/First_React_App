import axios from 'axios';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { retrieveHelloWorldBean, retrieveHelloWorldPath, retrieveHelloWorld } from './api/HelloWorldApiService';

export default function WelcomeComponent(){

    const {username} = useParams()
    const [message, setMessage] = useState(null)

    function callHelloWorldAPI(){
        retrieveHelloWorld()
            .then( (response) => successfullResponse(response) )
            .catch( (response) => failedResponse(response) )
            .finally( console.log('CleanUp!'))
    }

    function callHelloWorldPathAPI(){
        retrieveHelloWorldPath(username)
            .then( (response) => successfullResponse(response) )
            .catch( (response) => failedResponse(response) )
            .finally( console.log('CleanUp!'))
    }

    function callHelloWorldBeanAPI(){
        retrieveHelloWorldBean()
            .then( (response) => successfullResponse(response) )
            .catch( (response) => failedResponse(response) )
            .finally( console.log('CleanUp!'))
    }

    function successfullResponse(response){
        console.log(response)
        setMessage(response.data.message)
    }

    function failedResponse(response){
        console.log(response)
    }

    return(
        <div className="welcomePage">
            <h1> Welcome {username} </h1>
            <div>To manage your Todos </div>
            <div><Link to="/list-todos">Click Here</Link></div>
            <div>
                <button className='btn btn-success m-5' onClick={callHelloWorldAPI}>
                    Call Hello_World
                </button>

                <button className='btn btn-success m-5' onClick={callHelloWorldBeanAPI}>
                    Call Hello_World_Bean
                </button>
                
                <button className='btn btn-success m-5' onClick={callHelloWorldPathAPI}>
                    Call Hello_World_Path
                </button>

            </div>
            {/* <div className='text-info'>{message}</div> */}
            <div className='text-info'>{message}</div>
        </div>
    )
}