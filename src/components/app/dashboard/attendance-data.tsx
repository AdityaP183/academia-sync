"use client";

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart";
import { getChartConfig } from "@/lib/utils";
import { Bar, BarChart, CartesianGrid, Legend, XAxis } from "recharts";

const data = [
	{
		name: "Mon",
		present: 60,
		absent: 40,
	},
	{
		name: "Tue",
		present: 70,
		absent: 60,
	},
	{
		name: "Wed",
		present: 90,
		absent: 75,
	},
	{
		name: "Thu",
		present: 90,
		absent: 75,
	},
	{
		name: "Fri",
		present: 65,
		absent: 55,
	},
];

export default function AttendanceData() {
	const chartConfig = getChartConfig(["Present", "Absent"]);

	return (
		<Card>
			<CardHeader>
				<CardTitle className="text-2xl">Attendances</CardTitle>
				<CardDescription>
					The number of present and absent students this week
				</CardDescription>
			</CardHeader>
			<CardContent>
				<ChartContainer
					config={chartConfig}
					className="w-full h-full mx-auto aspect-square max-h-[350px]"
				>
					<BarChart accessibilityLayer data={data}>
						<CartesianGrid vertical={false} />
						<Legend wrapperStyle={{ fontSize: "16px" }} />
						<XAxis dataKey="name" />
						<ChartTooltip
							cursor={true}
							content={<ChartTooltipContent />}
						/>
						<Bar
							dataKey="present"
							fill="var(--color-present)"
							radius={5}
							width={5}
						/>
						<Bar
							dataKey="absent"
							fill="var(--color-absent)"
							radius={5}
						/>
					</BarChart>
				</ChartContainer>
			</CardContent>
		</Card>
	);
}
