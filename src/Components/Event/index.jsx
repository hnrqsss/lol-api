import moment from "moment-timezone"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import './styles.css'

export function Event({ event }) {
  const [data, setData] = useState({})


  useEffect(() => {
    if (event) {
      setData({
        league: event?.league?.name,
        id: event?.match?.id,
        startTime: moment(event?.startTime).tz('America/Sao_Paulo').format('HH:mm'),
        bestOf: event?.match?.strategy?.count,
        teamA: event?.match?.teams[0],
        teamB: event?.match?.teams[1]
      })
    }
  }, [event])
  
  return(
    <li className="event-card">
      <Link to={`/partida/${data?.id}`}>
        <div className="event-card-header">
          {data?.league}
        </div>
        <div className="event-card-body">
          <div className="event-team">
            <img src={data?.teamA?.image} />
            <p>{data?.teamA?.code}</p>
            <span>{data?.teamA?.record?.wins} - {data?.teamA?.record?.losses}</span>
          </div>

          <span>VS</span>

          <div className="event-team">
            <img src={data?.teamB?.image} />
            <p>{data?.teamB?.code}</p>
            <span>{data?.teamB?.record?.wins} - {data?.teamB?.record?.losses}</span>
          </div>
        </div>
        <div className="event-card-footer">
          Horário: {data?.startTime}
        </div>
      </Link>
    </li>
  ) 
}
