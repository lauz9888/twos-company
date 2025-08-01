import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MenuScreen from "./MenuScreen";

describe("MenuScreen", () => {
  test("loads the menu screen and locates the season menu button", () => {
    render(<MenuScreen onSeasonMenu={() => {}} />);
    // Check that the menu screen is present
    expect(screen.getByTestId("menu-screen")).toBeInTheDocument();
    // Check that the season menu button is present and accessible (by image)
    const button = screen.getByTestId("season-menu-button");
    expect(button).toBeInTheDocument();
    expect(screen.getByAltText(/season menu button/i)).toBeInTheDocument();
  });
});