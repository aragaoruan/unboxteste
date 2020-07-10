export interface IDetailsMovie {
  title: string;
  backdrop_path: string;
  runtime: string;
  overview: string;
  vote_average: number;
  vote_count: number;
  genres: IGenres[];
  production_companies: IProductionCompanies[];
  seasons: ISeasons[];
}

export interface RouteParams {
  id: number;
}
interface ISpokenLanguages {
  iso_639_1: string;
  name: string;
}

interface ISeasons {
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  episode_count: number;
}

interface IProductionCompanies {
  id: number;
  logo_path: string;
  name: string;
}

interface IGenres {
  id: number;
  name: string;
}
