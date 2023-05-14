import { Filters } from './index';
import {
  screen,
  render,
  waitForElementToBeRemoved,
  waitFor,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Filters', () => {
  const user = userEvent.setup();

  test('renders component without error', async () => {
    render(<Filters />);

    const loader = screen.getByText('Loading...');

    await waitFor(() => {
      expect(loader).not.toBeInTheDocument();
    });

    // Loader should disappear once request resolves
    await waitForElementToBeRemoved(loader);

    const operators = screen.getByLabelText('operators');

    user.selectOptions(operators, 'Operator 2');
  });
});
