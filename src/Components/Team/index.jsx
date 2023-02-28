import { POSITIONS } from "./utils/Constants";

export function Team({ participants, color }) {
    return (
        <div style={{ background: color }}>

            <table>
                <thead>
                    <tr>
                        <th>Jogador</th>
                        <th>CS</th>
                        <th>Level</th>
                        <th>Kills</th>
                        <th>Death</th>
                        <th>Assists</th>
                        <th>Ouro</th>
                    </tr>
                </thead>
                <tbody>
                    {participants.map(player => (
                        <tr key={player.participantId}>
                            <td>{POSITIONS[player.participantId]}</td>
                            <td>{player.creepScore}</td>
                            <td>{player.level}</td>
                            <td>{player.kills}</td>
                            <td>{player.deaths}</td>
                            <td>{player.assists}</td>
                            <td>{player.totalGoldEarned}</td>
                        </tr>
                    ))}     
                </tbody>
            </table>
        </div>
    )
}