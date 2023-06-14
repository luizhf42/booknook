<template>
	<main>
		<h1>BookNook</h1>
		<h2>Where books unite people.</h2>

		<GoogleLogin
			clientId="1030391838378-6ohfffk4poldo1f08192q5unvsg6ih26.apps.googleusercontent.com"
			:callback="callback"
		/>

		<CreateAccount
			v-if="showCreateAccount"
			@create-account="(username) => createAccount(username)"
			@cancel="() => (showCreateAccount = false)"
		/>
	</main>
</template>

<script setup lang="ts">
import { decodeCredential, GoogleLogin } from "vue3-google-login";
import { v4 as getUUID } from "uuid";

interface UserData {
	sub: string;
	name: string;
	picture: string;
}

const showCreateAccount = ref(false);
const userData = ref<UserData>({ sub: "", name: "", picture: "" });
const callback = async (response: { credential: string }) => {
	userData.value = decodeCredential(response.credential) as UserData;	
	if (await userExists(userData.value.sub)) navigateTo("/dashboard");
	else showCreateAccount.value = true;
};

const createAccount = async (username: string) => {
	const { sub, name, picture } = userData.value;
	try {
		const { data, error } = await useFetch(
			"http://localhost:8080/users/create",
			{
				method: "POST",
				body: { id: sub, name: name, picture: picture, username: username },
			}
		);

		if (error.value) {
			throw new Error(error.value.stack);
		}

		navigateTo("/dashboard");
	} catch (err) {
		console.error(err);
	}
};
</script>

<style lang="postcss" scoped>
main {
	@apply bg-[#A86114] text-white h-full flex flex-col items-center justify-center;

	h1 {
		@apply text-6xl font-bold;
	}

	h2 {
		@apply text-4xl mb-4;
	}
}
</style>
