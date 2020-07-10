export interface ISearch {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
}

export interface IResponseSearch {
  page: number;
  results: ISearch[];
}
