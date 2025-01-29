import prisma from "@/lib/prisma";
import { columns } from "./columns";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import TableFilters from "@/components/app/others/table-filters";
import { ITEM_PER_PAGE } from "@/lib/utils";
import TablePagination from "@/components/app/others/table-pagination";
import DataTable from "@/components/app/others/data-table";

export default async function TeachersPage({
	searchParams,
}: {
	searchParams: { [key: string]: string | string[] | undefined };
}) {
	const { page } = await searchParams;
	const currentPage = page ? Number(page) : 1;

	const [data, count] = await prisma.$transaction([
		prisma.teacher.findMany({
			include: {
				classes: true,
				subjects: true,
			},
			take: ITEM_PER_PAGE,
			skip: ITEM_PER_PAGE * (currentPage - 1),
		}),
		prisma.teacher.count(),
	]);

	return (
		<Card className="border-none">
			<CardHeader className="flex-row justify-between items-center">
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
