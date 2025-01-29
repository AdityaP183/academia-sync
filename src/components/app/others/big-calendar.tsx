"use client";

import { Calendar, momentLocalizer, View, Views } from "react-big-calendar";
import moment from "moment";
import { useMemo, useState } from "react";
import "./big-calendar.css";

const localizer = momentLocalizer(moment);

export default function BigCalendar({
	data,
}: {
	data: { title: string; start: Date; end: Date }[];
}) {
	const [view, setView] = useState<View>(Views.WORK_WEEK);

	const handleOnChangeView = (selectedView: View) => {
		setView(selectedView);
	};

	// Transform the data to use Date objects
	const events = useMemo(() => {
		return data.map((event) => ({
			...event,
			start: new Date(event.start),
			end: new Date(event.end),
		}));
	}, [data]);

	return (
		<Calendar
			localizer={localizer}
			events={events}
			startAccessor="start"
			endAccessor="end"
			views={["work_week", "day"]}
			view={view}
			style={{ height: "100%" }}
			onView={handleOnChangeView}
			min={new Date(2025, 1, 0, 8, 0, 0)}
			max={new Date(2025, 1, 0, 17, 0, 0)}
		/>
	);
}
