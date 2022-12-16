import { fireEvent, render } from "@testing-library/react";
import PrimaryInput from ".";

describe("Test for PrimaryInput component", () => {
  const makeSut = (type) => {
    return <PrimaryInput type={type} />;
  };

  it("should change input type when button is clicked", () => {
    const sut = makeSut("password");

    const { getByTestId } = render(sut);

    const input = getByTestId("input-test");

    const button = getByTestId("input-button-text");

    expect(input.type).toBe("password");

    fireEvent.click(button);

    expect(input.type).toBe("text");
  });
});
