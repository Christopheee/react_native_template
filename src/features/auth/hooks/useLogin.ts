import { useState } from "react";

import { login, type LoginResult } from "../services/authService";

export interface UseLoginResult {
  readonly error: string | null;
  readonly isLoading: boolean;
  readonly result: LoginResult | null;
  readonly submit: (email: string, password: string) => Promise<void>;
}

export function useLogin(): UseLoginResult {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<LoginResult | null>(null);

  async function submit(email: string, password: string): Promise<void> {
    setIsLoading(true);
    setError(null);
    setResult(null);

    try {
      setResult(await login(email, password));
    } catch (caughtError: unknown) {
      setError(
        caughtError instanceof Error
          ? caughtError.message
          : "La connexion est indisponible. Réessayez plus tard.",
      );
    } finally {
      setIsLoading(false);
    }
  }

  return { error, isLoading, result, submit };
}
