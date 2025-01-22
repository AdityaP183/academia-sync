"use client";

import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";
import { TooltipWrapper } from "@/components/ui/tooltip";
import { PanelLeft } from "lucide-react";

export default function ToggleSidebar() {
	const { toggleSidebar } = useSidebar();

	return (
		<TooltipWrapper
			trigger={
				<Button
					variant={"secondary"}
					size={"icon"}
					onClick={toggleSidebar}
				>
					<PanelLeft
						className="cursor-pointer"
						onClick={toggleSidebar}
					/>
				</Button>
			}
			content={
				<div className="flex items-center gap-2 p-1">
					<p>Toggle Sidebar</p>
					<h4>
						<kbd className="p-1 text-xs bg-gray-600 rounded-md">
							Ctrl
						</kbd>{" "}
						+{" "}
						<kbd className="px-2 py-1 text-xs bg-gray-600 rounded-md">
							B
						</kbd>
					</h4>
				</div>
			}
			side="right"
		/>
	);
}
