export interface Props {
  id: number;
  handle(id: number, title: string): void;
}

export interface IMovies {
  id: number;
  poster_path: string;
  title: string;
}

export interface ResponseMovies {
  results: IMovies[];
}
