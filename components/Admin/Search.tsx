"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { ClientStatus } from "@prisma/client";

export default function Search() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleStatusChange = (term: string) => {
    const params = new URLSearchParams(searchParams);

    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    term && term !== "All" ? params.set("status", term) : params.delete("status");

    replace(`${pathname}?${params.toString()}`);
  };

  const handleDateChange = (term: string) => {
    const params = new URLSearchParams(searchParams);

    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    term ? params.set("createdAt", term) : params.delete("createdAt");

    replace(`${pathname}?${params.toString()}`);
  };

  // Calcular fechas relativas
  const getRelativeDate = (days: number) => {
    const date = new Date();
    date.setDate(date.getDate() - days);
    return date.toISOString(); // Convertir a formato ISO para compatibilidad con el backend
  };

  return (
    <div className="relative flex flex-shrink-0 place-content-end gap-4 mb-2">
      <Select onValueChange={handleStatusChange}>
        <SelectTrigger className="w-40">
          <SelectValue placeholder={"Select Status"}></SelectValue>
        </SelectTrigger>
        <SelectContent className="text-black">
          <SelectItem className="flex" key={1} value={"All"}>
            All Leads
          </SelectItem>
          <SelectItem key={2} value={ClientStatus.NEW}>
            {ClientStatus.NEW}
          </SelectItem>
          <SelectItem key={3} value={ClientStatus.CONTACTED}>
            {ClientStatus.CONTACTED}
          </SelectItem>
          <SelectItem key={4} value={ClientStatus.REJECTED}>
            {ClientStatus.REJECTED}
          </SelectItem>
          <SelectItem key={5} value={ClientStatus.ENROLLED}>
            {ClientStatus.ENROLLED}
          </SelectItem>
        </SelectContent>
      </Select>

      <Select onValueChange={handleDateChange}>
        <SelectTrigger className="w-40">
          <SelectValue placeholder={"From:"}></SelectValue>
        </SelectTrigger>
        <SelectContent className="text-black">
          <SelectItem key={1} value={"All"}>
            Anytime
          </SelectItem>
          <SelectItem key={2} value={getRelativeDate(1)}>
            1 Day ago
          </SelectItem>
          <SelectItem key={3} value={getRelativeDate(7)}>
            1 Week ago
          </SelectItem>
          <SelectItem key={4} value={getRelativeDate(14)}>
            2 Weeks ago
          </SelectItem>
          <SelectItem key={5} value={getRelativeDate(30)}>
            1 Month ago
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
