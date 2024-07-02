import { Link } from "@remix-run/react";

export default function Header() {
  return (
    <header className="p-12 flex fixed z-10 top-0 left-0 w-full">
      <div className="flex items-baseline justify-between w-full">
        <Link to="/">
          <img src="/loadoff.svg" alt="loadoffロゴ" />
        </Link>
        <nav className="flex justify-between w-full pl-12">
          <ul className="flex gap-12 text-2xl">
            <li>
              <Link to="/about">about</Link>
            </li>
            <li>
              <Link to="/service">service</Link>
            </li>
            <li>
              <Link to="/contact">contact</Link>
            </li>
          </ul>
          <ul className="flex gap-7 text-2xl">
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
      </div>
    </header>
  );
}
