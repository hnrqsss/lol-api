import './styles.css'

export function Player({ player, playerMetaData }) {
    return(
            <li className="list-player-item">
                <div className="list-player-item-info">
                    <span>Player</span>
                    <span>{playerMetaData?.summonerName.split(' ')[1]}</span>
                    <span>{playerMetaData?.championId}</span>
                    <span>{playerMetaData?.role}</span>
                </div>
                <div className="list-player-item-info">
                    <span>CS</span>
                    <span>{player?.creepScore}</span>
                </div>
                <div className="list-player-item-info">
                    <span>LVL</span> 
                    {player?.level}
                </div>
                <div className="list-player-item-info">
                    <span>K</span>
                    <span>{player?.kills}</span>
                </div>
                <div className="list-player-item-info">
                    <span>D</span>
                    {player?.deaths}
                </div>
                <div className="list-player-item-info">
                    <span>A</span>
                    {player?.assists}
                </div>
                <div className="list-player-item-info">
                    <span>G</span> 
                    {player?.totalGoldEarned}
                </div>
            </li>
)
}