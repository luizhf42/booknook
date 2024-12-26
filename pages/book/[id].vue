<template>
	<p v-if="!book">loading</p>
	<Book v-else :book="book" />

	<p v-if="requestError">An error occurred!</p>
</template>

<script setup lang="ts">
import type { BookResponse } from "~/models/Book";

const route = useRoute();
const requestError = ref<boolean>(false);
const getBook = async () => {
	try {
		const { data, error } = await useFetch(`/api/books/${route.params.id}`);

		if (error.value) {
			throw new Error(error.value.stack);
		} else {
			return data.value as BookResponse;
		}
	} catch (err) {
		requestError.value = true;
		throw new Error(err as string);
	}
};

const book = await getBook();
</script>

<style lang="postcss" scoped></style>
