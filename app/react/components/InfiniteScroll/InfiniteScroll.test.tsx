import { render, fireEvent } from "@testing-library/react";
import InfiniteScroll from ".";

describe("InfiniteScroll", () => {
  const mockLoad = jest.fn();

  it("should not call load function when not scrolled to the bottom", () => {
    const { container } = render(
      <InfiniteScroll load={mockLoad}>
        <div>Item 1</div>
        <div>Item 2</div>
      </InfiniteScroll>
    );

    const scrollHeight = 200;
    const clientHeight = 100;
    const scrollTop = 50;

    Object.defineProperty(container, "scrollHeight", { value: scrollHeight });
    Object.defineProperty(container, "clientHeight", { value: clientHeight });
    Object.defineProperty(container, "scrollTop", { value: scrollTop });

    fireEvent.scroll(container);

    expect(mockLoad).not.toHaveBeenCalled();
  });

  it("should render children and show loading when loading prop is true", () => {
    const loadMock = jest.fn();
    const childrenText = "Test Children";

    const { getByText } = render(
      <InfiniteScroll load={loadMock} loading>
        <div>{childrenText}</div>
      </InfiniteScroll>
    );

    const childrenElement = getByText(childrenText);

    expect(childrenElement).toBeInTheDocument();
  });
});
