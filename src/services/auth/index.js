export const signIn = async (email, password) => {
  try {
    const response = await fetch(
      "https://639c7fc916d1763ab14bce15.mockapi.io/signin",
      {
        body: JSON.stringify({ email, password }),
        method: "POST",
      }
    );

    return response.json();
  } catch (error) {
    return error;
  }
};
