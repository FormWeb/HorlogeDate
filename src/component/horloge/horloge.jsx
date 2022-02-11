import {useEffect, useState} from "react"

const Horloge = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        console.log("Créer le composant Horloge")
        const timerInterval = setInterval(() => {
            setTime(new Date())
        }, 200)

        return () => {
            console.log("Détruire le composant Horloge")
            clearInterval(timerInterval)
        }
    }, [])

    return (
        <p>{time.toLocaleTimeString()}</p>
    )
}

export default Horloge