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

const getLatestMonday = (): Date => {
	const today = new Date();
	const dayOfWeek = today.getDay();
	const daysSinceMonday = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
	const latestMonday = today;
	latestMonday.setDate(today.getDate() - daysSinceMonday);
	return latestMonday;
};

export const adjustScheduleToCurrentWeek = (
	lessons: { title: string; start: Date; end: Date }[]
): { title: string; start: Date; end: Date }[] => {
	const latestMonday = getLatestMonday();

	return lessons.map((lesson) => {
		const lessonDayOfWeek = lesson.start.getDay();

		const daysFromMonday = lessonDayOfWeek === 0 ? 6 : lessonDayOfWeek - 1;

		const adjustedStartDate = new Date(latestMonday);

		adjustedStartDate.setDate(latestMonday.getDate() + daysFromMonday);
		adjustedStartDate.setHours(
			lesson.start.getHours(),
			lesson.start.getMinutes(),
			lesson.start.getSeconds()
		);
		const adjustedEndDate = new Date(adjustedStartDate);
		adjustedEndDate.setHours(
			lesson.end.getHours(),
			lesson.end.getMinutes(),
			lesson.end.getSeconds()
		);

		return {
			title: lesson.title,
			start: adjustedStartDate,
			end: adjustedEndDate,
		};
	});
};

export const ITEM_PER_PAGE = 10;

type RouteAccessMap = {
	[key: string]: string[];
};

export const routeAccessMap: RouteAccessMap = {
	"/admin(.*)": ["admin"],
	"/student(.*)": ["student"],
	"/teacher(.*)": ["teacher"],
	"/parent(.*)": ["parent"],
	"/list/teachers": ["admin", "teacher"],
	"/list/students": ["admin", "teacher"],
	"/list/parents": ["admin", "teacher"],
	"/list/subjects": ["admin"],
	"/list/classes": ["admin", "teacher"],
	"/list/exams": ["admin", "teacher", "student", "parent"],
	"/list/assignments": ["admin", "teacher", "student", "parent"],
	"/list/results": ["admin", "teacher", "student", "parent"],
	"/list/attendance": ["admin", "teacher", "student", "parent"],
	"/list/events": ["admin", "teacher", "student", "parent"],
	"/list/announcements": ["admin", "teacher", "student", "parent"],
};
