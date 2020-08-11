import { AxiosInstance} from 'axios';

export default class ApiService {
  private api: AxiosInstance;

  constructor(api: AxiosInstance) {
    this.api = api;
  }

  // method to fetch
  getAccessToken = async (code: string): Promise<any> => {
    return Promise.resolve({
      data: {
        accessToken: 'Access token ' + code,
        refreshToken: 'this is refresh token',
      },
    });
  };
}
