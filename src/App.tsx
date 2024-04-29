import { Provider } from 'react-redux'
import ListaDeContatos from './Containers/Contatos'
import store from './store/store'
import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <ListaDeContatos />
      </Container>
    </Provider>
  )
}

export default App
