export interface AuthenticatedUser {
  readonly id: string;
  readonly email: string;
}

export interface LoginResult {
  readonly token: string;
  readonly user: AuthenticatedUser;
}

interface LoginResponse {
  readonly token: string;
  readonly user: AuthenticatedUser;
}

const authEndpoint = "https://api.example.com/auth/login";

export async function login(
  email: string,
  password: string,
): Promise<LoginResult> {
  const response = await fetch(authEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error(
      response.status === 401
        ? "Identifiants invalides."
        : "La connexion est indisponible. Réessayez plus tard.",
    );
  }

  return (await response.json()) as LoginResponse;
}
