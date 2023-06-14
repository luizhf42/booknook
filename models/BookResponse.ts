type BookResponse = {
	volumeInfo: {
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
	};
	saleInfo: {
		country: string;
		saleability: string;
		listPrice: {
			amount: number;
			currencyCode: string;
		};
		buyLink: string;
	};
};

type VolumeInfo = BookResponse["volumeInfo"];
type SaleInfo = BookResponse["saleInfo"];

export { BookResponse, VolumeInfo, SaleInfo };
