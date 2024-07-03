import { Link, useLocation } from "@remix-run/react";
import { useState } from "react";
import HeaderCurrentTime from "./HeaderCurrentTime";

export default function Header() {
  const location = useLocation();
  const currentPath = location.pathname;
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="p-12 flex fixed z-10 top-0 left-0 w-full">
      <div className="flex items-baseline justify-between w-full">
        <Link to="/">
          <img src="/loadoff.svg" alt="loadoffロゴ" />
        </Link>
        <nav className="hidden lg:flex justify-between w-full pl-12">
          <ul className="flex gap-12 text-2xl">
            <li>
              <Link
                to="/about"
                className={`${currentPath === "/about" ? "underline" : ""}`}
              >
                about
              </Link>
            </li>
            <li>
              <Link
                to="/service"
                className={`${currentPath === "/service" ? "underline" : ""}`}
              >
                service
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`${currentPath === "/contact" ? "underline" : ""}`}
              >
                contact
              </Link>
            </li>
          </ul>
          <ul className="flex gap-7 text-2xl">
            {currentPath !== "/" && <HeaderCurrentTime />}
            <li>
              <Link
                to="https://x.com/LoadoffI"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/x.svg" alt="x link" />
              </Link>
            </li>
            <li>
              <Link
                to="https://www.instagram.com/loadoffinc?igsh=MXVpeGpoZ2tuNjhrNA=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/instagram.svg" alt="instagram link" />
              </Link>
            </li>
            <li className="border rounded-full border-org-black px-12">
              <Link to="/recruit">recruit</Link>
            </li>
          </ul>
        </nav>
        <div className="lg:hidden flex items-center justify-end w-full">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <img src="/menu.svg" alt="menu icon" />
          </button>
        </div>
      </div>
      <div
        className={`fixed top-0 right-0 h-full bg-white transition-transform transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden z-20 w-full p-12 shadow-lg`}
      >
        <div className="flex justify-between items-baseline">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            <img src="/loadoff.svg" alt="loadoffロゴ" />
          </Link>
          <button onClick={() => setMenuOpen(false)}>
            <img src="/close.svg" alt="close menu" />
          </button>
        </div>
        <nav className="flex flex-col justify-between py-12 h-full">
          <div>
            <ul className="flex flex-col gap-4 text-2xl">
              <li>
                <Link
                  to="/about"
                  className={`${currentPath === "/about" ? "underline" : ""}`}
                  onClick={() => setMenuOpen(false)}
                >
                  about
                </Link>
              </li>
              <li>
                <Link
                  to="/service"
                  className={`${currentPath === "/service" ? "underline" : ""}`}
                  onClick={() => setMenuOpen(false)}
                >
                  service
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={`${currentPath === "/contact" ? "underline" : ""}`}
                  onClick={() => setMenuOpen(false)}
                >
                  contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="mt-auto">
            <div className="text-xs">
              Soshigaya-okura Tokyo, JPN 時間
            </div>
            <div className="flex items-center justify-between pt-10">
              <ul className="flex gap-2">
                <li>
                  <Link
                    to="https://x.com/LoadoffI"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMenuOpen(false)}
                  >
                    <img src="/x.svg" alt="x link" />
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://www.instagram.com/loadoffinc?igsh=MXVpeGpoZ2tuNjhrNA=="
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMenuOpen(false)}
                  >
                    <img src="/instagram.svg" alt="instagram link" />
                  </Link>
                </li>
              </ul>
              <div className="w-28 text-center border rounded-full border-org-black">
                <Link to="/recruit" onClick={() => setMenuOpen(false)}>
                  recruit
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

