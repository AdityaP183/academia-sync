"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import Calendar from "react-calendar";
import "./calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const events = [
	{
		id: 1,
		title: "Lorem ipsum dolor",
		time: "12:00 PM - 2:00 PM",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
	},
	{
		id: 2,
		title: "Lorem ipsum dolor",
		time: "12:00 PM - 2:00 PM",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
	},
	{
		id: 3,
		title: "Lorem ipsum dolor",
		time: "12:00 PM - 2:00 PM",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
	},
];

export default function EventCalendar() {
	const [value, onChange] = useState<Value>(new Date());

	return (
		<div>
			<Card className="overflow-hidden p-1 bg-secondary">
				<Calendar value={value} onChange={onChange} />
			</Card>

			<div className="flex flex-col gap-3 mt-4">
				<h1 className="text-xl font-semibold">Events</h1>
				{events.map((event) => (
					<Card key={event.id}>
						<CardHeader className="p-2 flex flex-row items-center justify-between">
							<CardTitle>{event.title}</CardTitle>
							<span className="text-sm text-muted-foreground">
								{event.time}
							</span>
						</CardHeader>
						<CardContent className="p-2 font-light">
							{event.description}
						</CardContent>
					</Card>
				))}
			</div>
		</div>
	);
}
