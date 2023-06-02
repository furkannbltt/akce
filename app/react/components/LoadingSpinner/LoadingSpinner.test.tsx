import { render } from "@testing-library/react";
import LoadingSpinner from ".";
import { LOADING_SPINNER_WRAPPER } from "./constants";

describe("LoadingSpinner component", () => {
  test("renders correctly", () => {
    const { container, getByTestId } = render(<LoadingSpinner />);

    const spinnerElement = getByTestId(LOADING_SPINNER_WRAPPER);

    expect(container).toBeInTheDocument();
    expect(spinnerElement).toBeInTheDocument();
  });
});
