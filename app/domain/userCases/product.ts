import type { IProductDetailResponse, IProductListResponse } from "../models";

export interface Product {
  getProductList(url: string): Promise<IProductListResponse>;
  getProductDetail(code: number | string): Promise<IProductDetailResponse>;
}
