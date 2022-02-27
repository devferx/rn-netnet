import axios from 'axios';
import {MDB_API_KEY} from '@env';
import {
  GetPopularResponse,
  GetUpcomingResponse,
  GetPopularTvShows,
} from '../interfaces/movieDb';

interface createRequestParams {
  type?: 'movie' | 'tv';
  path: string;
  page?: number;
}

class MovieDBApi {
  url = 'https://api.themoviedb.org/3';

  private createRequest<T>({
    type = 'movie',
    path,
    page = 1,
  }: createRequestParams) {
    return axios.get<T>(`${this.url}/${type}${path}`, {
      params: {
        api_key: MDB_API_KEY,
        language: 'es-ES',
        page,
      },
    });
  }

  async getPopular() {
    const {data} = await this.createRequest<GetPopularResponse>({
      path: '/popular',
    });

    return data;
  }

  async getUpcoming() {
    const {data} = await this.createRequest<GetUpcomingResponse>({
      path: '/upcoming',
    });

    return data;
  }

  async getTopRated() {
    const {data} = await this.createRequest<GetPopularResponse>({
      path: '/top_rated',
    });

    return data;
  }

  async getPopularTvShows() {
    const {data} = await this.createRequest<GetPopularTvShows>({
      type: 'tv',
      path: '/popular',
    });

    return data;
  }
}

export const movieDBApi = new MovieDBApi();
