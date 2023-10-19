import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="title">Dictionary</header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>Coded by Sylvia SS</small>
        </footer>
      </div>
    </div>
  );
}

export default App;
