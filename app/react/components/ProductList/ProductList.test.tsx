import { render } from "@testing-library/react";
import type { IHorizontalProduct } from "~/domain/models";
import ProductList from ".";
import { BrowserRouter as Router } from "react-router-dom";

const products: IHorizontalProduct[] = [
  {
    code: 123,
    name: "Product 1",
    price: 10,
    dropRatio: 0.5,
    followCount: 100,
    imageUrl: "https://example.com/product1.jpg",
    countOfPrices: 5,
  },
  {
    code: 124,
    name: "Product 2",
    price: 20,
    dropRatio: 0.2,
    followCount: 200,
    imageUrl: "https://example.com/product2.jpg",
    countOfPrices: 3,
  },
];

describe("ProductList component", () => {
  test("renders product list wrapper correctly", () => {
    const { getByTestId } = render(
      <Router>
        <ProductList products={products} />
      </Router>
    );
    const productListWrapper = getByTestId("product-list-wrapper");
    expect(productListWrapper).toBeInTheDocument();
  });

  test("renders product list correctly", () => {
    const { getByTestId } = render(
      <Router>
        <ProductList products={products} />
      </Router>
    );
    const productList = getByTestId("product-list");
    expect(productList).toBeInTheDocument();
  });

  test("renders individual product cards correctly", () => {
    const { getByText } = render(
      <Router>
        <ProductList products={products} />
      </Router>
    );
    products.forEach((product) => {
      const productName = getByText(product.name);
      expect(productName).toBeInTheDocument();
    });
  });
});
