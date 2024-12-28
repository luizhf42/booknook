interface VolumeInfo {
	title: string;
	authors: string[];
	publisher: string;
	publishedDate: string;
	description: string;
	pageCount: number;
	categories: string[];
	imageLinks: {
		smallThumbnail: string;
		thumbnail: string;
		small: string;
		medium: string;
		large: string;
		extraLarge: string;
	};
	industryIdentifiers: {
		type: string;
		identifier: string;
	}[];
	infoLink: string;
}

interface SaleInfo {
	country: string;
	saleability: string;
	listPrice: {
		amount: number;
		currencyCode: string;
	};
	buyLink: string;
}

interface BookResponse {
	volumeInfo: VolumeInfo;
	saleInfo: SaleInfo;
}

interface SearchBooksResponse {
	totalItems: number;
	items: Array<BookResponse>;
}

export type { BookResponse, VolumeInfo, SaleInfo, SearchBooksResponse };
