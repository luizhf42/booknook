// server/api/books/[id].ts
export default defineEventHandler(async (event) => {
	const id = getRouterParam(event, "id");

	if (!id) {
		return { statusCode: 400, message: "Book ID is required" };
	}

	try {
		const response = await $fetch(
			`https://www.googleapis.com/books/v1/volumes/${id}`,
			{
				params: {
					fields:
						"volumeInfo(title,authors,publisher,publishedDate,description,pageCount,categories,imageLinks,industryIdentifiers,infoLink)," +
						"saleInfo(country,saleability,listPrice,buyLink)",
				},
			}
		);

		if (!response) {
			return { statusCode: 404, message: `Book of ID ${id} not found` };
		}

		return response;
	} catch (error) {
		return { statusCode: 500, message: "Error fetching book details" };
	}
});
