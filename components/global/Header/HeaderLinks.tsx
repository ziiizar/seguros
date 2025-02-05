"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { routes } from "@/constants/routes";
import { cn } from "@/lib/utils";

const HeaderLinks = () => {
  const pathname = usePathname(); // Obtén la ruta actual

  // Function to remove the locale prefix from the pathname
  const removeLocalePrefix = (path: string) => {
    const parts = path.split('/');
    if (parts.length > 1 && (parts[1] === 'en' || parts[1] === 'es')) { // replace 'en' and 'es' with all your locales
      return '/' + parts.slice(2).join('/');
    }
    return path;
  };

  const cleanedPathname = removeLocalePrefix(pathname);

  const links = [
    { label: "Home", href: routes.home },
    { label: "Services", href: routes.services },
    { label: "About Us", href: routes.aboutUs },
  ];

  return (
    <ul className="flex gap-12">
      {links.map(({ label, href }) => (
        <li key={label}>
          <Link
            href={href}
            className={cn(
              "relative text-base md:text-lg font-medium hover:text-salmon-600 transition-colors duration-200 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-salmon-600 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left",
              cleanedPathname === href && "text-salmon-600 "
            )}
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default HeaderLinks;