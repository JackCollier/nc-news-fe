import "./App.css";
import HeaderContainer from "./components/Header/Header-Container";
import ArticleById from "./components/Main/Article-By-Id";
import MainContainer from "./components/Main/Main-Container";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App-Container">
      <HeaderContainer />
      <Routes>
        <Route path="/" element={<MainContainer />} />
        <Route path="/articles/:articleid" element={<ArticleById />} />
      </Routes>
    </div>
  );
}

export default App;
