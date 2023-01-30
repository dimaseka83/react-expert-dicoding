/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom';
import ThreadInput from "./ThreadInput";

describe('ThreadInput', () => {
  it('should handle input title change', async () => {
    render(<ThreadInput addThread={() => {}} />);
    const input = screen.getByPlaceholderText('title');
    await userEvent.type(input, 'test title');
    expect(input).toHaveValue('test title');
  });

  it('should handle input category change', async () => {
    render(<ThreadInput addThread={() => {}} />);
    const input = screen.getByPlaceholderText('category');
    await userEvent.type(input, 'test category');
    expect(input).toHaveValue('test category');
  });

  it('should handle input body change', async () => {
    render(<ThreadInput addThread={() => {}} />);
    const input = screen.getByTestId('input-body');
    await userEvent.click(input);
    await userEvent.keyboard('test body');

    expect(input.textContent).toBe('test body');
  });
});
