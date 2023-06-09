import { Header } from './ui/organisms/header';
import { FilterProvider } from './providers/FilterContext';
import { Filters } from './ui/molecules/filters';
import { Table } from './ui/organisms/table';
import { Summary } from './ui/organisms/summary';
import { SWRConfig } from 'swr';
import { axiosFetcher } from './lib/swr/axios-fetcher';
import { PlayerProvider } from './providers/PlayerContext';

function App() {
  return (
    <SWRConfig value={{ fetcher: axiosFetcher, refreshInterval: 0 }}>
      <FilterProvider>
        <PlayerProvider>
          <div className="h-full max-h-screen bg-zinc-900 flex flex-col">
            <section>
              <Header />
              <Filters />
            </section>
            <section className="grow flex gap-4 overflow-hidden p-8 pt-0">
              <div className="w-2/3 h-full">
                <Table />
              </div>
              <div className="w-1/3 h-full">
                <Summary />
              </div>
            </section>
          </div>
        </PlayerProvider>
      </FilterProvider>
    </SWRConfig>
  );
}

export default App;
