import smitlogo from "../assets/smit-logo.png";

function Header() {
    return (
        <header className="custom-nav">
            <nav>
                <img src={smitlogo} alt="SMIT logo" className="logo" />
                <i className="bi bi-person-fill profile-icon"></i>
            </nav>
        </header>
    );
}

export default Header;
