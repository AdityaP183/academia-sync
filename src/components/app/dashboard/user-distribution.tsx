"use client";

import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart";
import { getChartConfig } from "@/lib/utils";
import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts";

export default function UserDistribution() {
	const chartData = [{ name: "total-users", boys: 40, girls: 10 }];
	const totalVisitors = chartData[0].boys + chartData[0].girls;
	const chartConfig = getChartConfig(["Boys", "Girls"]);

	return (
		<Card className="h-full">
			<CardHeader>
				<CardTitle className="text-2xl">Students</CardTitle>
			</CardHeader>
			<CardContent>
				<ChartContainer
					config={chartConfig}
					className="mx-auto aspect-square w-full max-w-[250px]"
				>
					<RadialBarChart
						data={chartData}
						endAngle={360}
						innerRadius={80}
						outerRadius={140}
					>
						<ChartTooltip
							cursor={false}
							content={<ChartTooltipContent hideLabel />}
						/>
						<PolarRadiusAxis
							tick={false}
							tickLine={false}
							axisLine={false}
						>
							<Label
								content={({ viewBox }) => {
									if (
										viewBox &&
										"cx" in viewBox &&
										"cy" in viewBox
									) {
										return (
											<text
												x={viewBox.cx}
												y={viewBox.cy}
												textAnchor="middle"
											>
												<tspan
													x={viewBox.cx}
													dy={0}
													className="fill-foreground text-2xl font-bold"
												>
													{totalVisitors.toLocaleString()}
												</tspan>
												<tspan
													x={viewBox.cx}
													dy={25}
													className="fill-muted-foreground"
												>
													Users
												</tspan>
											</text>
										);
									}
								}}
							/>
						</PolarRadiusAxis>
						<RadialBar
							dataKey="boys"
							stackId="a"
							cornerRadius={5}
							fill="var(--color-boys)"
							className="stroke-transparent stroke-2"
						/>
						<RadialBar
							dataKey="girls"
							fill="var(--color-girls)"
							stackId="a"
							cornerRadius={5}
							className="stroke-transparent stroke-2"
						/>
					</RadialBarChart>
				</ChartContainer>
			</CardContent>
			<CardFooter className="flex justify-center items-center flex-col">
				<div className="flex items-center gap-4">
					{Object.values(chartConfig).map((item) => (
						<div
							key={`${item.label}-item`}
							className="flex items-center gap-2"
						>
							<div
								className="w-5 h-5 rounded-lg"
								style={{ background: item.color }}
							/>
							<span>{item.label}</span>
						</div>
					))}
				</div>
			</CardFooter>
		</Card>
	);
}
