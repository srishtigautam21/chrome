import "./App.css";
import { MainPage, WelcomePage } from "./pages/index";
import { useCommonContext } from "./context/CommonContext";
import { useEffect } from "react";

function App() {
  const { name, setName } = useCommonContext();
  useEffect(() => {
    setName(localStorage.getItem("username"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className='App'>
      {name ? <MainPage /> : <WelcomePage />}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
