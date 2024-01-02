import './App.css';
import Gallery from './Components/Gallery';
import Imageslider from './Components/Slider';

function App() {
  return (
    <div style={{
      padding: "10px",
      display: "flex",
      justifyContent: "center",
      alignContent: "center",
      flexDirection: "column",
      textAlign: "center"
    }}>
      <h1 style={{ fontSize: "40px"}}>Highlights</h1>
      <Imageslider />
      <Gallery />
    </div>
  );
}

export default App;
