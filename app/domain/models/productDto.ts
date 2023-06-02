export type IProductCore = {
  imageUrl: string;
  countOfPrices: number;
  price: number;
};

export interface IProductDetail extends IProductCore {
  mkName: string;
  productName: string;
  badge: string;
  rating: number;
  storageOptions: Array<string>;
  freeShipping: boolean;
  lastUpdate: string;
}

export interface IHorizontalProduct extends IProductCore {
  code: number;
  name: string;
  dropRatio: number;
  followCount: number;
}

export type IProductDetailResponse = {
  result: IProductDetail;
};

export type IProductListResponse = {
  result: {
    nextUrl: string;
    horizontalProducts: Array<IHorizontalProduct>;
    products: Array<IHorizontalProduct>;
  };
};
