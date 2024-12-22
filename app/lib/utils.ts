import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function classes(...classes: [string, string | undefined]) {
  return classes.filter(Boolean).join(" ");
}

export async function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}