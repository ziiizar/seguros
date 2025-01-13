// CustomCard.tsx
import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/Button";
import { ChevronRightIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface CustomCardProps {
  title: string | React.ReactNode;
  description: string | React.ReactNode;
  className?: string;
  onCancel?: () => void;
  onAccept?: () => void;
  children: React.ReactNode;
}

const SurveyCard: React.FC<CustomCardProps> = ({
  title,
  description,
  className,
  onCancel,
  onAccept,
  children,

}) => {
  return (
    <Card className={cn("lg:w-[500px] w-[350px] min-h-[500px] shadow-lg bg-white/95 backdrop-blur transition-all duration-300 hover:shadow-xl border border-gray-200 flex flex-col  ", className)}>
      <CardHeader className=" p-0 px-5 pt-5 justify-between mt-2">
        <CardTitle className="text-2xl font-bold text-salmon-600 text-start ">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col p-5 flex-grow mb-4">{children}</CardContent>
      {(onCancel || onAccept) && <CardFooter className="pt-5 px-5 pb-6 border-t border-gray-300 place-content-end">
        {onCancel && (
          <Button
            className="text-lg px-4 py-4 hover:bg-salmon-200 transition-colors rounded-md h-10 w-28"
            variant={"ghost"}
            onClick={onCancel}
          >
            Cancel
          </Button>
        )}
        {onAccept && (
          <Button
            className="text-lg px-4 py-4 bg-salmon-600 hover:bg-salmon-700 transition-colors ml-auto rounded-md h-10 w-28 flex justify-between"
            onClick={onAccept}
          >
            <span className="text-sm">Next</span>
            <ChevronRightIcon />
          </Button>
        )}
      </CardFooter>}
      
    </Card>
  );
};

export default SurveyCard;
