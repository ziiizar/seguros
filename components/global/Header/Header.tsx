import { routes } from "@/constants/routes";
import { cn } from "@/lib/utils";
import { auth } from "@/auth";
import { Button } from "@/components/ui/Button";
import HeaderLinks from "./HeaderLinks"; 
import Logo from "@/Icons/Logo";
import Link from "next/link";

const Header = async ({ className }: { className?: string }) => {
  const session = await auth();

  return (
    <header
      className={cn(
        "flex items-center place-content-center py-8 px-4 md:px-20 h-[10dvh] sm:-ms-8", 
        session?.user?.role === "ADMIN" && "justify-between",
        className
      )}
    >
      {session?.user?.role === "ADMIN" && <Logo className="fill-salmon-600"></Logo>}

      <nav className="flex gap-12">
        {!session && <Logo className="fill-salmon-600"></Logo>}
        <HeaderLinks />
      </nav>

      <div className="max-sm:relative">
        {session?.user.role && session?.user.role === "ADMIN" && (
          
            <Link href={routes.admin}> <Button 
            className="w-32 
                      max-sm:fixed 
                      max-sm:bottom-4 
                      max-sm:right-4 
                      max-sm:w-14 
                      max-sm:h-14 
                      max-sm:rounded-full 
                      max-sm:z-50
                      max-sm:p-0"
          > <span className="max-sm:hidden block text-lg">Admin</span>
            <span className="hidden max-sm:block text-lg">⚙️</span>
          </Button></Link>
        )}
      </div>
    </header>
  );
};
export default Header;