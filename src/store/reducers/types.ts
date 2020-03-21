import { Book } from 'models/book';
import { Magazine } from 'models/magazine';
import { Author } from 'models/author';

export interface MagazinesReducer {
	magazineList: Magazine[] | null;
	allMagazines: Magazine[] | null;
	authorEmail: null | string,
	ISBN: null | string,
}

export interface BooksReducer {
	booksList: Book[] | null;
	allBooks: Book[] | null;
	authorEmail: null | string,
	ISBN: null | string,
}

export interface AuthorsReducer {
	authorList: Author[] | null;
}

export interface StoreState {
	books: BooksReducer;
	magazines: MagazinesReducer;
	authors: AuthorsReducer;
}