import { useState, useEffect } from 'react'
import { getJokes } from '../api'
import { JokesList } from '../components/JokesList'

export const Jokes = () => {

    const [jokes, setJokes] = useState()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {

        async function loadJokes(){
            const jokes = await getJokes()
            //const json = await jokes.json()
            setJokes(jokes)
            setIsLoading(false)
        }
        loadJokes()
    }, [])

    return (
        <div>
            <h1>Jokes</h1>
            {isLoading && <h3>Loading...</h3>}
            <JokesList jokes={jokes} />
        </div>
    )
}