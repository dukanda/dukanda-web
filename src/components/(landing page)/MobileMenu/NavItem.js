"use client";
import Link from "next/link";
import React, { useState } from "react";
import SubNavItem from "./SubNavItem";
import { usePathname } from "next/navigation";

const NavItem = ({ item = {}, onClick }) => {
  const pathname = usePathname();
  const [expand, setExpand] = useState(false);

  const handleExpand = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setExpand((preExpand) => !preExpand);
  };

  const { name, href, subNavItems } = item;

  return (
    <li className={`dropdown${pathname === href ? " current" : ""}`}>
      <Link href={href} legacyBehavior>
        <a
          className={expand ? " expanded" : ""}
          onClick={() => {
            if (!subNavItems.length) onClick(); // Fecha o menu se não houver submenu
          }}
        >
          {name}
          {subNavItems.length > 0 && (
            <button
              onClick={handleExpand}
              aria-label="dropdown toggler"
              className={expand ? "expanded" : ""}
            >
              <i className="fa fa-angle-down"></i>
            </button>
          )}
        </a>
      </Link>
      <ul style={{ display: expand ? "block" : "none" }}>
        {subNavItems.map((subItem) => (
          <SubNavItem subItem={subItem} key={subItem.id} />
        ))}
      </ul>
    </li>
  );
};

export default NavItem;
