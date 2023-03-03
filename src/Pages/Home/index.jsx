import { useEffect, useState } from "react";
import { Events } from "../../Components/Events";
import { Layout } from "../../Layout";
import { eventsApi } from "../../services/eventsApi";
import './styles.css'

export function Home() {
    const [inProgress, setInProgress] = useState([])
    const [unStart, setUnstart] = useState([])

    useEffect(() => {
        async function fetchData() {
            const {inProgress, unStart} = await eventsApi.getSchedules()

            setInProgress(inProgress)
            setUnstart(unStart)
        }
        
        const calls = setInterval(async () => {
            fetchData()
        }, 10000);

        fetchData();

        return () => clearInterval(calls)
    },[])
    
    return(
        <Layout>
            <div className="home-container">
                <Events
                    events={inProgress}
                    title={'Ao vivo'}
                />

                <Events
                    events={unStart}
                    title={'Próximos jogos'}
                />
            </div>
        </Layout>
    )
}