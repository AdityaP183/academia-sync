import Navbar from "@/components/app/common/navbar";
import SidePanel from "@/components/app/common/sidepanel";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import React from "react";

export default async function AdminLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="block w-full h-screen gap-1 md:flex">
			<SidebarProvider>
				<SidePanel />
				<SidebarInset>
					<Card className="h-screen p-0 rounded-none">
						<CardHeader className="h-16 px-3 py-3 border-b md:px-5 border-border">
							<Navbar />
						</CardHeader>
						<CardContent className="h-[calc(100%-4rem)] w-full overflow-hidden overflow-y-auto py-0">
							{children}
						</CardContent>
					</Card>
				</SidebarInset>
			</SidebarProvider>
		</div>
	);
}
