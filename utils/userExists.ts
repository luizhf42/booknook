export const userExists = async (id: string | number) => {
	let userExists: boolean = false;
	try {
		const { data } = await useFetch(`http://localhost:8080/users/${id}`);
		userExists = !!data.value;
	} catch (error) {
		throw new Error(error as string);
	}

	return userExists;
};
