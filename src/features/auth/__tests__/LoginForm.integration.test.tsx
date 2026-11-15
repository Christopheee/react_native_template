import { HttpResponse, http } from "msw";
import { userEvent } from "@testing-library/react-native";

import { LoginForm } from "@features/auth";
import { authEndpoint } from "@test/mocks/handlers";
import { server } from "@test/mocks/server";
import { customRender } from "@test/test-utils";

describe("LoginForm", () => {
  async function fillCredentials(
    view: Awaited<ReturnType<typeof customRender>>,
  ) {
    const user = userEvent.setup();
    await user.type(view.getByLabelText("Adresse e-mail"), "user@example.com");
    await user.type(view.getByLabelText("Mot de passe"), "correct-password");

    return user;
  }

  it("authenticates the user and confirms a successful login", async () => {
    const view = await customRender(<LoginForm />);
    const user = await fillCredentials(view);

    await user.press(view.getByRole("button", { name: "Se connecter" }));

    expect(
      await view.findByText("Bienvenue, user@example.com"),
    ).toBeOnTheScreen();
  });

  it("shows an authentication error when the API returns 401", async () => {
    server.use(
      http.post(authEndpoint, () => HttpResponse.json({}, { status: 401 })),
    );
    const view = await customRender(<LoginForm />);
    const user = await fillCredentials(view);

    await user.press(view.getByRole("button", { name: "Se connecter" }));

    expect(await view.findByRole("alert")).toHaveTextContent(
      "Identifiants invalides.",
    );
  });
});
