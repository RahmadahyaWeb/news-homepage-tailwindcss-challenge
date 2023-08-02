import Article from "./components/article/Article";
import Main from "./components/main/Main";
import Navbar from "./components/navbar/Navbar";
import New from "./components/new/New";
import "./index.css";

function App() {
  return (
    <div className="font-Inter">
      <Navbar />
      <Main />
      <Article />
    </div>
  );
}

export default App;
