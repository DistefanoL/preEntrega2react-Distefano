
import './App.css';
import NavBar from './componentes/navBar/navBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';

function App() {

  return (
    <>
      <div className='navBar'>
        <NavBar/>
        <ItemListContainer greeting={'Bienvenidos'}/>
        
      </div>

    </>
  )
}

export default App
