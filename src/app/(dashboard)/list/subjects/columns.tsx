"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";

export type SubjectColumn = {
	id: number;
	name: string;
	_count: {
		teachers: number;
		lessons: number;
	};
};

export const columns: ColumnDef<SubjectColumn>[] = [
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
		header: "Subject ID",
	},
	{
		accessorKey: "name",
		header: "Name",
	},
	{
		accessorKey: "_count.teachers",
		header: "Total Teachers",
	},
	{
		accessorKey: "_count.lessons",
		header: "Total Lessons",
	},
];
