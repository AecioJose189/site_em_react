
import './Navbar.css'
function NavBar() {
    return(
        <header className="header">
            <a href="/" className="logo">Logo</a>
            <nav className="navbar">
                <a href="/">Início</a>
                <a href="/">Sobre nós</a>
                <a href="/">Serviços</a>
                <a href="/">Contato</a>
            </nav>
        </header>
    )
}

export default NavBar