import { Route, Routes } from 'react-router-dom';
import { Layout } from './layout';
import { Missing } from './pages';

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
