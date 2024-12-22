import { cn } from "@/lib/utils";

function Arrow({className}:{className: string}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
      className={cn("", className)}
      height={20}
      width={20}
        fill="#000"
        fillRule="evenodd"
        d="M12 3a1 1 0 01.707.293l7 7a1 1 0 01-1.414 1.414L13 6.414V20a1 1 0 11-2 0V6.414l-5.293 5.293a1 1 0 01-1.414-1.414l7-7A1 1 0 0112 3z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Arrow;
