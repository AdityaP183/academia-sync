import { InputWithIcon } from "@/components/ui/extra-inputs";
import { Search } from "lucide-react";
import FormModal from "../create/form-modal";

export default function TableFilters() {
	return (
		<div className="flex items-center gap-3">
			<InputWithIcon
				transparent
				placeholder="Search..."
				IconBefore={Search}
			/>
			<FormModal type="add" title="Add Teacher" />
		</div>
	);
}
