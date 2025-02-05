import { routes } from "@/constants/routes";
import { cn } from "@/lib/utils";
import { auth } from "@/auth";
import { Button } from "@/components/ui/Button";
import HeaderLinks from "./HeaderLinks"; 
import Logo from "@/Icons/Logo";

const Header = async ({ className }: { className?: string }) => {
  const session = await auth();

  return (
    <header
      className={cn(
        " flex items-center place-content-center py-8 px-8 md:px-20 h-[10dvh] -ms-8", session?.user?.role === "ADMIN" && " justify-between",
        className
      )}
    >
      {session?.user?.role === "ADMIN" && <Logo className="fill-salmon-600"></Logo>}

      <nav className="flex gap-12">
        {!session && <Logo className="fill-salmon-600"></Logo>}
        <HeaderLinks />
      </nav>

      <div className="">
        {session?.user.role && session?.user.role === "ADMIN" && (
          <Button className="w-32">
            <a href={routes.admin}>Admin</a>
          </Button>
        )}
      </div>
    </header>
  );
};

export default Header;
