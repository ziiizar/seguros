"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Links } from "@/types/links";



const NavLinks = ({links}: {links:Links[]}) => {
  const pathname = usePathname();

  return (
    <ul className="flex flex-col gap-8 ps-2">
      {links.map((link, index) => {
        const LinkIcon = link.icon;
        // const ColoredIcon = link.coloredIcon;
        return(
          <li key={index}> <Link
          
          href={link.href}
          className={cn('flex gap-2 items-center h-10 p-2  ps-3  hover:underline  transition-all text-white', (link.href === pathname || pathname.startsWith(link.href)) && 'border-l-2 border-salmon-600 text-salmon-600' )}
        >
            {link.href === pathname || pathname.startsWith(link.href) ? <LinkIcon color={'#ed3e09'}></LinkIcon>: 
            <LinkIcon  color={'white'}></LinkIcon>}
          
          <span>{link.name}</span>
        </Link></li>
       
        )
      })}
    </ul>
  );
};

export default NavLinks;
