import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import axios from 'axios'
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}



export const axiosInstance = axios.create({
  baseURL: "https://api.typeform.com/",
  withCredentials: true,
  
  
});