import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from ".";

describe("Button component", () => {
  test("renders button text", () => {
    const buttonText = "Click me";
    render(<Button text={buttonText} />);

    const button = screen.getByText(buttonText);
    expect(button).toBeInTheDocument();
  });

  test("triggers onClick event", () => {
    const onClickMock = jest.fn();
    render(<Button text="Click me" onClick={onClickMock} />);

    const button = screen.getByText("Click me");
    userEvent.click(button);

    expect(onClickMock).toHaveBeenCalled();
  });
});
