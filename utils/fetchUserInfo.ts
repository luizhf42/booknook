export const fetchUserInfo = async (id: string) => {
    try {
        const {data} = await useFetch(`http://localhost:8080/users/${id}`);
        return data.value;
    } catch (error) {
        throw new Error(error as string);
    }
}