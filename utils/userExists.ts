import { fetchUserInfo } from "~/utils/fetchUserInfo";

export const userExists = async (id: string) => {
	try {
		await fetchUserInfo(id);
		return true;
	} catch (error: any) {
		if (error.message.includes("not found")) return false;

		throw new Error(
			error.message ||
				"An unexpected error occurred while checking user existence."
		);
	}
};
