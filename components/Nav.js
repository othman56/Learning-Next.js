import NavStyles from "../styles/Nav.module.css";
import Link from "next/link";
const Nav = () => {
  return (
    <nav className={NavStyles.nav}>
      <ul className={NavStyles.nav.ul}>
        <li>
          <Link href="/about">Sign up</Link>
          <Link href="/Login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
