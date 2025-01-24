import { Card } from "@/components/ui/card";
import { RoleType } from "@/lib/types/component.types";
import clsx from "clsx";

export default function OverviewBox({
	className,
	type = "student",
	count,
}: {
	className?: string;
	type: RoleType;
	count: number;
}) {
	return (
		<Card className={clsx("glass bg-secondary/50", className)}>
			<div className="flex items-start justify-between flex-col p-4">
				<h2 className="capitalize text-sm font-medium text-gray-500">
					{type}s
				</h2>
				<h1 className="text-2xl font-semibold">{count}</h1>
			</div>
		</Card>
	);
}
