export interface ITrending {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
}

export interface IResponseTrending {
  page: number;
  results: ITrending[];
}
