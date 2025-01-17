"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { ClientStatus } from "@prisma/client";

export default function Search() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  // Obtener valores iniciales de los parámetros de la URL
  const statusFromUrl = searchParams.get("status") || "All";

  // Estados locales para valores visibles en el select
  const [dateVisibleValue, setDateVisibleValue] = useState("Anytime");

  const handleStatusChange = (term: string) => {
    const params = new URLSearchParams(searchParams);

    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    term && term !== "All" ? params.set("status", term) : params.delete("status");

    replace(`${pathname}?${params.toString()}`);
  };

  const handleDateChange = (visibleValue: string) => {
    const params = new URLSearchParams(searchParams);

    // Mapear texto visible a valores reales
    const relativeDates: Record<string, string> = {
      "1 Day ago": getRelativeDate(1),
      "1 Week ago": getRelativeDate(7),
      "2 Weeks ago": getRelativeDate(14),
      "1 Month ago": getRelativeDate(30),
      "Anytime": "Anytime",
    };

    const actualValue = relativeDates[visibleValue];

    // Actualizar URL con el valor real
    if (actualValue && actualValue !== "Anytime") {
      params.set("createdAt", actualValue);
    } else {
      params.delete("createdAt");
    }

    replace(`${pathname}?${params.toString()}`);
    setDateVisibleValue(visibleValue); // Actualizar el texto visible del Select
  };

  // Calcular fechas relativas
  const getRelativeDate = (days: number) => {
    const date = new Date();
    date.setDate(date.getDate() - days);
    return date.toISOString(); // Convertir a formato ISO para compatibilidad con el backend
  };

  return (
    <div className="relative flex flex-shrink-0 place-content-end gap-4 mb-2">
      <Select value={statusFromUrl} onValueChange={handleStatusChange}>
        <SelectTrigger className="w-32">
          <SelectValue placeholder="Select Status" />
        </SelectTrigger>
        <SelectContent className="text-black">
          <SelectItem key={1} value="All">
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

      <Select value={dateVisibleValue} onValueChange={handleDateChange}>
        <SelectTrigger className="w-32">
          <SelectValue placeholder="From:" />
        </SelectTrigger>
        <SelectContent className="text-black">
          <SelectItem key={1} value="Anytime">
            Anytime
          </SelectItem>
          <SelectItem key={2} value="1 Day ago">
            1 Day ago
          </SelectItem>
          <SelectItem key={3} value="1 Week ago">
            1 Week ago
          </SelectItem>
          <SelectItem key={4} value="2 Weeks ago">
            2 Weeks ago
          </SelectItem>
          <SelectItem key={5} value="1 Month ago">
            1 Month ago
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
