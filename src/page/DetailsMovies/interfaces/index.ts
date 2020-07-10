export interface IDetailsMovie {
  title: string;
  backdrop_path: string;
  runtime: string;
  overview: string;
  vote_average: number;
  vote_count: number;
  genres: IGenres[];
  production_companies: IProductionCompanies[];
  production_countries: IProductionCountries[];
  spoken_languages: ISpokenLanguages[];
}

interface ISpokenLanguages {
  iso_639_1: string;
  name: string;
}

interface IProductionCountries {
  iso_3166_1: number;
  name: string;
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
