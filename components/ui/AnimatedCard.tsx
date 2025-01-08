import { cn } from "@/lib/utils";

interface CardAnimatedProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export const CardAnimated: React.FC<CardAnimatedProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        "group relative grid overflow-hidden rounded-xl px-4 py-5 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200",
        className
      )}
      {...props}
    >
      <span>
        <span className="spark mask-gradient absolute inset-0 h-[100%] w-[100%] overflow-hidden rounded-xl [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:bg-[conic-gradient(from_0deg,transparent_0_340deg,#ED3E09_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%] group-hover:animate-flip before:group-hover:animate-rotate" />
      </span>
      <span className="backdrop absolute inset-[2px] rounded-[11px] bg-zinc-800 transition-colors duration-200" />
      <div className="relative z-10">{children}</div>
    </div>
  );
};
