export interface Props {
  id: number;
}

export interface IMovies {
  id: number;
  poster_path: string;
  title: string;
}

export interface ResponseMovies {
  results: IMovies[];
}
