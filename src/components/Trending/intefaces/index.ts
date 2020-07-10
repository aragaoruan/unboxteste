export interface ITrending {
  id: number;
  original_name: string;
  poster_path: string;
  overview: string;
}

export interface IResponseTrending {
  results: ITrending[];
  handleDetails(id: number, title: string): void;
}
