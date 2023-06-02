import type {
  IProductListResponse,
  IProductDetailResponse,
} from "~/domain/models";
import type { Product } from "~/domain/userCases/product";
import AxiosHttpClient from "~/infra/http";

class ProductService implements Product {
  async getProductList(url: string): Promise<IProductListResponse> {
    return AxiosHttpClient.get<IProductListResponse>({ url, config: {} });
  }

  getProductDetail(code: string | number): Promise<IProductDetailResponse> {
    return AxiosHttpClient.get<IProductDetailResponse>({
      url: `${process.env.SINGLE_PRODUCT_URL}?code=` + code,
    });
  }
}

export default new ProductService();
