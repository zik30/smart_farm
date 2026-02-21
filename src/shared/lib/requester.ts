import axios from 'axios';
import { BASE_URL } from 'shared/consts/consts';
import type { AxiosInstance } from 'axios';

export interface RefreshTokenResponse {
    access_token: string;
    refresh_token: string;
    token_type: string;
}


const createApi = (): AxiosInstance =>
    axios.create({ baseURL: BASE_URL + '/api/v1' });

const $mainApi: AxiosInstance = createApi();

export { $mainApi };
