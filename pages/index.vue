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
        @create-account="(username = '') => createAccount(username)"
        @cancel="() => (showCreateAccount = false)"
    />
  </main>
</template>

<script setup lang="ts">
import {decodeCredential, GoogleLogin} from "vue3-google-login";
import {useUserStore} from "~/store/user";
import {storeToRefs} from "pinia";
import {GoogleUserData, User} from "~/models/User";
// import { v4 as getUUID } from "uuid";


const showCreateAccount = ref(false);
const googleUserData = ref<GoogleUserData>();
const userStore = useUserStore();
const {setUserInfo} = userStore;
const {user} = storeToRefs(userStore);

const callback = async (response: { credential: string }) => {
  googleUserData.value = decodeCredential(response.credential) as GoogleUserData;
  if (await userExists(googleUserData.value.sub)) {
    await setUserInfo(googleUserData.value.sub)
    navigateTo("/dashboard")
  } else showCreateAccount.value = true;
};

const createAccount = async (username: string) => {
  const {id, name, picture} = user.value!;
  try {
    const {data, error} = await useFetch(
        "http://localhost:8080/users/create",
        {
          method: "POST",
          body: {id, name, picture, username},
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
  @apply bg-brown-bg text-white h-full flex flex-col items-center justify-center;

  h1 {
    @apply text-6xl font-bold;
  }

  h2 {
    @apply text-4xl mb-4;
  }
}
</style>
