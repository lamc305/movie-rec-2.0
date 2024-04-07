import ListOfMovies from "../../../components/ListOfMovies";
import DetailView from "../../../modules/details/details";
import { getMovieDetail, getSimilarMovies } from "../../../services";

export const generateMetadata = async ({ params }) => {
  const movieDetails = await getMovieDetail(params.id);
  return {
    title: `Movie Rec - ${movieDetails.title}`,
    description: `Detail of the movie ${movieDetails.title}`,
  };
};

export default async function MoviesDetail({ params }) {
  const [movieDetails, similarMovies] = await Promise.all([
    getMovieDetail(params.id),
    getSimilarMovies(params.id),
  ]);

  return (
    <main>
      <DetailView movieDetails={movieDetails} />
      <ListOfMovies title="Similar Movies" movies={similarMovies} />
    </main>
  );
}
