"use client";

import { Assignment, Exam, Result, Student } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";

export type ResultColumn = Result & {
	student: Pick<Student, "id" | "firstName" | "lastName">;
} & {
	exam: Pick<Exam, "id" | "title">;
} & {
	assignment: Pick<Assignment, "id" | "title">;
};

export const columns: ColumnDef<ResultColumn>[] = [
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
		header: "Result ID",
	},
	{
		accessorKey: "score",
		header: "Score",
	},
	{
		accessorKey: "student",
		header: "Student",
		cell: ({ row }) =>
			`${row.original.student.firstName} ${row.original.student.lastName}`,
	},
	{
		accessorKey: "exam",
		header: "Exam",
		cell: ({ row }) =>
			row.original.exam ? row.original.exam.title : "N/A",
	},
	{
		accessorKey: "assignment",
		header: "Assignment",
		cell: ({ row }) =>
			row.original.assignment ? row.original.assignment.title : "N/A",
	},
];
