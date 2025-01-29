import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export default async function AttendancePage({
	searchParams,
}: {
	searchParams: { [key: string]: string | string[] | undefined };
}) {
	return (
		<Card className="border-none">
			<CardHeader className="flex-row justify-between">
				<CardTitle className="text-2xl">All Teachers</CardTitle>
			</CardHeader>
			<CardContent></CardContent>
			<CardFooter></CardFooter>
		</Card>
	);
}
