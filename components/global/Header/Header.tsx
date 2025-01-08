import Link from "next/link";
import { routes } from "@/constants/routes";
import { cn } from "@/lib/utils";
import { auth } from "@/auth";
import { Button } from "@/components/ui/Button";

const Header = async ({className}: {className?:string}) => {

  const session = await auth()
  return (
    <header className={cn("justify-between flex  items-center py-4 px-8 h-[10dvh]  ", className)}>
      <picture>
        <div className="size-4"></div>
      </picture>
      
      <nav>
        <ul className="flex gap-8">
          <li>
            <Link 
              href={routes.home}
              className="relative text-lg font-medium  hover:text-salmon-600 transition-colors duration-200
                after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 
                after:bottom-0 after:left-0 after:bg-salmon-600 after:origin-bottom-right 
                after:transition-transform after:duration-300 hover:after:scale-x-100 
                hover:after:origin-bottom-left"
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              href={routes.services}
              className="relative text-lg font-medium  hover:text-salmon-600 transition-colors duration-200
                after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 
                after:bottom-0 after:left-0 after:bg-salmon-600 after:origin-bottom-right 
                after:transition-transform after:duration-300 hover:after:scale-x-100 
                hover:after:origin-bottom-left"
            >
              Services
            </Link>
          </li>
          <li>
            <Link 
              href={routes.aboutUs}
              className="relative text-lg font-medium  hover:text-salmon-600 transition-colors duration-200
                after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 
                after:bottom-0 after:left-0 after:bg-salmon-600 after:origin-bottom-right 
                after:transition-transform after:duration-300 hover:after:scale-x-100 
                hover:after:origin-bottom-left"
            >
              About Us
            </Link>
          </li>
        </ul>
      </nav>
      {/* Right side space reserved for future components */}
      <div className="">{session?.user.role && session?.user.role === "ADMIN" && <Button><Link href={routes.admin}>Admin</Link></Button>}</div>
      
      
    </header>
  );
};
export default Header;
