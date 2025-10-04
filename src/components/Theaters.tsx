import axios from "axios"
import { useEffect, useState } from "react"
import './style/Theaters.css'

export default function Theaters() {
    interface ITheater {
        id: number
        point:string
        street:string
    }
    useEffect(() => {
        fetchTheaters()
    },[])

    const [theaters , setTheaters] = useState<ITheater[]>([])
    const [error, setError] = useState<string | null>(null)

    async function fetchTheaters(){
        try {
            const result = await axios.get('./data/movietheaters.json')
            setTheaters(result.data.theatere)
        }
        catch(err) {
            const errorMessage = err instanceof Error ? err.message : 'Произошла ошибка'
            setError(errorMessage)
        }
        if (error) {
        return <div>Ошибка: {error}</div>
  }
    }
    return (
        <div>
            {theaters.length === 0 ? (
                    <div>Нет данных о кинотеатрах</div>
            ): (
                <div className="theaters-main" >
                    {theaters.map(theater => (
                        <div className="content-theaters">
                            <h3 className="point">{theater.point}</h3>
                            <p className="street">{theater.street}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
