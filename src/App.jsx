import { useEffect, useState } from 'react'
import './App.css'
import { Events } from './Components/Events'
import { eventsApi } from './services/eventsApi'

function App() {
  const [inProgress, setInProgress] = useState([])
  const [unStart, setUnstart] = useState([])

  useEffect(() => {
    const calls = setInterval(async () => {
        const {inProgress, unStart} = await eventsApi.getSchedules()
  
        setInProgress(inProgress)
        setUnstart(unStart)
        
    }, 5000);

    return () => clearInterval(calls)

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
