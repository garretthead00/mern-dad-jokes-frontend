import { useState } from 'react'
import { LoginForm } from '../components/LoginForm'
import { loginUser } from '../api'

export const Login = () => {

    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const login = async ({email, password}) => {
        console.log(`logging in user ${email}`)

        await loginUser({email, password}).then((res) => {
            console.log('user is logged in')
            setIsAuthenticated(true)
            // redirect to jokes
        })
    }

    return (
        <div>
            <h1>Login</h1>
            {isAuthenticated && <h1>Authenticated</h1>}
            <LoginForm login={login}/>
        </div>
    )
}