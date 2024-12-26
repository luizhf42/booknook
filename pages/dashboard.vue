<template>
	<section>
		<div>
			<img :src="picture" alt="" />
		</div>
		<div>
			<h3>
				{{ name }}
			</h3>
			<p>
				{{ username }}
			</p>
		</div>
	</section>
</template>

<script setup lang="ts">
import { useUserStore } from "~/store/user";
import { storeToRefs } from "pinia";

const { user } = storeToRefs(useUserStore());
if (!user.value) navigateTo("/");
const { name, username, picture } = user.value!;
</script>

<style lang="postcss" scoped>
section {
	@apply p-4 bg-gray-100;

	img {
		@apply h-12 w-12 rounded-full;
	}

	h3 {
		@apply text-lg font-medium text-gray-900;
	}

	p {
		@apply text-sm text-gray-500;
	}
}
</style>
