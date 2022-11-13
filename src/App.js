import './App.css';
import image from './Frozenfood-bro.png';
import imageTwo from './Frozenfood-pana.png';
import { List } from './List';

function App() {
  return (
    <div className="app">
      <img className='image' src={ image } alt='' />
      <h1>Grocery List</h1>
      <List/>
      <img className='image' src={ imageTwo } alt='' />
    </div>
  );
}

export default App;
