import {type ClassValue, clsx} from "clsx";
import {twMerge} from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function sleep(delay: number = 500) {
  return new Promise((resolve) => setTimeout(resolve, delay));
}
