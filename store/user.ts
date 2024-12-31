import { defineStore } from "pinia";
import type { User } from "~/models/User";

export const useUserStore = defineStore("user", () => {
	const user = ref<User>();

	const setUserInfo = (userInfo: User) => {
		user.value = userInfo;
	};

	return { user, setUserInfo };
});
