import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <div className='left'>
                <img src="" alt="" />
            </div>
            <div className='right'>
                <ul>
                    <Link to="/urniki">Urniki</Link>
                    <Link to="/ceniki">Ceniki</Link>
                    <Link to="/artikli">Artikli</Link>
                    <Link to="/lokacije">Lokacije</Link>
                </ul>
                <div>
                    Pridruži se
                </div>
            </div>
        </nav>
    )
}

export default Navbar