/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom';
import ThreadComment from "./ThreadComment";

describe('ThreadComment', () => {
  it('should handle comment input', async () => {
    render(<ThreadComment addComment={() => {}} />); // render the component
    const commentInput = screen.getByTestId('input-content'); // get the input element

    await userEvent.click(commentInput); // click the input element
    await userEvent.keyboard('comment'); // type into the input element

    expect(commentInput.textContent).toBe('comment'); // check if the input element has the correct value
  });
});
