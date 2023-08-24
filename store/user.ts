import {defineStore} from 'pinia';
import {fetchUserInfo} from "~/utils/fetchUserInfo";
import {User} from "~/models/User";

export const useUserStore = defineStore('user', () => {
    const user = ref<User>();

    const setUserInfo = async (id: string) => {
        user.value = await fetchUserInfo(id) as User;
    }

    return {user, setUserInfo};
})