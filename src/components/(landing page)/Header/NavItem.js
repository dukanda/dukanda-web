import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavItem = ({ navItem = {} }) => {
  const pathname = usePathname();

  // console.log("pathname", pathname);

  const { name, href, subNavItems } = navItem;
  const subHref = subNavItems.map((item) => item.href);
  const current = pathname === href || subHref.includes(pathname);

  return (
    <li className={`dropdown${current ? " current" : ""}`}>
      <Link href={href} legacyBehavior>
        <a href={href}>{name}</a>
      </Link>
      <ul>
        {subNavItems.map((subItem) => (
          <li
            className={subItem.subItems?.length ? "dropdown" : ""}
            key={subItem.id}
          >
            <Link href={subItem.href} legacyBehavior>
              <a href={href}>{subItem.name}</a>
            </Link>
            <ul>
              {subItem.subItems?.map((item) => (
                <li key={item.id}>
                  <Link href={item.href} legacyBehavior>
                    <a href={href}>{item.name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default NavItem;
