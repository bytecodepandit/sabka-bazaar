import { APIEndPoints } from "./https/APIEndPoint";
import { RestAPIService } from "./https/rest-api.service";
import { CategoryItem } from "app/core/models/interfaces/CategoryItem";

export class CategoryService {
  restApiService = new RestAPIService();
  async getCategory() {
    try {
      let result: any = await this.restApiService.invoke(
        APIEndPoints.getCategories
      );
      result = result?.data.map((elem: any) => new CategoryItem({ ...elem }));
      result = result.filter((elem: any) => elem.enabled);
      result = result.sort((a: any, b: any) => b.order - a.order);
      return result;
    } catch (error) {
      return error;
    }
  }
}
