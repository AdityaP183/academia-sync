import AnnouncementCard from "../others/announcement-card";
import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

export default async function AnnouncementsList() {
	const { userId, sessionClaims } = await auth();
	const role = (sessionClaims?.metadata as { role?: string })?.role;

	const roleConditions = {
		admin: {},
		teacher: {
			lessons: {
				some: { teacherId: userId! },
			},
		},
		student: {
			students: {
				some: { id: userId! },
			},
		},
		parent: {
			students: {
				some: { parentId: userId! },
			},
		},
	};

	const announcements = await prisma.announcement.findMany({
		take: 3,
		orderBy: { date: "desc" },
		where: {
			OR: [
				{ classId: null },
				{ class: roleConditions[role as keyof typeof role] },
			],
		},
	});

	return (
		<div className="rounded-md">
			<h1 className="text-xl font-semibold">Announcements</h1>

			<div className="grid grid-cols-1 gap-2 my-3">
				{announcements.length === 0 && (
					<div className="text-muted-foreground">
						No announcements.
					</div>
				)}
				{announcements.map((announcement) => (
					<AnnouncementCard
						key={announcement.id}
						data={announcement}
					/>
				))}
			</div>
		</div>
	);
}
