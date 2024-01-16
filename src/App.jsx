import './App.css';
import NavBar from './componentes/navBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';

function App() {

  return (
    <>
      <div className='navBar'>
        <NavBar/>
        <ItemListContainer greeting={'Bienvenidos'}/>
        <ItemDetailContainer/>
      </div>

    </>
  )
}

export default App
