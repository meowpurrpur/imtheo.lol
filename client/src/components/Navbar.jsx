import { NavLink } from "react-router-dom";

export default function Navbar() {
  const links = [
    { name: "home", href: "/", end: true },
    { name: "about", href: "/about" },
    { name: "projects", href: "/projects" },
  ];

  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar-brand">
        imtheo.lol
      </NavLink>

      <div className="navbar-links">
        {links.map((link) => (
          <NavLink
            key={link.name}
            to={link.href}
            end={link.end}
            className={({ isActive }) =>
              isActive ? "navbar-link navbar-link-active" : "navbar-link"
            }
          >
            {link.name}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
