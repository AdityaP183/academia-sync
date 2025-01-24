"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart";
import { getChartConfig } from "@/lib/utils";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

const data = [
	{
		month: "Jan",
		income: 4000,
		expense: 2400,
	},
	{
		month: "Feb",
		income: 3000,
		expense: 1398,
	},
	{
		month: "Mar",
		income: 2000,
		expense: 9800,
	},
	{
		month: "Apr",
		income: 2780,
		expense: 3908,
	},
	{
		month: "May",
		income: 1890,
		expense: 4800,
	},
	{
		month: "Jun",
		income: 2390,
		expense: 3800,
	},
	{
		month: "Jul",
		income: 3490,
		expense: 4300,
	},
	{
		month: "Aug",
		income: 3490,
		expense: 4300,
	},
	{
		month: "Sep",
		income: 3490,
		expense: 4300,
	},
	{
		month: "Oct",
		income: 3490,
		expense: 4300,
	},
	{
		month: "Nov",
		income: 3490,
		expense: 4300,
	},
	{
		month: "Dec",
		income: 3490,
		expense: 4300,
	},
];

export default function FinanceChart() {
	const chartConfig = getChartConfig(["Income", "Expense"]);
	return (
		<Card className="h-[500px]">
			<CardHeader>
				<CardTitle className="text-2xl">Finance</CardTitle>
			</CardHeader>
			<CardContent>
				<ChartContainer
					config={chartConfig}
					className="w-full h-[400px]"
				>
					<LineChart
						accessibilityLayer
						data={data}
						margin={{
							left: 12,
							right: 12,
						}}
					>
						<CartesianGrid vertical={false} />
						<XAxis
							dataKey="month"
							tickLine={false}
							axisLine={false}
							tickMargin={8}
							tickFormatter={(value) => value.slice(0, 3)}
						/>
						<ChartTooltip
							cursor={false}
							content={<ChartTooltipContent />}
						/>
						<Line
							dataKey="income"
							type="monotone"
							stroke="var(--color-income)"
							strokeWidth={2}
							dot={false}
						/>
						<Line
							dataKey="expense"
							type="monotone"
							stroke="var(--color-expense)"
							strokeWidth={2}
							dot={false}
						/>
					</LineChart>
				</ChartContainer>
			</CardContent>
		</Card>
	);
}
