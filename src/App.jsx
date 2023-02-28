import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import { API_KEY, BASE_URL_LOL_ESPORTS } from './utils/Constants'

function App() {
  const [response, setResponse] = useState(null)

  useEffect(() => {
    async function getTournaments() {
      const { data } = await axios.get(`${BASE_URL_LOL_ESPORTS}/persisted/gw/getLive?hl=pt-BR`, {
        headers: {
          'x-api-key': API_KEY
        }
      })

      setResponse(data.data.schedule)
    }

    getTournaments()
  },[])

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Imagem</th>
            <th>Confontro</th>
            {/* <th>id</th> */}
          </tr>
        </thead>
        <tbody>
          {response?.events?.map(item => (
            <tr key={item.league.id}>
              
              <td>{item.league.name}</td>
              <td><img src={item.league.image} /></td>
              <td>
                <Link to={`/partida/${item?.match?.id}`}>
                  {item?.match?.teams?.map((time, index) => 
                    <span key={time.id}>
                      <img src={time.image} />
                      {index === 0 && ' __ X __'}
                    </span>
                  )}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App
