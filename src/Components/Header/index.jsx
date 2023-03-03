import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import './styles.css'

export function Header() {
    return(
        <header>
            <Link to={'/'}>
                <FontAwesomeIcon icon={faHome} size={'2x'}/>
            </Link>
        </header>
    )
}