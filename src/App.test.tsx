import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";

import App from "./App";

test("App contains correct heading", () => {
  render(<App/>) ;
  const headingElement = screen.getByRole('heading' , {name: /learn react/i});
  expect(headingElement).toBeInTheDocument();
});

test("checkbox should start of as unchecked and button should be active",  () => {
    
  render(<App/>);

  const checkbox =  screen.getByRole<HTMLInputElement>("checkbox");
  const button = screen.getByRole('button')

  expect(button).toBeEnabled()
  expect(checkbox).not.toBeChecked()

});


test("checkbox should be checked and button should be active after clicking",  () => {
    
  render(<App/>);

  const checkbox =  screen.getByRole<HTMLInputElement>("checkbox");
  const button = screen.getByRole('button')

  fireEvent.click(checkbox)

  expect(button).toBeDisabled()
  expect(checkbox).toBeChecked()


});
test("checkbox and button should return to their initial state after clicking for the second time",  () => {
    
    render(<App/>);
  
    const checkbox =  screen.getByRole<HTMLInputElement>("checkbox");
    const button = screen.getByRole('button')
    
    fireEvent.click(checkbox)
    fireEvent.click(checkbox)
  
    expect(button).toBeEnabled()
    expect(checkbox).not.toBeChecked()
  
  
  });
  test("disabling the button should be gray enabling should return it back to the current color",  () => {
    
    render(<App/>);
  
    const checkbox =  screen.getByRole<HTMLInputElement>("checkbox");
    const button = screen.getByRole('button')
    
    fireEvent.click(checkbox)
  
    expect(button.style.backgroundColor).toBe('gray')

    fireEvent.click(checkbox)

    expect(button.style.backgroundColor).toBe('red')


  
  });

  test("clicking the button should change color then disabling should make it gray",  () => {
    
    render(<App/>);
  
    const checkbox =  screen.getByRole<HTMLInputElement>("checkbox");
    const button = screen.getByRole('button')

    fireEvent.click(button)
    fireEvent.click(checkbox)

    expect(button.style.backgroundColor).toBe('gray')
    
    fireEvent.click(checkbox)

    expect(button.style.backgroundColor).toBe('green')

  
  
  });



