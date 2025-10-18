import { navLinks } from "../../config/navLinks";
import "./HomeNav.css";

interface HomeNavProps {
  fadeOut: boolean;
  onLinkClick: (path: string) => void;
}

export default function HomeNav({ fadeOut, onLinkClick }: HomeNavProps) {

  const handleClick = (path: string) => {
    onLinkClick(path);
  };

  return (
    <div className="navbar-home">
      <ul className="navbar-nav-home">
        {navLinks.map((link, index) => (
          <li
            key={link.name}
            className={`nav-item ${fadeOut ? `fade-up-link delay-${index}` : ""}`}
          >
            <button
              className="nav-link-home link-button"
              onClick={() => handleClick(link.path)}
            >
              {link.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
