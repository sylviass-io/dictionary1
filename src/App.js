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
          <small>
            This project was coded by Sylvia SS and is
            <a href="https://github.com/sylviass-io/dictionary1">
              {" "}
              open-sourced on GitHub{" "}
            </a>
            and hosted on{" "}
            <a href="https://cheerful-crisp-2ffe39.netlify.app/">Netlify</a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
