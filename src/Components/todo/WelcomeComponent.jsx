import { Link, useParams } from 'react-router-dom';

export default function WelcomeComponent(){

    const {username} = useParams()

    return(
        <div className="welcomePage">
            <h1> Welcome {username} </h1>
            <div>To manage your Todos </div>
            <div><Link to="/list-todos">Click Here</Link></div>
        </div>
    )
}