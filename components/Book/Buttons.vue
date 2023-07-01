<template>
	<div>
		<BookBuyButton
			:buyLink="buyLink"
			:isForSale="isForSale"
			:listPrice="listPrice"
		/>
		<button class="text-thumb-up">
			<ThumbUpOutlineIcon v-if="isLikedBook !== true" @click="likeBook" />
			<ThumbUpIcon v-else @click="markReviewAsNull" />
		</button>

		<button class="text-thumb-down">
			<ThumbDownOutlineIcon v-if="isLikedBook !== false" @click="dislikeBook" />
			<ThumbDownIcon v-else @click="markReviewAsNull" />
		</button>
	</div>
</template>

<script setup lang="ts">
import ThumbUpIcon from "vue-material-design-icons/ThumbUp.vue";
import ThumbUpOutlineIcon from "vue-material-design-icons/ThumbUpOutline.vue";
import ThumbDownIcon from "vue-material-design-icons/ThumbDown.vue";
import ThumbDownOutlineIcon from "vue-material-design-icons/ThumbDownOutline.vue";

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
