"use client";

import { Lesson } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";

export type ParentColumn = Lesson & {
	subject: {
		id: number;
		name: string;
	};
	class: {
		id: number;
		name: string;
	};
	teacher: {
		id: string;
		firstName: string;
		lastName: string;
	};
};

export const columns: ColumnDef<ParentColumn>[] = [
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
		header: "Lesson's ID",
	},
	{
		accessorKey: "name",
		header: "Name",
	},
	{
		accessorKey: "day",
		header: "Day",
		cell: ({ row }) => (
			<span className="capitalize">{row.original.day}</span>
		),
	},
	{
		accessorKey: "startTime",
		header: "Start's At",
		cell: ({ row }) => row.original.startTime.toLocaleTimeString(),
	},
	{
		accessorKey: "endTime",
		header: "End's At",
		cell: ({ row }) => row.original.endTime.toLocaleTimeString(),
	},
	{
		accessorKey: "class",
		header: "Class",
		cell: ({ row }) => row.original.class.name,
	},
	{
		accessorKey: "subject",
		header: "Subject",
		cell: ({ row }) => row.original.subject.name,
	},
	{
		accessorKey: "teacher",
		header: "Teacher",
		cell: ({ row }) =>
			`${row.original.teacher.firstName} ${row.original.teacher.lastName}`,
	},
];
