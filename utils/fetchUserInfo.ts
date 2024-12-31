import type { User } from "~/models/User";

export const fetchUserInfo = async (id: string) => {
	try {
		const data: User = await $fetch(`/api/users/${id}`);
		return data;
	} catch (error: any) {
		if (error?.response?.status === 404) {
			throw createError({
				statusCode: 404,
				message: `User with ID ${id} not found.`,
			});
		}

		throw createError({
			statusCode: error?.response?.status || 500,
			message: error?.message || "An unexpected error occurred.",
		});
	}
};
