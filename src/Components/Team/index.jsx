import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import {faTowerObservation, faDragon, faCircleDot, faGun, faCoins, faKhanda} from '@fortawesome/free-solid-svg-icons'
import './styles.css'
import { SIDE_COLORS } from "../../utils/Constants";
import { Player } from "../Player";

export function Team({ participants, side, teamMetadata, framesTeam }) {
    const [team, setTeam] = useState()

    useEffect(() => {
        if(teamMetadata && teamMetadata?.participantMetadata) {
            const [name]  = teamMetadata?.participantMetadata[0]?.summonerName?.split(' ') || ''
    
            setTeam(name)

        }
    }, [teamMetadata])
    return (
        <div >
            <header className="team-header">
                <h3>{team}</h3>
                <div className="team-match-details-container">
                    <ul className="team-match-details-list">
                        <li>
                            <div>
                                <FontAwesomeIcon icon={faTowerObservation} /> {framesTeam?.towers}
                            </div>
                        </li>
                        <li>
                            <div>
                                <FontAwesomeIcon icon={faDragon} /> {framesTeam?.dragons?.length}
                            </div>
                        </li>
                        <li>
                            <div>
                                <FontAwesomeIcon icon={faKhanda} /> {framesTeam?.barons}
                            </div>
                        </li>
                        <li>
                            <div>
                                <FontAwesomeIcon icon={faCircleDot} />
                                {framesTeam?.inhibitors}
                            </div>
                        </li>
                        <li>
                            <div>
                                <FontAwesomeIcon icon={faGun} /> {framesTeam?.totalKills}
                            </div>
                        </li>
                        <li>
                            <div>
                                <FontAwesomeIcon icon={faCoins} /> {framesTeam?.totalGold}
                            </div>
                        </li>
                        
                    </ul>
                </div>
                <div style={{ background: SIDE_COLORS[side], width: '100%', height: '1rem' }}></div>
            </header>
                <ul className='list-player'>
                    {participants?.map((player, index) => (
                        <Player key={index} player={player} playerMetaData={teamMetadata?.participantMetadata[index]} />
                    ))}
                </ul>
            
        </div>
    )
}