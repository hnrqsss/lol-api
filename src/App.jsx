import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import { Events } from './Components/Events'
import { eventsApi } from './services/eventsApi'
import { API_KEY, BASE_URL_LOL_ESPORTS } from './utils/Constants'

function App() {
  const [inProgress, setInProgress] = useState([])
  const [unStart, setUnstart] = useState([])

  useEffect(() => {
    async function getTournaments() {
      const {inProgress, unStart} = await eventsApi.getSchedules()

      setInProgress(inProgress)
      setUnstart(unStart)
    }

    getTournaments()
  },[])

  return (
    <div className="App">
      <h2>AO VIVO</h2>
      <Events 
        events={inProgress} 
      />
      <h2>PRÓXIMOS</h2>
      <Events 
        events={unStart} 
      />
    </div>
  )
}

export default App
