import type { SearchBooksResponse } from "~/models/Book";

export default defineEventHandler(async (event) => {
	const query = getQuery(event).q;

	if (!query) {
		return { statusCode: 400, message: 'Query parameter "q" is required.' };
	}

	try {    
		const response: SearchBooksResponse = await $fetch(
			"https://www.googleapis.com/books/v1/volumes",
			{
				params: { q: query, printType: "books" },
			}
		);

		if (!response.items || response.items.length === 0) {
			return { statusCode: 404, message: "No books found" };
		}

		return response;
	} catch (error) {
		return { statusCode: 500, message: "Error fetching books data" };
	}
});
