import { Header } from './ui/organisms/header';
import { FilterProvider } from './providers/FilterContext';
import { Filters } from './ui/molecules/filters';
import { Table } from './ui/organisms/table';
import { Summary } from './ui/organisms/summary';

function App() {
  return (
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
  );
}

export default App;
