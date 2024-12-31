import smitlogo from "../assets/smit-logo.png"

function Header() {
    return (
        <header className="custom-nav">
            <nav>
                <img src={smitlogo} alt="logo" />
                <i className="bi bi-person-fill mt-1"></i>
            </nav>
        </header>
    )
}

export default Header;