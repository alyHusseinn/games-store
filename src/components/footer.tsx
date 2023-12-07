import LogoImg from "../assets/imgs/logo.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <main>
        <div className="about">
          <Link to="/" className="logo">
            <img src={LogoImg} alt="store" />
            <h1>Gaming store</h1>
          </Link>
          <div className="info">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi eius
            nemo iusto. Praesentium facilis reiciendis porro esse provident,
          </div>
        </div>

        <div className="useful-links">
          <h2>UseFul Links</h2>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/games">Games</Link>
            <a href="https://github.com/alyHusseinn/games-store">Reposatory</a>
            <a href="https://github.com/alyHusseinn">alyHusseinn</a>
          </nav>
        </div>
      </main>
      <div className="github">
        <a href="https://github.com/alyHusseinn">
            Developed By <span>alyHusseinn</span>
        </a>
        
      </div>
    </footer>
  );
}

export default Footer;
