import { Provider } from 'react-redux';
import store from './store';
import EstiloGlobal, { Container } from './styles/index';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Páginas
import Home from './pages/Home';
import Cadastro from './pages/Cadastro';

/// Roteamento de páginas
const rotas = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/criar_tarefa', element: <Cadastro /> }
]);

function App() {

  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <RouterProvider router={rotas} />
      </Container>
    </Provider>
  );
}

export default App;
