import {fetchUserInfo} from "~/utils/fetchUserInfo";

export const userExists = async (id: string) => {
    let userExists: boolean = false;
    try {
        const user = await fetchUserInfo(id);
        userExists = !!user;
    } catch (error) {
        throw new Error(error as string);
    }
    return userExists;
};
