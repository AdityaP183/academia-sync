"use client";

import { Card } from "@/components/ui/card";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

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
		<Card className="overflow-hidden p-1">
			<Calendar value={value} onChange={onChange} />
		</Card>
	);
}
