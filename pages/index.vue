<template>
	<main>
		<h1>BookNook</h1>
		<h2>Where books unite people.</h2>

		<ClientOnly>
			<GoogleLogin
				clientId="1030391838378-6ohfffk4poldo1f08192q5unvsg6ih26.apps.googleusercontent.com"
				:callback="callback"
			/>
		</ClientOnly>

		<CreateAccount
			v-if="showCreateAccount"
			@create-account="(username = '') => createAccount(username)"
			@cancel="() => (showCreateAccount = false)"
		/>
	</main>
</template>

<script setup lang="ts">
import { decodeCredential, GoogleLogin } from "vue3-google-login";
import { useUserStore } from "~/store/user";
import type { GoogleUserData } from "~/models/User";

const showCreateAccount = ref(false);
const googleUserData = ref<GoogleUserData>();
const userStore = useUserStore();
const { setUserInfo } = userStore;

const callback = async (response: { credential: string }) => {
	googleUserData.value = decodeCredential(
		response.credential
	) as GoogleUserData;

	if (await userExists(googleUserData.value.sub)) {
		const userInfo = await fetchUserInfo(googleUserData.value.sub);
		setUserInfo(userInfo);
		navigateTo("/dashboard");
	} else showCreateAccount.value = true;
};

const createAccount = async (username: string) => {
	const { sub, name, picture } = googleUserData.value!;
	const user = { id: sub, name, picture, username };
	try {
		await $fetch("api/users/create", {
			method: "POST",
			body: user,
		});
		setUserInfo(user);
		navigateTo("/dashboard");
	} catch (err) {
		console.error(err);
	}
};
</script>

<style lang="postcss" scoped>
main {
	@apply bg-brown-bg text-white h-full flex flex-col items-center justify-center;

	h1 {
		@apply text-6xl font-bold;
	}

	h2 {
		@apply text-4xl mb-4;
	}
}
</style>
