import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

export function Events({ events = []}) {
    
  
    return (
        <ul className='events-list'>
        {events?.map((event, index) => (
          <li key={index} className='event-item'>
              {console.log(event)}
              <Link to={event?.state === 'inProgress' ? `/partida/${event?.match?.id}` : ''}>
                <div className='event-header'>
                    <span>{event?.league?.name}</span>
                    <span>{event?.blockName}</span>
                </div>
                <div className='event-body'>
                  {event?.match?.teams?.map((team, i) => (
                    <>
                      <div className='team-place'>
                        <img src={team?.image?.replace('http://', 'https://')} />
                        <span>{team?.code}</span>
                      </div>                        
                      <span>{i === 0 && 'VS'}</span>
                    </>
                  ))}
                </div>
              </Link>
          </li>
        ))}
      </ul>
    )
}