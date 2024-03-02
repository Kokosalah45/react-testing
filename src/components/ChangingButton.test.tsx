import { render, screen , fireEvent } from "@testing-library/react";
import ChangingButton from "./ChangingButton";
import React from "react";

test("change button should toggle",  () => {
    
  const toggles = [
    { color: "green", text: "Go" },
    { color: "red", text: "Stop" },
    { color: "yellow", text: "Wait" },
    { color: "blue", text: "Jump" },
  ];

  render(<ChangingButton isDisabled={false} toggles={toggles} />);

  const button =  screen.getByRole("button");

  toggles.forEach( (toggle) => {

    const expectedBackgroundColor = toggle.color;
    const expectedTextContent = toggle.text;

    expect(button).toHaveTextContent(expectedTextContent);
    expect(button.style.backgroundColor).toBe(expectedBackgroundColor)

    fireEvent.click(button)
    
  });
});
