/* eslint-disable react-hooks/exhaustive-deps */
import type { LoaderArgs, V2_MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useEffect, useRef, useState } from "react";
import type { IHorizontalProduct } from "~/domain/models";
import InfiniteScroll from "~/react/components/InfiniteScroll";
import ProductList from "~/react/components/ProductList";
import ProductService from "../data/userCases/product";
import "../react/styles/index.css";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

const getAllProducts = async (url?: string) => {
  return await ProductService.getProductList(
    url ?? "https://mocki.io/v1/59906f35-d5d5-40f7-8d44-53fd26eb3a05"
  );
};

export const loader = async (args: LoaderArgs) => {
  return await getAllProducts();
};

export default function Index() {
  const productResult = useLoaderData<typeof loader | null>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [nextUrl, setNextUrl] = useState<string>("");
  const [products, setProducts] = useState<IHorizontalProduct[]>(
    productResult?.result.products as IHorizontalProduct[]
  );
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (productResult && productResult.result.products.length > 0) {
      setProducts(productResult.result.products);
      const newNextUrl = productResult?.result?.nextUrl ?? "";
      setNextUrl(newNextUrl);
    }
  }, [JSON.stringify(productResult)]);

  const getNext = async () => {
    if (!nextUrl) return;
    setIsLoading(true);
    const res = await getAllProducts(nextUrl);
    console.log(res, "AAAA");
    setProducts((prev) => [...prev, ...res.result.products]);
    setNextUrl(res.result.nextUrl);
    setIsLoading(false);
  };

  return (
    <div className="home" ref={containerRef}>
      <InfiniteScroll ref={containerRef} load={getNext} loading={isLoading}>
        <ProductList products={products} />
      </InfiniteScroll>
    </div>
  );
}
