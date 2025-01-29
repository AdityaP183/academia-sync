import AnnouncementsList from "@/components/app/dashboard/announcements-list";
import BigCalendarContainer from "@/components/app/dashboard/big-calendar-container";

export default async function TeacherPage() {
	return (
		<div className="flex flex-col lg:flex-row h-full p-2 gap-3">
			<div className="flex-[2] space-y-4 h-[90%]">
				<h1 className="text-xl font-semibold">Schedule</h1>
				<BigCalendarContainer type="teacherId" id="teacher5" />
			</div>
			<div className="flex-1">
				<AnnouncementsList />
			</div>
		</div>
	);
}
