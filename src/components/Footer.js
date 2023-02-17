import Logo from "../Logo.svg";

const Footer = () => {
  return (
    <footer>
      <div className="footer_container">
        <img src={Logo} alt="logo" />
        <div className="footer_navigation">
          <h4>Navigation</h4>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Menu</a>
            </li>
            <li>
              <a href="/">Reservations</a>
            </li>
            <li>
              <a href="/">Order Online</a>
            </li>
            <li>
              <a href="/">Login</a>
            </li>
          </ul>
        </div>
        <div className="footer_contact">
          <h4>Contact</h4>
          <ul>
            <li>
              <a href="/">Address</a>
            </li>
            <li>
              <a href="/">Phone</a>
            </li>
            <li>
              <a href="/">Email</a>
            </li>
          </ul>
        </div>
        <div className="footer_social">
          <h4>Social Media Links</h4>
          <ul>
            <li>
              <a href="/">Address</a>
            </li>
            <li>
              <a href="/">Phone</a>
            </li>
            <li>
              <a href="/">Email</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
