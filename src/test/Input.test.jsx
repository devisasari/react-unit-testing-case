import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Input from "../components/Input";
import { describe, expect, it } from "vitest";
import "./setupTests";
import { jest, fn } from 'jest';

describe("Input component", () => {
  it("have a button", () => {
    const { getByText } = render(<Input />);
    expect(getByText("Calculate")).toBeDefined();
  });
});
