import smitlogo from "../assets/smit-logo.png"

function Header() {
    return (
        <header>
            <nav className="d-flex justify-content-between">
                <img src={smitlogo} alt="logo" width={170} />
                <span>Profile Icon</span>
            </nav>
        </header>
    )
}

export default Header;