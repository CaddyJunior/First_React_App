import axios from "axios"

const apiClient = axios.create(
    {
        baseURL : 'http://localhost:8080'
    }
)

export function retrieveHelloWorld(){
    return apiClient.get("/hello-world")
}

export function retrieveHelloWorldBean(){
    return apiClient.get('/hello-world-bean')
}

export function retrieveHelloWorldPath(username){
    return apiClient.get(`/hello-world/path-variable/${username}`)
}

//or
// export const retrieveHelloWorldBean = () =>
//     axios.get('http://localhost:8080/hello-world-bean')