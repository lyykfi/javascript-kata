import { Book } from 'models/book';
import { Magazine } from 'models/magazine';

export interface MagazinesReducer {
	magazineList: Magazine[] | null;
	allMagazines: Magazine[] | null;
}

export interface BooksReducer {
	booksList: Book[] | null;
	allBooks: Book[] | null;
}

export interface StoreState {
	books: BooksReducer;
	magazines: MagazinesReducer;
}