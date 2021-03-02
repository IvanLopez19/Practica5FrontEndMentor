import './App.css';
import Card from './Component/Card';
import Ilustration from './Assets/illustration-woman-online-mobile.svg';

function App() {
  return (
    <div className="App">
      <img src={Ilustration}></img>
      <Card/>
    </div>
  );
}

export default App;
