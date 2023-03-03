import { Header } from '../Components/Header'

import './styles.css'
import pix from '../assets/chave-pix.jpg'

export function Layout({children}) {
    return(
        <div className="container">
            <Header />

            <aside>
                <div className='pix-container'>
                    <h4>Apoie este projeto!</h4>
                    <img src={pix} alt={'chave pix'} />
                    <h4>Faça um PIX</h4>
                </div>
            </aside>

            <main>
                {children}
            </main>
        </div>
    )
}