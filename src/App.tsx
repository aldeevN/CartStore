import { Routes, Route } from 'react-router-dom'
import { Home } from './components/pages/Home';
import { Store } from './components/pages/Store';
import { About } from './components/pages/About';
import SearchAppBar from './components/SearchAppBar';
import Container from '@mui/material/Container';
import { ShoppingCartProvider } from './components/contex/ShoppingCartContext'
function App() {
  return (
    <>
      <ShoppingCartProvider>
        <SearchAppBar />
        <Container fixed>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/store' element={<Store />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </Container>
      </ShoppingCartProvider>
    </>
  );
}

export default App;
