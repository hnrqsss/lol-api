export function Team({ participants }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Jogador</th>
                    <th>Kills</th>
                    <th>Death</th>
                    <th>Assists</th>
                    <th>Ouro</th>
                </tr>
            </thead>
            <tbody>
                {participants.map(player => (
                    <tr key={player.participantId}>
                        <td>{player.participantId}</td>
                        <td>{player.kills}</td>
                        <td>{player.death}</td>
                        <td>{player.assists}</td>
                        <td>{player.totalGoldEarned}</td>
                    </tr>
                ))}     
            </tbody>
        </table>
    )
}