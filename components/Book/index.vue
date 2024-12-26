<template>
	<section>
		<img :src="imageLinks?.thumbnail" alt="" />
		<article class="info">
			<BookMainInfo
				:authors="authorsToString"
				:infoLink="infoLink"
				:publishedDate="formattedDate"
				:publisher="publisher"
				:title="title"
			/>
			<BookDetails
				:country="country"
				:isbn="industryIdentifiers?.[1].identifier"
				:pageCount="pageCount"
			/>
		</article>
	</section>

	<BookButtons
		:buyLink="buyLink"
		:isForSale="isForSale"
		:listPrice="listPrice"
	/>

	<div v-html="description"></div>
</template>

<script setup lang="ts">
import type { VolumeInfo, SaleInfo, BookResponse } from "~/models/Book";

const { book } = defineProps({
	book: Object,
});

const { volumeInfo, saleInfo } = book as BookResponse;
const {
	authors,
	categories,
	description,
	imageLinks,
	industryIdentifiers,
	infoLink,
	pageCount,
	publishedDate,
	publisher,
	title,
} = (volumeInfo as VolumeInfo) ?? {};
const authorsToString = authors?.join(", ");
const categoriesToString = categories?.join(", ");
const formattedDate = formatPublishedDate(publishedDate);

const { buyLink, country, listPrice, saleability } =
	(saleInfo as SaleInfo) ?? {};
const isForSale = saleability == "FOR_SALE";
</script>

<style lang="postcss" scoped>
section {
	@apply flex gap-4;

	img {
		@apply w-36;
	}
	.info {
		@apply flex flex-col gap-8;

		.details {
			@apply flex gap-2;
		}
	}
}
</style>
