"use client";

import { Button } from "@/components/ui/button";
import { ITEM_PER_PAGE } from "@/lib/utils";
import { useRouter } from "next/navigation";

export default function TablePagination({
	dataLength,
	totalCount,
	currentPage,
}: {
	dataLength: number;
	totalCount: number;
	currentPage: number;
}) {
	const router = useRouter();
	const hasPrevPage = ITEM_PER_PAGE * (currentPage - 1) > 0;
	const hasNextPage =
		ITEM_PER_PAGE * (currentPage - 1) + ITEM_PER_PAGE < totalCount;

	const handlePageChange = (newPage: number) => {
		const params = new URLSearchParams(window.location.search);
		params.set("page", newPage.toString());
		router.push(`${window.location.pathname}?${params}`);
	};

	return (
		<div className="flex flex-1 flex-row items-center justify-between">
			<p className="text-muted-foreground">
				Showing {dataLength} of {totalCount} results
			</p>
			<div className="flex items-center gap-2">
				<Button
					variant={"outline"}
					disabled={!hasPrevPage}
					onClick={() => handlePageChange(currentPage - 1)}
				>
					Prev
				</Button>
				<Button
					variant={"outline"}
					disabled={!hasNextPage}
					onClick={() => handlePageChange(currentPage + 1)}
				>
					Next
				</Button>
			</div>
		</div>
	);
}
