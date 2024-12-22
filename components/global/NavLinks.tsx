"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Links } from "@/types/links";



const NavLinks = ({links}: {links:Links[]}) => {
  const pathname = usePathname();

  return (
    <ul className="flex flex-col gap-8">
      {links.map((link, index) => {
        const LinkIcon = link.icon;
        // const ColoredIcon = link.coloredIcon;
        return(
          <li key={index}> <Link
          
          href={link.href}
          className={cn('flex gap-2 items-center h-10 p-2 rounded-s-full ps-5  hover:underline  transition-all text-white', (link.href === pathname || pathname.startsWith(link.href)) && ' text-rajah-500' )}
        >
            {link.href === pathname || pathname.startsWith(link.href) ? <LinkIcon color={'#ed8422'}></LinkIcon>: 
            <LinkIcon  color={'white'}></LinkIcon>}
          
          <span>{link.name}</span>
        </Link></li>
       
        )
      })}
    </ul>
  );
};

export default NavLinks;
