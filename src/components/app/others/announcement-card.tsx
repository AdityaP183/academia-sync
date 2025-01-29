import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import moment from "moment";

export default function AnnouncementCard({
	data: { title, description, date },
}: {
	data: {
		id: number;
		title: string;
		description: string;
		date: Date;
		classId: number | null;
	};
}) {
	return (
		<Card>
			<CardHeader className="p-2 flex-row items-center justify-between">
				<CardTitle className="capitalize">{title}</CardTitle>
				<Badge variant={"secondary"}>
					{moment(date).format("DD-MM-YYYY")}
				</Badge>
			</CardHeader>
			<CardContent className="p-2">
				<p>{description}</p>
			</CardContent>
		</Card>
	);
}
