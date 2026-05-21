import { useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const links = [
    { name: "home", href: "/" },
    { name: "about", href: "/about" },
    { name: "projects", href: "/projects" },
  ];

  return (
    <nav className="navbar">
      <h2 style={{ margin: 0, fontSize: "1.25rem" }} className="accent">
        imtheo.lol
      </h2>

      <div
        style={{
          display: "flex",
          gap: "1.2rem",
        }}
      >
        {links.map((link) => {
          const isActive = location.pathname == link.href;
          return (
            <a
              key={link.name}
              href={link.href}
              className={isActive ? "navbar-link-active" : "navbar-link"}
            >
              {link.name}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
