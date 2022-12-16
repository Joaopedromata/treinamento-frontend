import { fireEvent, render, waitFor } from "@testing-library/react";
import Home from ".";
import * as authFunc from "../../services/auth";

describe("Test for Home page", () => {
  const makeSut = () => <Home />;

  it("should call alert with input values", async () => {
    const sut = makeSut();

    const mockSignIn = jest.fn(() => ({
      token: "bob marley",
    }));

    jest.spyOn(authFunc, "signIn").mockImplementation(mockSignIn);

    const mockWindowAlert = jest.fn();

    jest.spyOn(window, "alert").mockImplementation(mockWindowAlert);

    const { getByTestId } = render(sut);

    const emailInput = getByTestId("home-email-input");
    fireEvent.change(emailInput, {
      target: {
        value: "bob_marley@ig.com.br",
      },
    });

    const passwordInput = getByTestId("home-password-input");
    fireEvent.change(passwordInput, {
      target: {
        value: "123456",
      },
    });

    const button = getByTestId("home-button");

    fireEvent.click(button);

    await waitFor(() => {
      expect(mockSignIn).toHaveBeenCalledWith("bob_marley@ig.com.br", "123456");
      expect(mockWindowAlert).toHaveBeenCalledWith("bob marley");
    });
  });
});
