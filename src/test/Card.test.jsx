import React from "react";
import { render } from "@testing-library/react";
import Card from "../components/Card";
import { describe, expect, it } from "vitest";
import "./setupTests";

describe("Card component", () => {
  it("should render the card", () => {
    const { getByText } = render(<Card>Fibonacci</Card>);
    expect(getByText("Fibonacci")).toBeDefined();
  });

  it("should render the children", () => {
    const { getAllByText } = render(<Card>Fibonacci</Card>);
    expect(getAllByText("Fibonacci").length).toBeGreaterThan(0);
  });
});