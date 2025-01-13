import { routes } from "@/constants/routes";
import { cn } from "@/lib/utils";
import { auth } from "@/auth";
import { Button } from "@/components/ui/Button";
import HeaderLinks from "./HeaderLinks"; 

const Header = async ({ className }: { className?: string }) => {
  const session = await auth();

  return (
    <header
      className={cn(
        "justify-between flex items-center py-4 px-8 h-[10dvh]",
        className
      )}
    >
      <picture>
        {/* <Logo></Logo> */}
        <div className="size-4"></div>
      </picture>

      <nav>
        <HeaderLinks />
      </nav>

      <div className="">
        {session?.user.role && session?.user.role === "ADMIN" && (
          <Button>
            <a href={routes.admin}>Admin</a>
          </Button>
        )}
      </div>
    </header>
  );
};

export default Header;
