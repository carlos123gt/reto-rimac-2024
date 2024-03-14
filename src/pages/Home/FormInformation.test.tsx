import { render, fireEvent, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import {store} from "../../app/store";
import FormInformation from "./FormInformation";

describe("FormInformation component", () => {
  it("shows error messages for required fields when submitted without data", async () => {
    const { getByText, queryByText } = render(
      <Provider store={store}>
        <MemoryRouter>
          <FormInformation />
        </MemoryRouter>
      </Provider>
    );

    fireEvent.click(getByText("Cotiza aquí"));

    await waitFor(() => {
      const dniError = queryByText("Requerido", { selector: ".error" });
      const phoneNumberError = queryByText("Requerido", { selector: ".error" });
      const acceptPrivacityError = queryByText("Requerido", { selector: ".error" });
      const acceptComunicationError = queryByText("Requerido", { selector: ".error" });

      expect(dniError).toContain
      expect(phoneNumberError).toContain
      expect(acceptPrivacityError).toContain
      expect(acceptComunicationError).toContain
    });
  });
});
