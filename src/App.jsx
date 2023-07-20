import "./App.css";
import HeaderContainer from "./components/Header/Header-Container";
import ArticleById from "./components/Main/Article-By-Id";
import MainContainer from "./components/Main/Main-Container";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "./components/Page-Not-Found";

function App() {
  return (
    <div className="App-Container">
      <HeaderContainer />
      <Routes>
        <Route path="/" element={<MainContainer />} />
        <Route path="/articles/:articleid" element={<ArticleById />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
