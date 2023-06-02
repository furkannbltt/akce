import { render } from "@testing-library/react";
import Typography from ".";
import { FULL_WIDTH, HAS_ON_CLICK, TYPOGRAPHY_TEST } from "./constants";

describe("Typography", () => {
  it("renders the correct element with the provided props", () => {
    const text = "Test Text";
    const color = "secondary";
    const as = "h1";
    const variant = "body-base";
    const className = "custom-class";
    const onClick = jest.fn();
    const fullWidth = true;

    const { getByTestId, container } = render(
      <Typography
        as={as}
        color={color}
        variant={variant}
        className={className}
        onClick={onClick}
        fullWidth={fullWidth}
      >
        {text}
      </Typography>
    );

    const typographyElement = getByTestId(TYPOGRAPHY_TEST);
    expect(typographyElement).toBeInTheDocument();

    const typographyContainer = container.firstChild as HTMLElement;
    expect(typographyContainer).toHaveClass(color);
    expect(typographyContainer).toHaveClass(variant);
    expect(typographyContainer).toHaveClass(className);
    expect(typographyContainer).toHaveClass(HAS_ON_CLICK);
    expect(typographyContainer).toHaveClass(FULL_WIDTH);

    expect(onClick).not.toHaveBeenCalled();

    typographyContainer.click();
    expect(onClick).toHaveBeenCalled();
  });
});
