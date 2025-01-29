"use client";

import { Assignment, Lesson } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";

export type ExamColumn = Assignment & {
	lesson: Pick<Lesson, "id" | "name">;
};

export const columns: ColumnDef<ExamColumn>[] = [
	{
		id: "select",
		header: ({ table }) => (
			<Checkbox
				checked={
					table.getIsAllPageRowsSelected() ||
					(table.getIsSomePageRowsSelected() && "indeterminate")
				}
				onCheckedChange={(value) =>
					table.toggleAllPageRowsSelected(!!value)
				}
				aria-label="Select all"
				className="border-foreground flex items-center justify-center"
			/>
		),
		cell: ({ row }) => (
			<Checkbox
				checked={row.getIsSelected()}
				onCheckedChange={(value) => row.toggleSelected(!!value)}
				aria-label="Select row"
				className="border-foreground flex items-center justify-center"
			/>
		),
		enableSorting: false,
		enableHiding: false,
	},
	{
		accessorKey: "id",
		header: "Exam ID",
	},
	{
		accessorKey: "title",
		header: "Exam Title",
	},
	{
		accessorKey: "lesson",
		header: "Lesson",
		cell: ({ row }) => row.original.lesson.name,
	},
	{
		accessorKey: "startTime",
		header: "Start's At",
		cell: ({ row }) => row.original.startDate.toDateString(),
	},
	{
		accessorKey: "endTime",
		header: "End's At",
		cell: ({ row }) => row.original.dueDate.toDateString(),
	},
];
