import Image from "next/image";
import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuItem,
} from "@/components/ui/sidebar";
import NavMenu from "./nav-menu";

export default function SidePanel() {
	const role = "admin";

	return (
		<Sidebar
			collapsible="icon"
			className="group=[[data-collapsible=icon]]:w-[300px]"
		>
			{/* Sidebar Header */}
			<SidebarHeader>
				<SidebarMenu>
					<SidebarMenuItem className="group-data-[collapsible=icon]:items-center">
						<div className="flex items-center gap-3 p-2">
							<Image
								src="/logo.svg"
								alt="Logo"
								width={32}
								height={32}
							/>
							<span className="text-xl font-bold group-data-[collapsible=icon]:hidden bg-gradient-to-br from-[#ff007a] to-[#ffd600] bg-clip-text text-transparent">
								Academia Sync
							</span>
						</div>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>

			{/* Sidebar Content */}
			<SidebarContent className="mt-4">
				<SidebarGroup>
					<SidebarGroupContent>
						<NavMenu role={role} />
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
		</Sidebar>
	);
}
