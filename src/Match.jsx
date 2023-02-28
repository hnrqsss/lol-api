import axios from "axios"
import { useCallback, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Team } from "./Team"
import { API_KEY, BASE_URL_FEED } from "./utils/Constants"

export function Match() {
    const [teamOne, setTeamOne] = useState([])
    const [teamTwo, setTeamTwo] = useState([])

    const {id} = useParams()

    useEffect(() => {

        function getDate() {

            const dt = new Date()
            const date = dt.toISOString()

            const dateSplit = date.split(':')

            const first = dateSplit[0]

            const min = parseInt(dateSplit[1])

            const sec = parseInt(dateSplit[2])

            // const calcSec = sec - 45 < 0 ? 60 - sec : sec
            
            const calcSec = (parseInt(sec.toString()[0]) * 10)  > 60 ? 60 : (parseInt(sec.toString()[0]) * 10)



            const calcMin = min - 1 < 0 ? 0 : min - 1

            const minute = calcMin.toString().length < 2 ? `0${calcMin}` : calcMin

            const seconds = calcSec.toString().length < 2 ? `0${calcSec}` : calcSec

            const finalDate = `${first}:${minute}:${seconds}.000z`

            return finalDate
    }

        async function fetchData() {
            const firstId = id.slice(0, id.length - 2) 
            const lastId = parseInt(id.slice(id.length - 2, id.length)) + 1
            const finalId = firstId + lastId;

            setInterval(async () => {
                

                const { data } = await axios.get(`${BASE_URL_FEED}/livestats/v1/details/${finalId}?hl=pt-BR&startingTime=${getDate()}`, {
                    headers: {
                        'x-api-key': API_KEY
                    }
                })

                if (data.frames) {
                    setTeamOne(data.frames[0].participants.slice(0,5))
                    setTeamTwo(data.frames[0].participants.slice(5,10))
                }
            }, 1000)
        }

        fetchData()
    
    }, [])

    return(
        <>
            <h1>Time 1</h1>
            <Team participants={teamOne} color='blue' />

            <h1>Time 2</h1>
            <Team participants={teamTwo} color='red'/>
        
        </>
    )
}