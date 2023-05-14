import { Header } from './ui/organisms/header';
import { FilterProvider } from './providers/FilterContext';
import { Filters } from './ui/molecules/filters';
import { Table } from './ui/organisms/table';
import { Summary } from './ui/organisms/summary';
import { SWRConfig } from 'swr';
import { axiosFetcher } from './lib/swr/axios-fetcher';

function App() {
  return (
    <SWRConfig value={{ fetcher: axiosFetcher, refreshInterval: 0 }}>
      <FilterProvider>
        <div className="h-full max-h-screen bg-zinc-900 flex flex-col">
          <section>
            <Header />
            <Filters />
          </section>
          <section className="grow flex gap-4 overflow-hidden">
            <div className="w-2/3 h-full">
              <Table />
            </div>
            <div className="w-1/3 h-full">
              <Summary />
            </div>
          </section>
        </div>
      </FilterProvider>
    </SWRConfig>
  );
}

export default App;
