import './App.css';
import { Cardcomponent } from './Components/Card';
import img from './assets/image-qr-code.png'

function App() {
  let title = 'Improve Your Front-end Skills by building projects';
  let body = 'Scan the qr code to visit Frontend mentor and take coding skills to next level'
  let image = img;
  return (
    <div className="App">
      <Cardcomponent title={title} body={body} image={image}/>
    </div>
  );
}

export default App;
