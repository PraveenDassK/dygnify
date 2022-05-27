import "./App.css";
import MainPage from "./pages/MainPage";
function App() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div>
        <h1>Details Form</h1>
        <MainPage />
      </div>
    </div>
  );
}

export default App;
