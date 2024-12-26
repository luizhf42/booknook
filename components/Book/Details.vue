<template>
	<div class="details">
		<BookDetail :info="isbn">
			<Icon name="fa6-solid:barcode" title="ISBN 13" />
		</BookDetail>
		<BookDetail :info="pageCount + ' pages'">
			<Icon name="fa6-solid:book-open" title="Page count" />
		</BookDetail>
		<BookDetail :info="getCountryName(country)">
			<Icon name="fa6-solid:earth-americas" title="Country" />
		</BookDetail>
	</div>
</template>

<script setup lang="ts">
const { country, isbn, pageCount } = defineProps({
	country: String,
	isbn: String,
	pageCount: Number,
});
</script>

<style lang="postcss" scoped></style>
