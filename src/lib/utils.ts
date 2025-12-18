import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const THEME_COLORS = {
	light: "#f9fafb", // Tailwind gray-50
	dark: "#101828", // Tailwind gray-900
} as const;

export type ThemeColor = keyof typeof THEME_COLORS;
