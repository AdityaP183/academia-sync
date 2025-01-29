"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createPost({
	email,
	firstName,
	lastName,
}: {
	email: string;
	firstName: string;
	lastName: string;
}) {
	try {
		const post = await prisma.user.create({
			data: {
				email,
				firstName,
				lastName,
			},
		});

		revalidatePath("/");

		return { success: true, post };
	} catch (error) {
		return { success: false, error: error || "Failed to create post" };
	}
}
