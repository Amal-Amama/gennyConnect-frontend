import Link from "next/link";

const NavLinks = ({ title, path }: { title: string; path: string }) => {
  if (path === "/login") {
    <li>
      <Link href="/login">{title}</Link>
    </li>;
  }
  return (
    <li className={path !== "/login" ? "navlink" : "login_style"}>
      <a href={path}>{title}</a>
      hh
    </li>
  );
};

export default NavLinks;
