import './App.css';
import Dakkantal from "./component/dakkantal";
import ResponsiveDrawer from "./component/drawer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
            A non-exhaustive list of Senegalese family names
        </p>
      </header>
      <Dakkantal/>
    </div>
  );
}

export default App;
