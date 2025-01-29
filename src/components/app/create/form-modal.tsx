import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import TeacherForm from "./forms/teacher-form";

export default function FormModal({
	mode,
	type,
	title,
}: {
	mode: "add" | "edit";
	type: "teacher" | "class" | "student" | "subject";
	title: string;
}) {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button size="icon" className="[&_svg]:size-6">
					<Plus />
				</Button>
			</DialogTrigger>
			<DialogContent className="w-[50vw] max-w-full">
				<DialogHeader>
					<DialogTitle className="text-2xl font-semibold">
						{title}
					</DialogTitle>
					<DialogDescription asChild>
						<TeacherForm />
					</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
}
