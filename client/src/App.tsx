import { Layout } from '@src/layout';
import { Missing } from '@src/pages';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        {/* 404 route */}
        <Route path='*' element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;
