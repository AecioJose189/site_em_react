
import './Navbar.css'
function NavBar() {
    return(
        <header className="header">
            <a href="/" className="logo">Logo</a>
            <nav className="navbar">
                <a href="/">Início</a>
                <a href="/">Nossos serviços</a>
                <a href="/">Sobre nós</a>
                <a href="/">Contato</a>
            </nav>
        </header>
    )
}

export default NavBar