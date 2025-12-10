'use client';
import Link from "next/link";
import { useState } from "react";

type MenuItem = {
  name: string;
  url: string;
};

type Props = {
  menuItems: MenuItem[];
};

export default function NavBar({ menuItems }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="menu-container">
        <button className="menu-btn" onClick={toggleMenu}>
            <span className="block w-6 h-1 bg-black"></span>
            <span className="block w-6 h-1 bg-black"></span>
            <span className="block w-6 h-1 bg-black"></span>
        </button>
        <div className={`menu ${isOpen ? "open" : ""}`}>
          <ul>
            {menuItems.map((item, index) => (
              <li key={index} onClick={closeMenu} className="rounded-xl">
                <div className="icon flex items-center">
                  <Link href={item.url} className="flex items-center w-full h-full p-4">
                    <span className="text ml-2">{item.name}</span>
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}