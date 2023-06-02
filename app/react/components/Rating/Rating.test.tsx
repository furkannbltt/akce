import { render } from "@testing-library/react";
import Rating from ".";
import { GREEN, RATING, RED, YELLOW } from "./contants";

describe("Rating", () => {
  it("renders the rating value and applies the correct color class", () => {
    const ratingValue = 5.2;
    const { getByTestId, container } = render(<Rating value={ratingValue} />);

    const ratingElement = getByTestId(RATING);
    expect(ratingElement).toBeInTheDocument();

    const ratingContainer = container.firstChild as HTMLElement;
    expect(ratingContainer).toHaveClass(RATING);

    const colorClass = ratingContainer.classList.contains(RED)
      ? RED
      : ratingContainer.classList.contains(YELLOW)
      ? YELLOW
      : GREEN;
    expect(colorClass).toBe(YELLOW);
  });
});
