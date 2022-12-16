import { signIn } from ".";

describe("Test for auth functions", () => {
  it("should call signIn api with correct data", async () => {
    const mockFetchAPI = jest.fn(() =>
      Promise.resolve({
        json: () => "token",
      })
    );

    jest.spyOn(global, "fetch").mockImplementation(mockFetchAPI);

    const signInResponse = await signIn("bob_marley@ig.com.br", "123456");

    expect(mockFetchAPI).toHaveBeenCalledWith(
      "https://639c7fc916d1763ab14bce15.mockapi.io/signin",
      {
        body: '{"email":"bob_marley@ig.com.br","password":"123456"}',
        method: "POST",
      }
    );

    expect(signInResponse).toBe("token");
  });

  it("should return error", async () => {
    const mockFetchAPI = jest.fn(() => Promise.reject("Error"));

    jest.spyOn(global, "fetch").mockImplementation(mockFetchAPI);

    const signInResponse = await signIn("bob_marley@ig.com.br", "123456");

    expect(signInResponse).toBe("Error");
  });
});
