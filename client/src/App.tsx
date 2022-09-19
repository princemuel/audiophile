import { Layout } from '@src/components/organisms/layout';
import {
  Earphones,
  Headphones,
  Home,
  Missing,
  Speakers,
} from '@src/components/pages';
import { Earphone, Headphone, Speaker } from '@src/views';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />

        <Route path='headphones'>
          <Route index element={<Headphones />} />
          <Route path=':id' element={<Headphone />} />
        </Route>

        <Route path='speakers'>
          <Route index element={<Speakers />} />
          <Route path=':id' element={<Speaker />} />
        </Route>

        <Route path='earphones'>
          <Route index element={<Earphones />} />
          <Route path=':id' element={<Earphone />} />
        </Route>
        {/* 404 route */}
        <Route path='*' element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;
