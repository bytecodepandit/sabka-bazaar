import { APIEndPoints } from "./https/APIEndPoint";
import { RestAPIService } from "./https/rest-api.service";

export class UserService {
  restAPIService = new RestAPIService();
  async login(value: any) {
    const data = await this.restAPIService.invoke(APIEndPoints.login);
    return data?.data;
  }

  async registerUser() {
    const data = await this.restAPIService.invoke(APIEndPoints.registration);
    return data?.data;
  }
}
