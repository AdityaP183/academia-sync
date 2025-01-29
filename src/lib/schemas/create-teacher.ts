import { z } from "zod";
import { addressSchema } from "./other-schema";

export const createTeacherSchema = z.object({
	email: z.string().email({ message: "Invalid email address!" }),
	password: z
		.string()
		.min(8, { message: "Password must be at least 8 characters long!" })
		.regex(/[A-Z]/, {
			message: "Password must contain at least one uppercase letter",
		})
		.regex(/[a-z]/, {
			message: "Password must contain at least one lowercase letter",
		})
		.regex(/[0-9]/, {
			message: "Password must contain at least one number",
		}),
	firstName: z.string().min(1, { message: "First name is required!" }),
	lastName: z.string().min(1, { message: "Last name is required!" }),
	phone: z
		.string()
		.min(1, { message: "Phone is required!" })
		.regex(/^\+?[1-9]\d{1,14}$/, { message: "Invalid phone number!" }),
	address: addressSchema,
	bloodType: z.enum(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"], {
		message: "Invalid blood type!",
	}),
	dob: z.string().min(1, "Date of birth is required!"),
	gender: z.enum(["male", "female", "others"], {
		message: "Gender is required!",
	}),
});
