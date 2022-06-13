import { APIEndPoints } from "./https/APIEndPoint";
import { RestAPIService } from "./https/rest-api.service";
import { ProductItem } from "app/core/models/interfaces/ProductItem";

export class ProductService {
  restApiService = new RestAPIService();
  async getProducts() {
    try {
      const result: any = await this.restApiService.invoke(
        APIEndPoints.getProducts
      );
      return result?.data.map((elem: any) => new ProductItem({ ...elem }));
    } catch (error) {
      return error;
    }
  }

  async addToCart(items: ProductItem) {
    try {
      const result: any = await this.restApiService.invoke(
        APIEndPoints.addToCart
      );
      return result?.data;
    } catch (error) {
      return error;
    }
  }
}
