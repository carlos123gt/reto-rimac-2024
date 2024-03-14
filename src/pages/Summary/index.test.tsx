import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Summary from "./index";
import { store } from "../../app/store";
import { expect, describe, it } from "@jest/globals";

describe("Summary component", () => {

  it("redirects to home if user is not available", () => {
    const { container } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Summary />
        </BrowserRouter>
      </Provider>
    );

    expect(container).not.toContain("Resumen del seguro");
  });

  it("redirects to plans if selected plan is not available", () => {
    const { container } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Summary />
        </BrowserRouter>
      </Provider>
    );

    expect(container).not.toContain("Resumen del seguro");
  });
});
