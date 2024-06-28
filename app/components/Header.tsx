import { Link } from "@remix-run/react";

export default function Header() {
  return (
    <nav className="p-4 flex items-baseline">
      <div className="text-4xl">
        <Link to="/">loadoff</Link>
      </div>
      <ul className="flex gap-4 text-2xl pl-4">
        <li>
          <Link to="/about">about</Link>
        </li>
        <li>
          <Link to="/service">service</Link>
        </li>
        <li>
          <Link to="/contact">contact</Link>
        </li>
        <li>
          <Link
            to="https://x.com/LoadoffI"
            target="_black"
            rel="noopener noreferrer"
          >
            x
          </Link>
        </li>
        <li>
          <Link
            to="https://www.instagram.com/loadoffinc?igsh=MXVpeGpoZ2tuNjhrNA=="
            target="_blank"
            rel="noopener noreferrer"
          >
            instagram
          </Link>
        </li>
        <li>
          <Link to="/recruit">recruit</Link>
        </li>
      </ul>
    </nav>
  );
}
