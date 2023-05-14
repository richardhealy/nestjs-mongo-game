import { Filters } from './index';
import {
  screen,
  render,
  waitForElementToBeRemoved,
  fireEvent,
} from '@testing-library/react';
import { SWRConfig } from 'swr';
import { axiosFetcher } from '../../../lib/swr/axios-fetcher';

import { server } from '../../../mocks/server';
import { FilterProvider } from '../../../providers/FilterContext';

beforeAll(() =>
  server.listen({
    onUnhandledRequest: 'warn',
  }),
);
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Filters', () => {
  test('renders component without error', async () => {
    render(
      <SWRConfig
        value={{
          fetcher: axiosFetcher,
          dedupingInterval: 0,
          refreshInterval: 0,
        }}
      >
        <FilterProvider>
          <Filters />
        </FilterProvider>
      </SWRConfig>,
    );

    const loader = screen.getByText('Loading...');

    // Loader should disappear once request resolves
    await waitForElementToBeRemoved(loader);

    const operators = screen.getByLabelText('operator');

    const operatorText = await screen.findByText('Operator2');

    expect(operatorText).toBeInTheDocument();

    fireEvent.change(operators, { target: { value: 'Operator2' } });

    const gameType = screen.getByLabelText('gameType');

    const gameTypeText = await screen.findByText('GameType2');

    expect(gameTypeText).toBeInTheDocument();

    fireEvent.change(gameType, { target: { value: 'GameType2' } });

    const slateName = screen.getByLabelText('gameType');

    const slateText = await screen.findByText('Slate2');

    expect(slateText).toBeInTheDocument();

    fireEvent.change(slateName, { target: { value: 'Slate2' } });
  });
});
