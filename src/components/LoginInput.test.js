/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom';
import LoginInput from "./LoginInput";

describe('LoginInput', () => {
  it('should handle email input', async () => {
    render(<LoginInput login={() => {}} />); // render the component
    const emailInput = screen.getByPlaceholderText('Email'); // get the input element

    await userEvent.type(emailInput, 'email@mail.com'); // type into the input element

    expect(emailInput).toHaveValue('email@mail.com'); // check if the input element has the correct value
  });

  it('should handle password input', async () => {
    render(<LoginInput login={() => {}} />); // render the component
    const passwordInput = screen.getByPlaceholderText('Password'); // get the input element

    await userEvent.type(passwordInput, 'password'); // type into the input element

    expect(passwordInput).toHaveValue('password'); // check if the input element has the correct value
  });

  it('should handle login', async () => {
    const login = jest.fn(); // create a mock function
    render(<LoginInput login={login} />); // render the component

    const emailInput = screen.getByPlaceholderText('Email'); // get the input element
    const passwordInput = screen.getByPlaceholderText('Password'); // get the input element
    const loginButton = screen.getByRole('button'); // get the button element

    await userEvent.type(emailInput, 'email@mail.com'); // type into the input element
    await userEvent.type(passwordInput, 'password'); // type into the input element
    await userEvent.click(loginButton); // click the button

    expect(login).toBeCalledWith({
      email: 'email@mail.com',
      password: 'password',
    });
  });
});
