import DataTable from "@/components/app/others/data-table";
import TableFilters from "@/components/app/others/table-filters";
import TablePagination from "@/components/app/others/table-pagination";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import prisma from "@/lib/prisma";
import { ITEM_PER_PAGE } from "@/lib/utils";
import { columns } from "./columns";

export default async function StudentsPage({
	searchParams,
}: {
	searchParams: { [key: string]: string | string[] | undefined };
}) {
	const { page } = await searchParams;
	const currentPage = page ? Number(page) : 1;

	const [data, count] = await prisma.$transaction([
		prisma.student.findMany({
			include: {
				grade: true,
				parent: true,
			},
			take: ITEM_PER_PAGE,
			skip: ITEM_PER_PAGE * (currentPage - 1),
		}),
		prisma.student.count(),
	]);

	return (
		<Card className="border-none">
			<CardHeader className="flex-row justify-between">
				<CardTitle className="text-2xl">All Teachers</CardTitle>
				<TableFilters />
			</CardHeader>
			<CardContent>
				<DataTable columns={columns} data={data} />
			</CardContent>
			<CardFooter>
				<TablePagination
					totalCount={count}
					currentPage={currentPage}
					dataLength={data.length}
				/>
			</CardFooter>
		</Card>
	);
}
