import React from "react";
import { render } from "@testing-library/react";
import Fibonacci from "../components/Fibonacci";
import { describe, expect, it } from "vitest";
import "./setupTests";

describe("Fibonacci component", () => {
  it("should return an error message if x is not a positive integer", () => {
    const { getByText } = render(<Fibonacci x={-1} y={2} />);
    expect(getByText("x and y must be positive integers")).toBeDefined();
  });

  it("should return an error message if y is not a positive integer", () => {
    const { queryAllByText } = render(<Fibonacci x={1} y={-2} />);
    expect(queryAllByText("x and y must be positive integers")).toBeDefined();
  });

  it("should return an error message if x is greater than y", () => {
    const { getByText } = render(<Fibonacci x={2} y={1} />);
    expect(getByText("x must be less than y")).toBeDefined();
  });

  it("should return the Fibonacci sequence if x and y are positive integers and x is less than y", () => {
    const { queryAllByText } = render(<Fibonacci x={1} y={2} />);
    expect(queryAllByText("The Fibonacci sequence for x=1 and y=2 is:")).toBeDefined();
    expect(queryAllByText("1")).toBeDefined();
    expect(queryAllByText("1")).toBeDefined();
    expect(queryAllByText("2")).toBeDefined();
  });
});