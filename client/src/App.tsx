import { Layout } from '@src/layout';
import { Home, Missing, Products } from '@src/pages';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />

        <Route path='products'>
          <Route index element={<Products />} />
        </Route>
        {/* 404 route */}
        <Route path='*' element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;
