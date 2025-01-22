import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/app/common/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Academia Sync",
	description:
		"Academia Sync is a comprehensive school management system that streamlines administrative tasks, enhances communication between teachers, students, and parents, and provides real-time insights. With role-based access, it ensures that administrators, teachers, students, and parents can easily manage schedules, grades, assignments, and more, all in one unified platform.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider>
			<html lang="en" suppressHydrationWarning>
				<link rel="icon" href="/logo.svg" type="image/svg+xml" />
				<body
					className={`${geistSans.variable} ${geistMono.variable} antialiased`}
				>
					<ThemeProvider attribute="class" defaultTheme="dark">
						{children}
					</ThemeProvider>
				</body>
			</html>
		</ClerkProvider>
	);
}
