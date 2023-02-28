import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Team } from "../Components/Team"
import { eventsApi } from "../services/feedApi"

export function Match() {

    const [blueMetaData, setBlueMetadata] = useState({})
    const [redMetaData, setRedMetadata] = useState({})
    const [framesMetaData, setframesMetaData] = useState({})

    const [teamOne, setTeamOne] = useState([])
    const [teamTwo, setTeamTwo] = useState([])

    const {id} = useParams()

    useEffect(() => {
        
        setInterval(async () => {
            const { gameMetadata, frames, framesMetaData } = await eventsApi.getMatchData({id})
    
            setBlueMetadata(gameMetadata?.blueTeamMetadata)
            setRedMetadata(gameMetadata?.redTeamMetadata)
            setframesMetaData(framesMetaData)

            if (frames) {
                setTeamOne(frames?.participants?.slice(0,5))
                setTeamTwo(frames?.participants?.slice(5,10))
            }
        }, 1000)
    
    }, [])

    return(
        <>  
            <Team 
                participants={teamOne}
                color='blue'
                teamMetadata={blueMetaData}
                framesTeam={framesMetaData?.blueTeam}
            />
            
            <Team 
                participants={teamTwo}
                color='red'
                teamMetadata={redMetaData}
                framesTeam={framesMetaData?.redTeam}    
            />
        </>
    )
}