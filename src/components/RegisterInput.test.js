/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom';
import RegisterInput from "./RegisterInput";

describe('RegisterInput', () => {
  it('should handle username input', async () => {
    render(<RegisterInput register={() => {}} />); // render the component
    const usernameInput = screen.getByPlaceholderText('Name'); // get the input element

    await userEvent.type(usernameInput, 'username'); // type into the input element

    expect(usernameInput).toHaveValue('username'); // check if the input element has the correct value
  });

  it('should handle email input', async () => {
    render(<RegisterInput register={() => {}} />); // render the component
    const emailInput = screen.getByPlaceholderText('Email'); // get the input element

    await userEvent.type(emailInput, 'email@mail.com'); // type into the input element

    expect(emailInput).toHaveValue('email@mail.com'); // check if the input element has the correct value
  });

  it('should handle password input', async () => {
    render(<RegisterInput register={() => {}} />); // render the component
    const passwordInput = screen.getByPlaceholderText('Password'); // get the input element

    await userEvent.type(passwordInput, 'password'); // type into the input element

    expect(passwordInput).toHaveValue('password'); // check if the input element has the correct value
  });

  it('should handle button click', async () => {
    const register = jest.fn();
    render(<RegisterInput register={register} />); // render the component
    const nameInput = await screen.findByPlaceholderText('Name'); // get the input element
    const emailInput = await screen.findByPlaceholderText('Email'); // get the input element
    const passwordInput = await screen.findByPlaceholderText('Password'); // get the input element

    await userEvent.type(nameInput, 'username'); // type into the input element
    await userEvent.type(emailInput, 'email@mail'); // type into the input element
    await userEvent.type(passwordInput, 'password'); // type into the input element

    const button = screen.getByRole('button'); // get the button element

    userEvent.click(button); // click the button

    expect(register).toBeCalledWith({
      name: 'username',
      email: 'email@mail',
      password: 'password',
    });
  });
});
