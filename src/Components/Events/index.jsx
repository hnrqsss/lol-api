import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Event } from '../Event'
import './styles.css'

export function Events({ events = [], title = ''}) {
    
  
    return (
        <div className="events-container">
          <h3>{title}</h3>
          
          <ul className='events-list'>
            {events?.map(event => <Event key={event?.match?.id} event={event} />)}
          </ul>
        </div>
    )
}