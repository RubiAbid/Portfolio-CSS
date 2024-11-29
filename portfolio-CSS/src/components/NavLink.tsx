import Link from "next/link";

interface NavLinkProps {
  href: string; // The href prop should be a string
  title: string; // The title prop should also be a string
}

const NavLink: React.FC<NavLinkProps> = ({ href, title }) => {
  return (
    <Link href={href} className="nav-link">
      {title}
    </Link>
  );
};

export default NavLink;
