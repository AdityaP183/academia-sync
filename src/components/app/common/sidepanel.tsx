import Image from "next/image";
import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { menuItems } from "@/lib/app-data";

export default function SidePanel() {
	const role = "parent";

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
						<SidebarMenu className="group-data-[collapsible=icon]:items-center">
							{menuItems.map((item) => {
								if (item.visible.includes(role)) {
									return (
										<SidebarMenuItem
											key={item.label}
											className="my-1 group-data-[collapsible=icon]:my-2"
										>
											<SidebarMenuButton
												asChild
												className={
													"text-xl hover:bg-background [&>svg]:size-[18px] py-4"
												}
												tooltip={item.label}
											>
												<Link href={item.href || "/"}>
													{item.icon && <item.icon />}
													<span>{item.label}</span>
												</Link>
											</SidebarMenuButton>
										</SidebarMenuItem>
									);
								}
							})}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
		</Sidebar>
	);
}
