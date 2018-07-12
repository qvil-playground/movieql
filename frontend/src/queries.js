import gql from "graphql-tag";

export const HOME_PAGE = gql`
  query {
    movies(limit: 50, rating: 7) {
      id
      title
      rating
    }
  }
`;

export const MOVIE_DETAILS = gql`
  query getMovieDetails($movieId: Int!) {
    movie(id: $movieId) {
      title
      id
      medium_cover_image
      rating
      description_intro
      language
      genres
    }
    suggestions(id: $movieId) {
      medium_cover_image
      title
      rating
    }
  }
`;
