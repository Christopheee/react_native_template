import { userEvent } from "@testing-library/react-native";

import { Button } from "@shared/components/Button";
import { customRender } from "@test/test-utils";

describe("Button", () => {
  it("renders its label and exposes the button accessibility semantics", async () => {
    const view = await customRender(
      <Button label="Continuer" onPress={jest.fn()} />,
    );

    expect(view.getByText("Continuer")).toBeOnTheScreen();
    expect(view.getByRole("button", { name: "Continuer" })).toBeOnTheScreen();
  });

  it("calls onPress when enabled", async () => {
    const onPress = jest.fn();
    const user = userEvent.setup();

    const view = await customRender(
      <Button label="Continuer" onPress={onPress} />,
    );
    await user.press(view.getByRole("button", { name: "Continuer" }));

    expect(onPress).toHaveBeenCalledTimes(1);
  });

  it("does not call onPress when disabled", async () => {
    const onPress = jest.fn();
    const user = userEvent.setup();

    const view = await customRender(
      <Button disabled label="Continuer" onPress={onPress} />,
    );
    await user.press(view.getByRole("button", { name: "Continuer" }));

    expect(onPress).not.toHaveBeenCalled();
  });
});
