import TeacherForm from "@/components/app/create/forms/teacher-form";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export default function AddTeacherPage() {
	return (
		<Card>
			<CardHeader>
				<CardTitle className="text-2xl">Add Teacher</CardTitle>
				<CardDescription>Add a new teacher</CardDescription>
			</CardHeader>
			<CardContent className="w-1/2 mx-auto">
				<TeacherForm />
			</CardContent>
		</Card>
	);
}
