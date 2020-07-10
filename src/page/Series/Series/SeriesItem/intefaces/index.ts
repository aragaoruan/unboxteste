export interface Props {
  id: number;
  handle(id: number, original_name: string): void;
}

export interface IMovies {
  id: number;
  poster_path: string;
  original_name: string;
}

export interface ResponseMovies {
  results: IMovies[];
}
