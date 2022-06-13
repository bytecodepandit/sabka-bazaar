import { BASE_URL } from "app/app.config";
export const APIEndPoints = {
  login: {
    method: "GET",
    api: () => `/user/index.post.json`,
  },
  registration: {
    method: "GET",
    api: () => `/user/index.post.json`,
  },
  getCategories: {
    method: "GET",
    api: () => `/categories/index.get.json`,
  },

  getProducts: {
    method: "GET",
    api: () => `/products/index.get.json`,
  },

  addToCart: {
    method: "GET",
    api: () => `/addToCart/index.post.json`,
  },

  getBanners: {
    method: "GET",
    api: () => `/banners/index.get.json`,
  },
};

export interface APIDef {
  method: string;
  api: any;
  isWhiteListed?: boolean;
}

export interface APIInput {
  id?: any;
}
