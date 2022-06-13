import { APIEndPoints } from "./https/APIEndPoint";
import { RestAPIService } from "./https/rest-api.service";
import { HomeBanner } from "app/core/models/interfaces/HomeBanner";

export class HomeService {
  restApiService = new RestAPIService();
  async getBanners() {
    try {
      let result: any = await this.restApiService.invoke(
        APIEndPoints.getBanners
      );
      result = result?.data.map((elem: any) => new HomeBanner({ ...elem }));
      result = result.filter((elem: any) => elem.isActive);
      result = result.sort((a: any, b: any) => b - a);
      return result;
    } catch (error) {
      return error;
    }
  }
}
