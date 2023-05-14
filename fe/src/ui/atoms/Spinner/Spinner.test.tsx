import { Spinner } from './index';
import { screen, render } from '@testing-library/react';

describe('Spinner', () => {
  test('renders component without error', () => {
    render(<Spinner />);

    const loadingText = screen.getByText('Loading...');

    expect(loadingText).toBeInTheDocument();
  });
});
