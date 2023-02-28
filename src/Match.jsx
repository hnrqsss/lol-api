import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Team } from "./Team"
import { API_KEY, BASE_URL_FEED } from "./utils/Constants"

export function Match() {
    const [teamOne, setTeamOne] = useState([])
    const [teamTwo, setTeamTwo] = useState([])
    const {id} = useParams()

    useEffect(() => {
        function getDate() {
                const date = new Date()

                const first = date.toISOString().split('T')[0]

                const hour = date.getHours()

                const sec = date.getSeconds()


                const firstSecond = sec - 45 < 0 ? 60 - sec : sec

                const min = date.getMinutes()

                const countMin = min - 1 < 0 ? 0 : min - 1

                const firstMin = sec - 45 < 0 ?  countMin : min

                const minut = firstMin.toString().length < 2 ? `0${firstMin}` : firstMin
                
                const second = parseInt(firstSecond.toString()[0]) * 10

                const finalDate = `${first}T${hour}:${minut}:${second}.000z`

                return finalDate
        }

        async function fetchData() {
            setInterval(async () => {
                

                const { data } = await axios.get(`${BASE_URL_FEED}/livestats/v1/details/${parseInt(id) + 1}?hl=pt-BR&startingTime=${getDate()}`, {
                    headers: {
                        'x-api-key': API_KEY
                    }
                })

                if (data.frames) {
                    setTeamOne(data.frames[data.frames.length - 1].participants.slice(0,5))
                    setTeamTwo(data.frames[data.frames.length - 1].participants.slice(5,10))
                }
            }, 1000)
            
            
        }

        fetchData()
    
    }, [])

    return(
        <>
            <h1>Time 1</h1>
            <Team participants={teamOne} />

            <h2>Time 2</h2>
            <Team participants={teamTwo} />
        
        </>
    )
}