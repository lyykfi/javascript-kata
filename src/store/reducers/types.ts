import { Book } from 'models/book';

export interface BooksReducer {
	booksList: Book[] | null;
}

export interface StoreState {
	books: BooksReducer;
}