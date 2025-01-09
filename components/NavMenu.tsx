import Link from "next/link";
const NavMenu = () => {
  return (
    <nav>
      <ul className="nav-items">
        <li>
          <Link href="#home">Home</Link>
        </li>{" "}
        <li>
          <Link href="#about">About</Link>
        </li>{" "}
        <li>
          <Link href="#services">Services</Link>
        </li>{" "}
        <li>
          <Link href="#footer">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
