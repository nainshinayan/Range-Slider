import logo from './logo.svg';
import './App.css';
import Slider from '../src/component/sliderComponent';

function App() {
  return (
    <div className="App">
      <Slider
      minValue = {50} 
      maxValue = {200}
      defaultValue = {Math.floor(50+200)/2}></Slider>
    </div>
  );
}

export default App;
