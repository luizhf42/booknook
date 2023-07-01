<template>
	<div class="details">
		<BookDetail :info="isbn">
			<BarcodeIcon title="ISBN 13" />
		</BookDetail>
		<BookDetail :info="pageCount + ' pages'">
			<BookOpenPageVariantIcon title="Page count" />
		</BookDetail>
		<BookDetail :info="getCountryName(country)">
			<EarthIcon title="Country" />
		</BookDetail>
	</div>
</template>

<script setup lang="ts">
import BarcodeIcon from "vue-material-design-icons/Barcode.vue";
import BookOpenPageVariantIcon from "vue-material-design-icons/BookOpenPageVariant.vue";
import EarthIcon from "vue-material-design-icons/Earth.vue";

const { country, isbn, pageCount } = defineProps({
	country: String,
	isbn: String,
	pageCount: Number,
});
</script>

<style lang="postcss" scoped></style>
