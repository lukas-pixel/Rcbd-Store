import './header.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo-rcbdstore.png'

function header() {
    return (
        <div>
            <img src={logo} alt="Logo RcbdStore" />
            <div>
                <Link to="/">Accueil</Link>
                
            </div>
        </div>
    )
}

export default header
