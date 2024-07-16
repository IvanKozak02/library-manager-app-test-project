import './footer.css';
import {Link} from "react-router-dom";
const Footer = () => {
    return (
        <footer className="footer">
          <span className="footer__text">
              © 2024, from
              <Link className="footer__link" to="#">
                  Ivan Kozak
              </Link>
          </span>
        </footer>
    );
};

export default Footer;