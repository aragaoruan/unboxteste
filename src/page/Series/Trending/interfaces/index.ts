export interface ITrending {
  id: number;
  original_name: string;
  poster_path: string;
  overview: string;
}

export interface IResponseTrending {
  page: number;
  results: ITrending[];
}
