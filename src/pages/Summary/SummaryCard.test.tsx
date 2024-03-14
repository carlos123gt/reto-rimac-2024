import { render } from "@testing-library/react";
import SummaryCard from "./SummaryCard";
import { expect, describe, it } from "@jest/globals";

describe("SummaryCard component", () => {
  const testData = {
    username: "John Doe",
    dni: "12345678",
    cellphoneNumber: "123456789",
    plan: "Plan A",
    price: 100,
  };

  it("renders with correct data", () => {
    const { getByText } = render(<SummaryCard data={testData} />);

    expect(getByText("PRECIOS CALCULADOS PARA:")).toContain
    expect(getByText("John Doe")).toContain
    expect(getByText("Responsable de pago")).toContain
    expect(getByText("DNI: 12345678")).toContain
    expect(getByText("Celular: 123456789")).toContain
    expect(getByText("Plan elegido")).toContain
    expect(getByText("Plan A")).toContain
    expect(getByText("Costo del Plan: $100 al mes")).toContain
  });
});
