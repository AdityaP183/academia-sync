import { Skeleton } from "@/components/ui/skeleton";

export default function LoadingSkeleton({
	skeletonFor = "",
}: {
	skeletonFor: "user" | "";
}) {
	switch (skeletonFor) {
		case "user":
			return (
				<div className="flex items-center gap-2">
					<Skeleton className="h-10 w-10 rounded-full" />
					<div>
						<Skeleton className="w-[120px] h-2" />
						<Skeleton className="w-20 h-2" />
					</div>
				</div>
			);
		default:
			return null;
	}
}
