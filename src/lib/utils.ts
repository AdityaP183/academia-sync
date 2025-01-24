import { ChartConfig } from "@/components/ui/chart";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const getChartConfig = (names: string[]): ChartConfig => {
	// Check if the number of names exceeds 5
	if (names.length > 5) {
		throw new Error("The function cannot take more than 5 names.");
	}

	// Define the colors corresponding to each chart
	const colors: string[] = [
		"hsl(var(--chart-1))",
		"hsl(var(--chart-2))",
		"hsl(var(--chart-3))",
		"hsl(var(--chart-4))",
		"hsl(var(--chart-5))",
	];

	// Create the chart configuration object
	const chartConfig: ChartConfig = {};

	// Loop through the names and populate the chartConfig
	names.forEach((name, index) => {
		chartConfig[name.toLowerCase()] = {
			label: name,
			color: colors[index],
		};
	});

	return chartConfig;
};
