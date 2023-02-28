import { useEffect, useState } from "react";
import { POSITIONS } from "../../utils/Constants";

export function Team({ participants, color, teamMetadata, framesTeam }) {
    const [team, setTeam] = useState()

    useEffect(() => {
        if(teamMetadata && teamMetadata?.participantMetadata) {
            const [name]  = teamMetadata?.participantMetadata[0]?.summonerName?.split(' ') || ''
    
            setTeam(name)

        }
    }, [teamMetadata])
    return (
        <div style={{ background: color }}>
            <header>
                <h3>{team}</h3>
                <div className="team-match-details">
                    <ul>
                        <li>Torres: {framesTeam?.towers}</li>
                        <li>Drag: {framesTeam?.dragons?.map(drag =>` ${drag}` )}</li>
                        <li>inib: {framesTeam?.inhibitors}</li>
                        <li>Kills: {framesTeam?.totalKills}</li>
                        <li>GOLD: {framesTeam?.totalGold}</li>
                    </ul>
                </div>
            </header>
            
                {participants?.map((player, index) => (
                    <div key={index}>        
                        <li >Nome: {teamMetadata?.participantMetadata[index].summonerName}</li>
                        <li >Champ: {teamMetadata?.participantMetadata[index].championId}</li>
                        <li >Role: {teamMetadata?.participantMetadata[index].role}</li>
                        <li >CS: {player?.creepScore}</li>
                        <li >LVL: {player?.level}</li>
                        <li >K: {player?.kills}</li>
                        <li >D: {player?.deaths}</li>
                        <li >A: {player?.assists}</li>
                        <li >GOLD: {player?.totalGoldEarned}</li>
                    </div>
                ))}
            
        </div>
    )
}