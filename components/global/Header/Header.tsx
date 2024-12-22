import Link from "next/link";
import { routes } from "@/constants/routes";
const Header = async () => {
  return (
    <header className="justify-between flex place-content-center items-center py-4 px-8 h-[10dvh] backdrop-blur-sm ">
      <picture>
        {/* Logo can go here */}
      </picture>
      
      <nav>
        <ul className="flex gap-8">
          <li>
            <Link 
              href={routes.home}
              className="relative text-lg font-medium text-black hover:text-salmon-600 transition-colors duration-200
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
              className="relative text-lg font-medium text-black hover:text-salmon-600 transition-colors duration-200
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
              className="relative text-lg font-medium text-black hover:text-salmon-600 transition-colors duration-200
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
      <div className="w-[100px]" />
    </header>
  );
};
export default Header;
