// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
				modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt", "@nuxt/icon"],
				app: {
								head: {
												link: [
																{ rel: "preconnect", href: "https://fonts.googleapis.com" },
																{
																				rel: "preconnect",
																				href: "https://fonts.gstatic.com",
																				crossorigin: "",
																},
																{
																				rel: "stylesheet",
																				href: "https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700&display=swap",
																},
												],
												title: "BookNook 📚️",
								},
				},

				compatibilityDate: "2024-12-10",
});