
import './Navbar.css'
function NavBar() {
    return(
        <div id='inicio'>
            <header className="header" >
                <a href="#inicio" className="logo">Logo</a>
                <nav className="navbar">
                    <a href="#inicio">Início</a>
                    <a href="#SobreNos" >Sobre nós</a>
                    <a href="/">Serviços</a>
                    <a href="/">Contato</a>
                </nav>
            </header>
        </div>
        
    )
}

export default NavBar