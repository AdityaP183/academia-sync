import { Separator } from "@/components/ui/separator";
import ToggleMode from "@/lib/tools/toggle-mode";
import ToggleSidebar from "@/lib/tools/toggle-sidebar";
import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";

export default async function Navbar() {
	const user = await currentUser();

	if (!user) return null;

	return (
		<nav className="flex items-center justify-between">
			<div className="flex items-center gap-3">
				<ToggleSidebar />
				<Separator className="h-6" orientation="vertical" />
				<div className="flex items-center gap-1">
					Welcome,{" "}
					<h4 className="font-medium text-lg">{user?.firstName}</h4>
				</div>
			</div>
			<div className="hidden md:flex items-center gap-3">
				<ToggleMode />
				<UserButton />
			</div>
		</nav>
	);
}
