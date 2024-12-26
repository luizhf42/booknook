<template>
	<div>
		<BookBuyButton
			:buyLink="buyLink"
			:isForSale="isForSale"
			:listPrice="listPrice"
		/>
		<button class="text-thumb-up">
			<Icon name="fa6-regular:thumbs-up" v-if="isLikedBook !== true" @click="likeBook" />
			<Icon name="fa6-solid:thumbs-up" v-else @click="markReviewAsNull" />
		</button>

		<button class="text-thumb-down">
			<Icon name="fa6-regular:thumbs-down" v-if="isLikedBook !== false" @click="dislikeBook" />
			<Icon name="fa6-solid:thumbs-down"  v-else @click="markReviewAsNull" />
		</button>
	</div>
</template>

<script setup lang="ts">
const { buyLink, isForSale, listPrice } = defineProps({
	buyLink: String,
	isForSale: Boolean,
	listPrice: Object,
});

type Review = boolean | null;
const isLikedBook = ref<Review>(null);

const likeBook = () => {
	isLikedBook.value = true;
};

const dislikeBook = () => {
	isLikedBook.value = false;
};

const markReviewAsNull = () => {
	isLikedBook.value = null;
};
</script>

<style lang="postcss" scoped>
div {
	@apply flex gap-6 my-4 items-center;
}
</style>
