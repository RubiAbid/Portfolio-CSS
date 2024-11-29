import React from "react";
import NavLink from "./NavLink";

// Define the type for a single link
interface LinkItem {
  path: string;
  title: string;
}

// Define the type for the props
interface MenuOverlayProps {
  links: LinkItem[];
}

const MenuOverlay: React.FC<MenuOverlayProps> = ({ links }) => {
  return (
    <ul className="menu-overlay">
      {links.map((link: LinkItem, index: number) => (
        <li key={index} className="menu-item">
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
