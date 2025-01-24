import AnnouncementsList from "@/components/app/dashboard/announcements-list";
import AttendanceData from "@/components/app/dashboard/attendance-data";
import EventCalendar from "@/components/app/dashboard/event-calendar";
import EventList from "@/components/app/dashboard/event-list";
import FinanceChart from "@/components/app/dashboard/finance-chart";
import OverviewBox from "@/components/app/dashboard/overview-box";
import UserDistribution from "@/components/app/dashboard/user-distribution";
import { parentsData, studentsData, teachersData } from "@/lib/data";

export default function AdminPage() {
	const totalUsers = {
		totalStudents: studentsData.length,
		totalTeachers: teachersData.length,
		totalParents: parentsData.length,
	};

	return (
		<div className="flex flex-col lg:flex-row h-full p-2 gap-3">
			<div className="flex-[2] space-y-4">
				{/* Overview Boxes */}
				<div className="grid grid-cols-3 gap-4 col-span-3">
					<OverviewBox
						type="student"
						count={totalUsers.totalStudents}
						className="col-span-1"
					/>
					<OverviewBox
						type="teacher"
						count={totalUsers.totalTeachers}
						className="col-span-1"
					/>
					<OverviewBox
						type="parent"
						count={totalUsers.totalParents}
						className="col-span-1"
					/>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
					{/* User Distribution  */}
					<div className="col-span-1">
						<UserDistribution />
					</div>

					{/* Attendance Data  */}
					<div className="col-span-1 md:col-span-2">
						<AttendanceData />
					</div>

					{/* Finance Chart  */}
					<div className="col-span-1 md:col-span-3">
						<FinanceChart />
					</div>
				</div>
			</div>
			<div className="flex-1">
				{/* Calendar */}
				<EventCalendar />

				{/* Events List */}
				<EventList />

				{/* Announcements */}
				<AnnouncementsList />
			</div>
		</div>
	);
}
