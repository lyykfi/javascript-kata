export const sortByTitle = (a: any, b: any) => {
	return a.title.localeCompare(b.title);
}

export const authorPrepare = (data: any[]) => {
	return data.map((item: any) => {
		item.authors = item.authors.split(',');
		return item;
	})
}

export const findItems = (data: any[], isbn: string, authorEmail: string) => {
	return data?.filter((item) => {
		if (item.isbn?.includes(isbn)) {
			if (authorEmail) {
				const res = item.authors.find((a: string) => a === authorEmail);
				return res ? true : false;
			}

			return true;
		}

		return false;
	});
}