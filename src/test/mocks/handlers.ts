import { HttpResponse, http } from "msw";

export const authEndpoint = "https://api.example.com/auth/login";

export const handlers = [
  http.post(authEndpoint, () =>
    HttpResponse.json({
      token: "test-token",
      user: {
        id: "user-1",
        email: "user@example.com",
      },
    }),
  ),
];
