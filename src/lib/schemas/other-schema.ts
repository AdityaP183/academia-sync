import { z } from "zod";

export const addressSchema = z.object({
	street: z.string().min(1, "Street name is required"),
	city: z.string().min(1, "City name is required"),
	state: z.string().min(1, "State name is required"),
	zip: z.string().min(1, "Zip code is required"),
	country: z.string().min(1, "Country name is required"),
});
