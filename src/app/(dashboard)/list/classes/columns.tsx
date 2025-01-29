"use client";

import { Eye, MoreHorizontal } from "lucide-react";
import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export type ClassColumn = {
	id: number;
	name: string;
	supervisor: {
		id: string;
		firstName: string;
		lastName: string;
	} | null;
	_count: {
		lessons: number;
		students: number;
	};
};

export const columns: ColumnDef<ClassColumn>[] = [
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
		header: "Class ID",
	},
	{
		accessorKey: "name",
		header: "Class Name",
	},
	{
		accessorKey: "supervisor",
		header: "Supervisor",
		cell: ({ row }) => {
			const supervisor = row.original.supervisor;

			return (
				<div className="flex flex-col">
					<div>{`${supervisor?.firstName} ${supervisor?.lastName}`}</div>
				</div>
			);
		},
	},
	{
		accessorKey: "_count.lessons",
		header: "Lesson(s)",
		cell: ({ row }) => row.original._count.lessons,
	},
	{
		accessorKey: "_count.students",
		header: "Student(s)",
		cell: ({ row }) => row.original._count.students,
	},
	{
		id: "actions",
		header: "Actions",
		cell: () => {
			return (
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="ghost" className="h-8 w-8 p-0">
							<span className="sr-only">Open menu</span>
							<MoreHorizontal className="h-4 w-4" />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end">
						<DropdownMenuLabel>Actions</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuItem>
							<Eye className="mr-2 h-4 w-4" />
							View
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			);
		},
	},
];
