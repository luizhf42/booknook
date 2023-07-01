<template>
	<a
		:class="[isForSale ? 'for-sale' : 'not-for-sale']"
		:href="buyLink"
		target="_blank"
		rel="noopener noreferrer"
		>{{ isForSale ? `E-book for ${formattedPrice}` : "Not for sale" }}</a
	>
</template>

<script setup lang="ts">
const { buyLink, isForSale, listPrice } = defineProps({
	buyLink: String,
	isForSale: Boolean,
	listPrice: Object,
});

const formattedPrice = listPrice?.amount
	? new Intl.NumberFormat("en-US", {
			style: "currency",
			currency: listPrice.currencyCode,
	  }).format(listPrice.amount)
	: "";
</script>

<style lang="postcss" scoped>
a {
	@apply px-4 py-3 rounded-md h-fit text-white transition-colors duration-200;
	&.for-sale {
		@apply bg-blue-500;

    &:hover {
      @apply bg-blue-600;
    }
	}

	&.not-for-sale {
		@apply bg-gray-400;
	}
}
</style>
