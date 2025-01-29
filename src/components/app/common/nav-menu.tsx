"use client";

import {
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";
import { menuItems } from "@/lib/app-data";
import { RoleType } from "@/lib/types/component.types";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavMenu({ role }: { role?: RoleType }) {
	const pathname = usePathname();

	if (!role) return null;

	return (
		<SidebarMenu className="group-data-[collapsible=icon]:items-center">
			{menuItems.map((item) => {
				if (role) {
					if (item.visible.includes(role)) {
						return (
							<SidebarMenuItem
								key={item.label}
								className="my-1 group-data-[collapsible=icon]:my-2"
							>
								<SidebarMenuButton
									asChild
									className={clsx(
										"text-xl hover:bg-background [&>svg]:size-[18px] py-4",
										{
											"bg-background":
												pathname === item.href ||
												(item.href === "/" &&
													pathname === `/${role}`),
										}
									)}
									tooltip={item.label}
								>
									<Link
										href={
											item.label === "Home"
												? `/${role}`
												: item.href ?? "/"
										}
									>
										{item.icon && <item.icon />}
										<span>{item.label}</span>
									</Link>
								</SidebarMenuButton>
							</SidebarMenuItem>
						);
					}
				}
			})}
		</SidebarMenu>
	);
}
