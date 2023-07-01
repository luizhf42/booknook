<template>
	<article>
		<slot />
		<span>{{ info }}</span>
	</article>
</template>

<script setup lang="ts">
defineProps({
	info: String,
});
</script>

<style lang="postcss" scoped>
article {
	@apply w-28 flex flex-col gap-1 items-center;

	span, svg {
		@apply text-gray-800 text-sm;
	}
}
</style>
