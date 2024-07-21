function Navbar(){
    return(
        <nav className="nav">
            <a href="/" className="site_title">CyberWeb</a>
            <ul>
                <li><a href="/Home">Home</a></li>
                <li><a href="/CIS">Cyber & Information Security</a></li>
                <li><a href="/CD">Cyber Defenses</a></li>
                <li>
                    <a href="/CA">Cyber Attack</a>
                    <ul className="dropdown">
                        <li><a href="DoS_DDoS">DDoS and DoS</a></li>
                        <li><a href="Malware">Malware</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar