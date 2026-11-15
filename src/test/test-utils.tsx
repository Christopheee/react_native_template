import type { PropsWithChildren, ReactElement } from "react";
import { render, type RenderOptions } from "@testing-library/react-native";

function GlobalProviders({ children }: PropsWithChildren) {
  return children;
}

export function customRender(
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">,
) {
  return render(ui, { wrapper: GlobalProviders, ...options });
}
