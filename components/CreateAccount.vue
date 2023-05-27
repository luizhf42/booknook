<template>
	<div class="wrapper">
		<section>
			<div>
				<h1>Create your account</h1>
				<h2>We're almost there!</h2>
			</div>

			<form @submit="$event.preventDefault()">
				<label for="username">Choose your username</label>
				<input type="text" placeholder="Username" id="username" v-model="username" />
				<span>
					You can use alphanumeric characters (a-z and 0-9) and hyphens (-).
				</span>
				<fieldset>
					<button class="cancel" @click="$emit('cancel')">Cancel</button>
					<button class="create" @click="$emit('create-account', username)">
						Create!
					</button>
				</fieldset>
			</form>
		</section>
	</div>
</template>

<script setup lang="ts">
const username = ref("");
</script>

<style lang="postcss" scoped>
.wrapper {
	@apply bg-[#000000dd] w-full h-full absolute flex items-center justify-center;

	section {
		@apply text-black h-4/5 sm:max-h-[450px] bg-white w-[90%] max-w-sm grid grid-rows-[1fr_2fr] justify-between items-center rounded-lg px-6 sm:px-8 py-6 sm:py-12;

		div {
			@apply text-center;

			h1 {
				@apply text-3xl mb-3 font-bold;
			}

			h2 {
				@apply text-xl;
			}
		}

		form {
			label {
				@apply font-semibold;
			}

			input {
				@apply w-full border-2 border-gray-300 rounded-lg px-4 py-2 my-2;
			}

			span {
				@apply text-sm text-gray-500;
			}

			fieldset {
				@apply flex justify-between px-3 items-center mt-4;
				button {
					&.cancel {
						@apply w-1/5 underline text-black rounded-lg py-2 my-2;
					}
					&.create {
						@apply w-3/5 bg-[#1da1f2] text-white rounded-lg px-4 py-2 my-2;
					}
				}
			}
		}
	}
}
</style>
