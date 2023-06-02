import { render, screen } from "@testing-library/react";
import { ProductCard } from ".";
import type { IHorizontalProduct } from "~/domain/models";
import { BrowserRouter as Router } from "react-router-dom";

describe("ProductCard", () => {
  const product: IHorizontalProduct = {
    imageUrl: "https://example.com/image.jpg",
    name: "Example Product",
    price: 100,
    countOfPrices: 5,
    followCount: 10,
    code: 123,
    dropRatio: 1.1,
  };

  test("renders product information correctly", () => {
    render(
      <Router>
        <ProductCard {...product} />
      </Router>
    );

    const productName = screen.getByText(product.name);
    expect(productName).toBeInTheDocument();

    const productPrice = screen.getByText(/100 TL/i);
    expect(productPrice).toBeInTheDocument();

    const countOfPrices = screen.getByText("+5 FIYAT");

    expect(countOfPrices).toBeInTheDocument();

    const followCount = screen.getByText("10+ takip");
    expect(followCount).toBeInTheDocument();
  });

  test("renders product image with alt text", () => {
    render(
      <Router>
        <ProductCard {...product} />
      </Router>
    );

    const productImage = screen.getByAltText(
      /Example Product/i
    ) as HTMLImageElement;
    expect(productImage).toBeInTheDocument();
    expect(productImage.src).toBe("https://example.com/image.jpg");
  });

  test("renders a link to the product detail page", () => {
    render(
      <Router>
        <ProductCard {...product} />
      </Router>
    );

    const productLink = screen.getByRole("link", {
      name: /Example Product/i,
    }) as HTMLAnchorElement;
    expect(productLink).toBeInTheDocument();
    expect(productLink.href).toContain("/detail/123");
  });
});
