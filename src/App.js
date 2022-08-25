import { FilterBar , Navbar , ProductList } from './components';
import './App.css';

function App() {
  return (
    <div className='container w-full'>
      <Navbar />
      <div class="w-full h-min grid gap-4 m-7">
        <FilterBar />
        <ProductList />
      </div>
    </div>
  );
}

export default App;
