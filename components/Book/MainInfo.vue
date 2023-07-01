<template>
	<div>
		<h1>
			<a :href="infoLink" target="_blank" rel="noopener noreferrer">{{
				title
			}}</a>
		</h1>
		<p>{{ authors }}</p>
		<span>{{ publishedDate }} - </span><span>{{ publisher }}</span>
	</div>
</template>

<script setup lang="ts">
const { authors, infoLink, publishedDate, publisher, title } = defineProps({
	authors: String,
	infoLink: String,
	publishedDate: String,
	publisher: String,
	title: String,
});
</script>

<style lang="postcss" scoped>
div {
	h1 {
		@apply text-3xl text-blue-500 font-bold;
	}

	p {
		@apply italic;
	}

	span {
		@apply text-gray-600 text-sm;
	}
}
</style>
