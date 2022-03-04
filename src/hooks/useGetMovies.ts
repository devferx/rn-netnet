import {useState, useEffect} from 'react';
import axios from 'axios';
import {MDB_API_KEY} from '@env';

import {Movie, MoviesResponse} from '../interfaces/movieDb';

type MoviePath = '/popular' | '/upcoming' | '/top_rated';

export const useGetMovies = (path: MoviePath) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (isLoading) {
      return;
    }

    const fetchMovies = async () => {
      setIsLoading(true);
      const resp = await axios.get<MoviesResponse>(
        `https://api.themoviedb.org/3/movie${path}`,
        {
          params: {
            api_key: MDB_API_KEY,
            language: 'es-ES',
            page,
          },
        },
      );

      setMovies([...movies, ...resp.data.results]);
      setIsLoading(false);
    };

    fetchMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const getNextPage = () => {
    setPage(page + 1);
  };

  return {
    movies,
    getNextPage,
  };
};
