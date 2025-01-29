"use client";

import * as Clerk from "@clerk/elements/common";
import * as SignIn from "@clerk/elements/sign-in";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LoaderPinwheel } from "lucide-react";
import Image from "next/image";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function SignInPage() {
	const { user } = useUser();
	const router = useRouter();

	useEffect(() => {
		const role = user?.publicMetadata?.role;

		if (role) {
			console.log("Redirecting to:", `/${role}`);
			router.push(`/${role}`);
		}
	}, [user, router]);

	return (
		<div className="grid w-full h-screen grow items-center px-4 sm:justify-center">
			<SignIn.Root>
				<Clerk.Loading>
					{(isGlobalLoading) => (
						<SignIn.Step name="start">
							<Card className="w-full sm:w-96 bg-secondary/40 glass">
								<CardHeader>
									<div className="flex items-center gap-2 border-2 border-background bg-background/50 rounded-full px-2 py-1 w-fit mb-2">
										<Image
											src="/logo.svg"
											alt="Logo"
											width={32}
											height={32}
										/>
										Academic Sync
									</div>

									<CardTitle className="text-2xl">
										Sign in
									</CardTitle>
									<CardDescription>
										Welcome back! Please sign in to continue
									</CardDescription>
								</CardHeader>
								<CardContent className="grid gap-y-4">
									<Clerk.Field
										name="identifier"
										className="space-y-2"
									>
										<Clerk.Label asChild>
											<Label>Email address</Label>
										</Clerk.Label>
										<Clerk.Input
											type="email"
											required
											asChild
										>
											<Input />
										</Clerk.Input>
										<Clerk.FieldError className="block text-sm text-destructive" />
									</Clerk.Field>
									<Clerk.Field
										name="password"
										className="space-y-2"
									>
										<Clerk.Label asChild>
											<Label>Password</Label>
										</Clerk.Label>
										<Clerk.Input
											type="pasword"
											required
											asChild
										>
											<Input type="password" />
										</Clerk.Input>
										<Clerk.FieldError className="block text-sm text-destructive" />
									</Clerk.Field>
								</CardContent>
								<CardFooter>
									<div className="grid w-full gap-y-4">
										<SignIn.Action submit asChild>
											<Button disabled={isGlobalLoading}>
												<Clerk.Loading>
													{(isLoading) => {
														return isLoading ? (
															<LoaderPinwheel className="size-4 animate-spin" />
														) : (
															"Continue"
														);
													}}
												</Clerk.Loading>
											</Button>
										</SignIn.Action>
									</div>
								</CardFooter>
							</Card>
						</SignIn.Step>
					)}
				</Clerk.Loading>
			</SignIn.Root>
		</div>
	);
}
